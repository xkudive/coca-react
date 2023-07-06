import React from "react";

import comfort1 from "../images/comfort_1.png";
import comfort2 from "../images/comfort_2.png";
import "../css/Comfort.scss";

function Comfort() {
    let comfortTopRef = React.useRef();
    let comfortBottomRef = React.useRef();
    React.useEffect(() => {
        let observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting === true) {
                    entry.target.className = `${entry.target.className} active`;
                    observer.unobserve(entry.target);
                }
            })
        },{threshold: 0.3})

        observer.observe(comfortTopRef.current);
        observer.observe(comfortBottomRef.current);
    }, [])

    return(
        <div className="comfort box">
            <div className="container">
                <div className="comfort_top_content" ref={comfortTopRef}>
                    <div className="comfort_text_content">
                        <h1 className="comfort_title">
                            <p>
                                <span data-comfort-span="span_1">The</span>
                                <span data-comfort-span="span_2">Comfort</span>
                            </p>
                            <span data-comfort-span="span_3">Interior</span>
                        </h1>
                        <p className="comfort_subhead">Finally an article that won't rehash the same old information! Here are 5 tips from realtors all over the world on how to choose the best property agent for you.</p>
                    </div>
                    <div className="comfort_top_img">
                        <img src={comfort1} alt="" />
                    </div>
                </div>
                <div className="comfort_bottom_img" ref={comfortBottomRef}>
                        <img src={comfort2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Comfort