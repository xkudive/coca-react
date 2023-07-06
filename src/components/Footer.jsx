import React from "react";

import "../css/Footer.scss"

import footerLogo from "../images/footer_logo.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import twitter from "../images/twitter.png"

export default function Footer() {

    let footerRef = React.useRef();
    React.useEffect(() => {
        let observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting === true) {
                    entry.target.className = `${entry.target.className} active`;
                    observer.unobserve(entry.target);
                }
            })
        },{threshold: 0.3})

        observer.observe(footerRef.current);
    }, [])

    return(
        <footer className="footer box anchor" id="footer" ref={footerRef}>
            <div className="container">
                <div className="footer_start">
                    <img src={footerLogo} alt="" />
                    <div className="footer_start_content">
                        <span>Ready to get started?</span>
                        <a href="#">Get Started</a>
                    </div>
                </div>
                <div className="footer_main_content">
                    <div className="footer_subscribe">
                        <div className="footer_h1">
                            <span>Subscribe </span>
                            <span>to </span>
                            <br />
                            <span>our </span>
                            <span>newsletter</span>
                        </div>
                        <form className="form" action="">
                            <label htmlFor="email"></label>
                            <input className="input" placeholder="Email address" type="email" name="" id="email" minLength={8} maxLength={30} required/>
                            <input className="submit" type="submit" id="" value=""/>
                        </form>
                    </div>
                    <div className="footer_links">
                        <ul>
                            <li className="ul_name">Services</li>
                            <a href="#"><li>Email Marketing</li></a>
                            <a href="#"><li>Campaigns</li></a>
                            <a href="#"><li>Branding</li></a>
                            <a href="#"><li>Offline</li></a>
                        </ul>
                        <ul>
                            <li className="ul_name">About</li>
                            <a href="#"><li>Our Story</li></a>
                            <a href="#"><li>Benefits</li></a>
                            <a href="#"><li>Team</li></a>
                            <a href="#"><li>Careers</li></a>
                        </ul>
                        <ul>
                            <li className="ul_name">Help</li>
                            <a href="#"><li>FAQs</li></a>
                            <a href="#"><li>Contact Us</li></a>
                        </ul>
                    </div>
                </div>
                <div className="footer_policy">
                    <div className="privacy_policy">
                        <a href="#">Terms & conditions</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                    <div className="social_links">
                        <a href="#"><img src={facebook} alt="" /></a>
                        <a href="#"><img src={instagram} alt="" /></a>
                        <a href="#"><img src={twitter} alt="" /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}