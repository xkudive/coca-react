import React from "react";

import preloadIcon from "../images/mama.jpg"
import "../css/Preloader.css"

function Preloader(){
    const [loaded, setLoaded] = React.useState(false)

    React.useEffect(() => {
        window.addEventListener("load", () => {
            setTimeout(()=>{
                setLoaded(true);
            },800)
            setTimeout(()=>{
                document.body.setAttribute("overflow", "false")
            },1000)
        })
    }, [])

    return(
        <div className={`preloader${loaded ? " closed" : ""}`}>
            <img src={preloadIcon} alt="" />
        </div>
    )
}

export default Preloader