import React from 'react'
import Moment from 'react-moment'
import Avatar from 'react-avatar'
import Register from '../../assets/register-btn.png'
import './events.css'

const EventCard = ({ events, isLoading, subCategory }) => {
    if (isLoading) {
        return <h1>Events are Loading...</h1>
    }

    const eventTimeStyle = {
        "fontSize": "13px",
        "fontWeight": "600"
    }

    const handleClick = (e) => {
        let str = e.target.getAttribute("alt")
        str = str.replace(/\W/g, ' ')
        str = str.replace(/\s+/g, ' ').trim()
        str = str.split(' ').join('-')

        let path = ""
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== '-')
                path += str[i].toLowerCase()
            else
                path += str[i]
        }

        window.open(`https://www.codingninjas.com/events/${path}`)
    }


    return (
        <div className="event-lists">
            {events.length === 0 ? <h1>No Events Found</h1>
                : events.map(event => (
                    <div
                        key={event.id}
                        className="event-card"
                    >
                        <img className="event-img" src={event.cover_picture} alt="" />
                        {subCategory === 'Upcoming' && <div
                            className="event-status-container">
                            Registrations <span style={eventTimeStyle}>open</span> till&nbsp;
                            <Moment
                                style={eventTimeStyle}
                                format="DD MMM, LT"
                                unix>{event.registration_end_time}
                            </Moment>
                        </div>}
                        <div className="event-card-info">
                            <div className="event-name">{event.name}</div>
                            <div className="event-details">
                                <div className="event-div">
                                    <b className="event-li">Starts on</b>
                                    <p style={eventTimeStyle}>
                                        <Moment
                                            format="LT, DD MMM YYYY"
                                            unix>{event.event_start_time}
                                        </Moment>
                                    </p>
                                </div>
                                <div className="event-div">
                                    <b className="event-li">Entry Fee</b>
                                    <p style={eventTimeStyle}>
                                        {event.fees === 0 ? `Free` : event.currency + event.fees}</p>
                                </div>
                                <div className="event-div">
                                    <b className="event-li">Venue</b>
                                    <p style={eventTimeStyle}>{event.venue}</p>
                                </div>
                            </div>
                            <div className="event-description">{event.short_desc}</div>
                            <div className="event-card-tag-container">
                                {event.card_tags.map(cards => (
                                    <li
                                        className="event-card-tag"
                                        key={cards}
                                    >{cards}</li>
                                ))}
                            </div>
                        </div>
                        <div className="registration-div">
                            <div className="registration-container">
                                {event.registered_users.top_users.map(user => (
                                    <Avatar
                                        style={{ "marginRight": "3px", "marginBottom": "2px" }}
                                        round={true}
                                        size="20"
                                        src={user.image_url} />
                                ))}
                                {event.registered_users.show_users_count &&
                                    <p className="user-count">
                                        and <span style={{ "fontWeight": "700", "color": "#000" }}>
                                            {event.registered_users.other_users_count}</span> other registered
                                    </p>}
                            </div>
                            {subCategory === 'Upcoming' && <div>
                                <img
                                    onClick={handleClick}
                                    src={Register} alt={event.name}
                                    style={{ "height": "30px" }} />
                            </div>}
                        </div>
                    </div>
                ))
            }
        </div >
    )
}

export default EventCard
