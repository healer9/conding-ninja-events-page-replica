import React, { useState, useEffect } from 'react'
import axios from 'axios'
import qs from 'qs'
import Heading from './Heading'
import EventIcon from '../../assets/all-events-logo.svg'
import WebinarIcon from '../../assets/webinars-logo.svg'
import CodingIcon from '../../assets/coding-logo.svg'
import BootcampIcon from '../../assets/bootcamp-logo.png'
import WorkshopIcon from '../../assets/workshop-logo.png'
import EventCard from './EventCard'
import Pagination from './Pagination'
import './events.css'

const Events = () => {
    const [tags, setTags] = useState([])
    const [eventCategory, setEventCategory] = useState('ALL_EVENTS')
    const [subCategory, setSubCategory] = useState('Upcoming')
    const [tagList, setTagList] = useState([])
    const [offset] = useState(0)
    const [events, setEvents] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [eventsPerPage] = useState(20);

    useEffect(() => {
        setIsLoading(true)

        async function fetchEvents() {
            // console.log(tagList)
            const events = await axios.get('https://api.codingninjas.com/api/v3/events', {
                params: {
                    event_category: eventCategory,
                    event_sub_category: subCategory,
                    tag_list: tagList.length === 0 ? 'Interview Preparation' : tagList,
                    offset: parseInt(offset)
                },
                paramsSerializer: params => {
                    return qs.stringify(params, { arrayFormat: "repeat" })
                }
            })

            // console.log(events.data.data.events)
            setEvents(events.data.data.events)
            setIsLoading(false)
        }
        fetchEvents()
    }, [eventCategory, subCategory, tagList, offset])

    useEffect(() => {
        async function fetchTags() {
            const tagName = await axios.get('https://api.codingninjas.com/api/v3/event_tags')
            setTags(tagName.data.data.tags)
        }
        fetchTags()

        let getCatDiv = document.getElementsByClassName("tabs")
        // console.log(getCatDiv)
        for (let i = 0; i < getCatDiv.length; i++) {
            getCatDiv[i].addEventListener("click", function () {
                let current = document.getElementsByClassName("cat-active")
                current[0].className = current[0].className.replace(" cat-active", "")
                this.className += " cat-active"
            })
        }

        let getDiv = document.getElementsByClassName("cat-btn")
        // console.log(getDiv)

        for (let i = 0; i < getDiv.length; i++) {
            getDiv[i].addEventListener("click", function () {
                let current = document.getElementsByClassName("cat-btn-active")
                current[0].className = current[0].className.replace(" cat-btn-active", "")
                this.className += " cat-btn-active"
            })
        }

    }, [])

    const handleTags = (tag) => {
        const tagName = tag.target.innerHTML

        setTagList(tagList.filter(item => item !== tagName))
        if (tag.target.classList.value === 'tags') {
            setTagList([...tagList, tagName])
            tag.target.classList.toggle('active')
        } else {
            tag.target.classList.remove('active')
        }
    }

    const categories = [
        { "icon": EventIcon, "name": "All Events" },
        { "icon": WebinarIcon, "name": "Webinars" },
        { "icon": CodingIcon, "name": "Coding Events" },
        { "icon": BootcampIcon, "name": "Bootcamp Events" },
        { "icon": WorkshopIcon, "name": "Workshop" }
    ]

    const subCategories = ['Upcoming', 'Archived', 'All Time Favorites']

    const handleCategoryClick = (category) => {
        let cat = category.target.innerText
        cat = cat.split(' ').join('_')
        //console.log(cat)
        setEventCategory(cat)
    }

    const handleSubCategoryClick = (subCategory) => {
        let subCat = subCategory.target.innerText
        subCat = subCat.split(' ').join('_')
        setSubCategory(subCat)
    }

    //  Get current events
    const indexOfLastEvent = currentPage * eventsPerPage
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage
    const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent)

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div>
            <Heading />
            <div className="events-outer-wrapper">
                <div className="events-wrapper">
                    <div className="event-category">
                        {categories.map((category) => {
                            return <div
                                className={category.name === 'All Events' ? `tabs cat-active` : 'tabs'}
                                key={category.name}
                                onClick={handleCategoryClick}>
                                <img style={{ "width": "20px", "marginRight": "10px" }} src={category.icon} alt="" />
                                {category.name}
                            </div>
                        })}
                    </div>
                    <div className="event-sub-category">
                        {subCategories.map((category) => {
                            return <div
                                key={category}
                                className={category === 'Upcoming' ? `cat-btn cat-btn-active` : 'cat-btn'}
                                onClick={handleSubCategoryClick}>
                                {category}
                            </div>
                        })}
                    </div>

                    <div className="events-body">
                        <div className="event-cards-container">
                            <EventCard
                                events={currentEvents}
                                isLoading={isLoading}
                                subCategory={subCategory}
                            />
                            <Pagination
                                eventsPerPage={eventsPerPage}
                                totalEvents={events.length}
                                isLoading={isLoading}
                                paginate={paginate}
                            />
                        </div>
                        <div className="tags-container">
                            <div className="tags-heading">TAGS</div>
                            <div className="tags-wrapper">
                                {tags.map((tag) => {
                                    return <div
                                        key={tag}
                                        className="tags"
                                        onClick={handleTags}
                                    >
                                        {tag}
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events
