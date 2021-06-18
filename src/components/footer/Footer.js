import React from 'react'
import FooterLogo from '../../assets/footer-logo.svg'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import youtube from '../../assets/youtube.png'
import twitter from '../../assets/twitter.png'
import linkedIn from '../../assets/linkedIn.png'
import telegram from '../../assets/telegram.svg'
import phone from '../../assets/phone.png'
import email from '../../assets/email.png'
import './footer.css'

const Footer = () => {

    const codingNinjas = [
        { "name": "About Us", "url": "https://www.codingninjas.com/about" },
        { "name": "Privacy Policy", "url": "https://www.codingninjas.com/policy/privacy.pdf" },
        { "name": "Terms & Condition", "url": "https://www.codingninjas.com/policy/tnc.pdf" },
        { "name": "Pricing & Refund Policy", "url": "https://www.codingninjas.com/policy/pricing-and-refund.pdf" },
        { "name": "Bug Bounty", "url": "https://www.codingninjas.com/bug-bounty" },
        { "name": "Customers", "url": "https://www.codingninjas.com/customers" },
        { "name": "Press Release", "url": "https://www.codingninjas.com/press-release" },
    ]

    const products = [
        { "name": "Courses", "url": "https://www.codingninjas.com/courses" },
        { "name": "Try courses for Free", "url": "https://www.codingninjas.com/start-learning" },
        { "name": "Career Camp", "url": "https://careercamp.codingninjas.com/?_ga=2.180093348.1229792772.1623839948-808529823.1620302850" },
        { "name": "Hire Talent", "url": "https://www.codingninjas.com/hire-from-us/" },
    ]

    const community = [
        { "name": "CodeStudio", "url": "https://www.codingninjas.com/codestudio" },
        { "name": "Blog", "url": "https://www.codingninjas.com/blog/" },
        { "name": "Events", "url": "https://www.codingninjas.com/events?event_category=ALL_EVENTS&event_sub_category=Upcoming&page=1#eventsWrapper" },
        { "name": "Campus Ninja", "url": "https://campus.codingninjas.com/?_ga=2.183061926.1229792772.1623839948-808529823.1620302850" },
        { "name": "Affiliate", "url": "https://www.codingninjas.com/affiliate" },
    ]

    const mail = "contact@codingninjas.com"
    const number = "1800-123-3598"

    return (
        <footer>
            <img className="footer-logo" src={FooterLogo} alt="" />
            <div className="footer-links">
                <div>
                    <ul>
                        <h3>CODING NINJAS</h3>
                        {codingNinjas.map(tags => (
                            <li className="footer-list" onClick={() => window.open(tags.url)} key={tags.name}>{tags.name}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <ul>
                        <h3>PRODUCTS</h3>
                        {products.map(product => (
                            <li className="footer-list" onClick={() => window.open(product.url)} key={product.name}>{product.name}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <ul>
                        <h3>COMMUNITY</h3>
                        {community.map(tag => (
                            <li className="footer-list" onClick={() => window.open(tag.url)} key={tag.name}>{tag.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div style={{ "marginLeft": "30px" }}>
                <h3>FOLLOW US ON</h3>
                <div className="social-icons">
                    <img onClick={() => window.open("https://www.facebook.com/codingninjas")} src={facebook} alt="" />
                    <img onClick={() => window.open("https://www.instagram.com/coding.ninjas/")} src={instagram} alt="" />
                    <img onClick={() => window.open("https://www.youtube.com/c/CodingNinjasIndia")} src={youtube} alt="" />
                    <img onClick={() => window.open("https://twitter.com/CodingNinjasOff")} src={twitter} alt="" />
                    <img onClick={() => window.open("https://www.linkedin.com/company/coding-ninjas-india/")} src={linkedIn} alt="" />
                    <img onClick={() => window.open("https://t.me/codingninjas_official")} style={{ "width": "42px" }} src={telegram} alt="" />
                </div>

                <h3 style={{ "marginTop": "30px" }}>Contact Us</h3>
                <div className="contact-us">
                    <div style={{ "display": "flex", "marginTop": "10px" }}>
                        <img className="contact" src={phone} alt="" />
                        <p className="contact-info">{number}</p>
                    </div>
                    <div style={{ "display": "flex", "marginTop": "10px" }}>
                        <img className="contact" src={email} alt="" />
                        <p className="contact-info">{mail}</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
