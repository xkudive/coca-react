import React from "react";

import play from "../images/play.jpg";
import star from "../images/star.jpg";
import heroImageBig from "../images/hero_image_1.jpg";
import heroImageSmall from "../images/hero_image_2.jpg";
import heroMobile from "../images/hero_mobile.jpg";
import "../css/Hero.css";


function Hero(){

        return (
            <div className="hero box anchor" id="home">
                <div className="container">

                    <div className="hero_content">
                        <div className="hero_content_left">
                            <span className="overhead">PROPERTY SOLUTION FOR ALL</span>
                            <div className="hero_text">
                                <div className="hero_text_1">
                                    {"ecoHouse".split("").map((letter,index) => <span style={{animationDelay:`${index * 0.05 + 0.8}s`}} key={`letter${index}`}>{letter}</span>)}
                                </div>
                                <div className="hero_text_2">
                                    {"style".split("").map((letter,index) => <span style={{animationDelay:`${index * 0.05 + 1.2}s`}} key={`letter${index+8}`}>{letter}</span>)}
                                </div>
                            </div>
                            <p className="subheading">Stay informed about the market with real estate news and insights provided by real estate professionals and government agencies.</p>
                            <div className="watch_btn">
                                <a href="#" className="studies">See Our Case Studies</a>
                                <a href="#" className="demo"><img src={play} alt="" /> Watch Demo</a>
                            </div>
                        </div>
                        <div className="hero_content_right">
                            <img className="hero_mobile" src={heroMobile} alt="" />
                            <img className="hero_big_image" src={heroImageBig} alt="" />
                            <div className="hero_right_image">
                                <div className="hero_content_right_line"></div>
                                <div className="hero_small_image_container">
                                    <img className="hero_small_image" src={heroImageSmall} alt="" />
                                </div>
                            </div>
                            <div className="circle">
                                <img src={star} alt="" />
                                <div className="circle_text">
                                    {"the best property platform ".split("").map((letter, index, array) => <span style={{transform: `rotate(${index * 360 / array.length}deg)`}} key={`span${index}`}>{letter}</span>)}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
}

export default Hero