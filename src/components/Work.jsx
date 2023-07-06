import React from "react";

import like from "../images/like.png"
import box from "../images/box.png"
import galley_1 from "../images/gallery_1.png"
import galley_2 from "../images/gallery_2.png"
import galley_3 from "../images/gallery_3.png"
import "../css/Work.css"

function Work() {
    let counter_1 = 875;
    let counter_2 = 320;

    let workTextRef = React.useRef();
    let workSubhead = React.useRef();
    let workCounter = React.useRef();
    let workGallery = React.useRef();
    
    const [number1, setNumber1] = React.useState(0);
    const [number2, setNumber2] = React.useState(0);

    React.useEffect(() => {

        function counter(counter, setNumber, timer) {
            let StopNumber = 0;
            setInterval(() => {
                if(StopNumber >= counter) return;
                setNumber((number) => number + 5);
                StopNumber += 5;
            }, timer);
        }

        let observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting === true) {
                    entry.target.className = `${entry.target.className} active`;
                    observer.unobserve(entry.target);
                    if (entry.target.classList.contains("work_achievements") && entry.isIntersecting === true) {
                        setTimeout(() => {
                            counter(counter_2, setNumber2, 25)
                            counter(counter_1, setNumber1, 9)
                        },800)
                    }
                }
            })  
        }, {threshold: 0.3})
        observer.observe(workTextRef.current);
        observer.observe(workSubhead.current);
        observer.observe(workCounter.current);
        observer.observe(workGallery.current);
      }, []);

    return(
        <div className="work box blackBar anchor" id="blog">
            <div className="container">
                <div className="work_left_section">
                    <h1 className="work_title" ref={workTextRef}>
                        <span>Magnificent</span>
                        <span>Work</span>
                    </h1>
                    <p className="work_subhead" ref={workSubhead}>Donec bibendum, dui id ultrices molestie, neque neque porta felis, id viverra ligula justo interdum mi. Dummy content lorem ispum nunc malesuada, risus eu maximus consequat, purus enim ultricies nisi, elit ante et turpis.</p>
                    <div className="work_achievements" ref={workCounter}>
                        <div className="achievement_box">
                            <img src={like} alt="" />
                            <div className="achievement_box_container">
                                <span className="counter">{number1}+</span>
                                <span className="counter_text">Projects Done</span>
                            </div>                           
                        </div>
                        <div className="achievement_box">
                            <img src={box} alt="" />
                            <div className="achievement_box_container">
                                <span className="counter">{number2}</span>
                                <span className="counter_text">Products Created</span>
                            </div>    
                            
                        </div>
                    </div>
                </div>
                <div className="work_right_section">
                    <div className="gallery_container" ref={workGallery}>
                        <div className="gallery_box_1">
                            <img src={galley_1} alt="" data-image="gallery_image_1"/>
                        </div>
                        <div className="gallery_box_2">
                            <img src={galley_2} alt="" data-image="gallery_image_2"/>
                            <img src={galley_3} alt="" data-image="gallery_image_3"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work