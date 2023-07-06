import React from "react";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

import star from "../images/star.png"
import workflowImage1 from "../images/workflow_1.png"
import workflowImage2 from "../images/workflow_2.png"
import "../css/Workflow.scss";


const Workflow = () => {
    let workflowBoxRef = React.useRef();
    let workflowTitleRef = React.useRef();
    let sliderRef = React.useRef();
    let sliderOuterRef = React.useRef();
    let [sliderBoxWidth, setSliderBoxWidth] = React.useState(0)
    let [width, setWidth] = React.useState(0);
    let [trackerWidth, setTrackerWidth] = React.useState(0);
    let [scrollBarWidth, setScrollBarWidth] = React.useState(0);

    React.useEffect(() => {
        let observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting === true) {
                    entry.target.className = `${entry.target.className} active`;
                    observer.unobserve(entry.target);

                    if (entry.className === "inner_slider", entry.isIntersecting === true){
                        setTimeout(() => {
                            entry.target.className = `${entry.target.className} animationsDisabled`
                        },2200)
                        observer.unobserve(entry.target);
                    }
                }
            })
        },{threshold: 0.3})

        observer.observe(workflowBoxRef.current);
        observer.observe(workflowTitleRef.current);
        observer.observe(sliderOuterRef.current);
    }, [])

    React.useEffect(() => {    
        setScrollBarWidth(document.querySelector(".slider_scrollbar").clientWidth)
        setTrackerWidth(scrollBarWidth / (sliderRef.current.scrollWidth / sliderBoxWidth));

        function updateSize() {
            setSliderBoxWidth(sliderOuterRef.current.clientWidth)
            setWidth(sliderRef.current.scrollWidth - sliderBoxWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    })

    const x = useMotionValue(0);

    const springOptionsScrollbar = {
        stiffness: 500,
        damping: 30,
        mass: 1.5,
    }

    const springOptionsImages = {
        stiffness: 500,
        damping: 30,
        mass: 3,
    }
    
    const progress = useSpring(useTransform(x, [0, -width], [0, scrollBarWidth-trackerWidth]), springOptionsScrollbar);
    const imageParallax1 = useSpring(useTransform(x, [0, -width], [1, 1.1]), springOptionsImages);
    const imageParallax2 = useSpring(useTransform(x, [0, -width], [1 , 0.6]), springOptionsImages);
    const imageParallax3 = useSpring(useTransform(x, [0, -width], [1, 1.1]), springOptionsImages);

    return(
        <div className="workflow box anchor" ref={workflowBoxRef} id="pricing">
            <div className="container">
                <div className="workflow_title" ref={workflowTitleRef}>
                    <p>
                    {"We’d like to share our workflow".split(" ").map((word, index) => <span key={`word${index}`} style={{animationDelay: `${index*0.05+0.6}s`}}>{`${word} `}</span>)}
                    </p>
                </div>
                <motion.div className="workflow_image_1"
                    style={{scale: imageParallax1}}
                ><img src={workflowImage1} alt="" /></motion.div>
                <motion.div className="workflow_image_2"
                    style={{scale: imageParallax2}}
                ><img src={star} alt="" /></motion.div>
                <motion.div className="workflow_image_3"
                    style={{scale: imageParallax3}}
                ><img src={workflowImage2} alt="" /></motion.div>

                <motion.div className="slider" ref={sliderOuterRef}>
                    <motion.div 
                        className="inner_slider"
                        drag="x"
                        dragConstraints={{right: 0, left: -width}}
                        whileTap={{ cursor:"grabbing" }}
                        ref={sliderRef}
                        style={{ x }}
                        key={width}
                    >
                        <div className="slider_item">
                            <h1>01</h1>
                            <p className="slider_title">
                                <span>Research </span>
                                <span>& </span>
                                <span>Plan</span>
                            </p>
                            <p className="slider_subhead">Design process is critical for gathering information, requirements, and other data you need in order to make informed decisions later.</p>
                        </div>
                        <div className="slider_item">
                            <h1>02</h1>
                            <p className="slider_title">
                                <span>Mock </span>
                                <span>Up</span>
                            </p>
                            <p className="slider_subhead">Creating a mock up is the step of the design process most people recognize — it’s the most visual part of the process In-depth sketching and brainstorming.</p>
                        </div>
                        <div className="slider_item">
                            <h1>03</h1>
                            <p className="slider_title">
                                <span>Build</span>
                            </p>
                            <p className="slider_subhead">Implement the solution (often with the help of other professionals like programmers, printers, or manufacturers)Revise the solution as technical issues.</p>
                        </div>
                        <div className="slider_item">
                            <h1>04</h1>
                            <p className="slider_title">
                                <span>Check </span>
                                <span>& </span>
                                <span>Review</span>
                            </p>
                            <p className="slider_subhead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit itaque animi ea dicta assumenda quia soluta reiciendis? Animi tenetur pariatur?</p>
                        </div>
                        <div className="slider_item">
                            <h1>05</h1>
                            <p className="slider_title">
                                <span>All </span>
                                <span>Done</span>
                            </p>
                            <p className="slider_subhead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel quam eligendi  impedit, non quia error, asperiores vero. Numquam aut minima neque voluptatum ipsa?</p>
                        </div>
                    </motion.div>
                </motion.div>
                
                <div className="slider_scrollbar">
                    <motion.div className="slider_scrollbar_tracker" style={{translateX: progress, width: trackerWidth}}></motion.div>
                </div>
            </div>
        </div>
    )
}

export default Workflow