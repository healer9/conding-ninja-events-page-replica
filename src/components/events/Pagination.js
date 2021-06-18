import React from 'react'
import './events.css'

const Pagination = ({ eventsPerPage, totalEvents, isLoading, paginate }) => {
    if (isLoading)
        return null

    const eventNumbers = []

    for (let i = 1; i <= Math.ceil(totalEvents / eventsPerPage); i++) {
        eventNumbers.push(i)
    }

    const handleClick = (number) => {
        paginate(number.target.innerHTML)

        let btn = document.getElementsByClassName("page-div")

        for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener("click", function () {
                let current = document.getElementsByClassName("active")
                current[0].className = current[0].className.replace(" active", "")
                this.className += " active"
            })
        }
    }

    return (
        <div>
            <div className="page-container">
                {eventNumbers.map(number => (
                    <div className={number === 1 ? `page-div active` : `page-div`}
                        key={number}
                        onClick={handleClick}
                    >
                        {number}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pagination
