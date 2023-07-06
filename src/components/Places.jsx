import React from "react";

import placesImg from "../images/places.jpg"
import "../css/Places.scss"

export default function Places() {
    let imageRef = React.useRef();
    let titleRef = React.useRef();

    React.useEffect(() => {
        let observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting === true) {
                    entry.target.className = `${entry.target.className} active`;
                    observer.unobserve(entry.target);
                }
            })
        },{threshold: 0.3})

        observer.observe(imageRef.current);
        observer.observe(titleRef.current);
    }, [])

    return(
        <div className="places box">
            <div className="container">
                <div className="places_image" ref={imageRef}>
                    <img src={placesImg} alt="" />
                </div>
                <div className="places_content" ref={titleRef}>
                    <div className="places_title">
                        <p>
                            {"The best places to live in your city, according to real estate agents".split(" ").map((word, index) => <span key={`word${index}`} style={{animationDelay: `${index*0.05+0.6}s`}}>{`${word} `}</span>)}
                        </p>
                    </div>
                    <p className="places_subhead">It's one of the most exciting moments in your life – but it can also be overwhelming. As you start house hunting, there are a few easy things you should look out for to make sure you'll be happy in your next home.</p>
                </div>
            </div>
        </div>
    )
}