import React from 'react'
import logo from '../../logo/cn-logo.svg'
import New from '../../assets/new-tag.svg'
import careerCamp from '../../assets/career-camp.svg'
import './header.css'

const Header = () => {
    const navLinks = [
        { "name": "Home", "path": "https://www.codingninjas.com/" },
        { "name": "Courses", "path": "https://www.codingninjas.com/courses" },
        { "name": "Practice", "path": "https://codezen.codingninjas.com/dashboard" },
        { "name": "Events", "path": "https://www.codingninjas.com/" },
        { "name": "Campus Ninjas", "path": "https://campus.codingninjas.com/?_ga=2.217211030.1229792772.1623839948-808529823.1620302850" },
        { "name": "Blog", "path": "https://www.codingninjas.com/blog/" },
    ]

    return (
        <header>
            <div className="header-content left-side">
                <img className="logo" src={logo} alt="cn-logo" onClick={() => window.open("https://www.codingninjas.com/")} />
                <nav>
                    {navLinks.map((navLink) => {
                        return <div
                            className="nav-link"
                            key={navLink.name}
                            onClick={() => window.open(navLink.path)}
                        >{navLink.name === 'Practice' ? <div
                            style={{
                                "display": "flex",
                                "alignItems": "center",
                                "justifyContent": "center"
                            }}>
                            {navLink.name} <img src={New} alt="" />
                        </div>
                            : navLink.name}
                        </div>
                    })}
                    <img className="logo" src={careerCamp} alt="cn-logo" onClick={() => window.open("https://careercamp.codingninjas.com/?utm_source=codingninjas&utm_medium=top_navigation&utm_campaign=landing_header&_ga=2.204582288.1229792772.1623839948-808529823.1620302850")} />
                </nav>
            </div>
            <div className="header-content right-side">
                <div
                    className="nav-link"
                    onClick={() => window.open("https://classroom.codingninjas.com/app/classroom?_ga=2.111345924.1229792772.1623839948-808529823.1620302850")}>
                    My Classroom</div>
                <button className="login-btn">Login</button>
            </div>
        </header>
    )
}

export default Header
