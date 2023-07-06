import React from "react";

import logo from "../images/logo.jpg";
import logoWhite from "../images/logo_white.jpg";
import "../css/Header/Header.css"
import "../css/Header/burgerBtn.scss"

function Header() {
    let headerRef = React.useRef();
    const [headerMinimize, setHeaderMinimize] = React.useState(false)
    const [headerBlack, setHeaderBlack] = React.useState(false)
    let scrolled = window.pageYOffset;
    let props = {}
    React.useEffect(() => {

        let blackBar = Array.from(document.querySelectorAll(".blackBar"));
        
        window.addEventListener("scroll", () => {
            blackBar.forEach((element, index) => props[index] = [element.offsetTop, element.offsetTop + element.offsetHeight])
            scrolled = window.pageYOffset; 
            if (scrolled > 112) setHeaderMinimize(true)
            else setHeaderMinimize(false);

            if(scrolled > props[0][0] - headerRef.current?.clientHeight && scrolled < props[0][1] - headerRef.current?.clientHeight) {
                setHeaderBlack(true);
            } else {
                setHeaderBlack(false);
            }
        })
    },[])

    let scrolledPixels = [];
    let [windowWidth, setWindowWidth] = React.useState(null)
    let [burgerActive, burgerSetActive] = React.useState(false)
    let [burgerNotActive, setBurgerNotActive] = React.useState(false)
    let [nonClickable, setNonClickable] = React.useState(false)
 
    React.useEffect(() => {
        function calculatePixels() {
            let scrollBoxes = Array.from(document.querySelectorAll(".anchor"));
            scrolledPixels = scrollBoxes.map(element => element.offsetTop)
            scrolledPixels.push(document.body.scrollHeight- window.innerHeight)
        }
        calculatePixels();

        window.addEventListener("resize", calculatePixels);
        return () => window.removeEventListener("resize", calculatePixels);
    },[])

    React.useEffect(() => {
        function navbarLoadAnimation() {
            let argument = document.querySelector(".burger_btn").dataset.first;
            let width = window.innerWidth;
            setWindowWidth(width)
            if(argument === "true") return
            if(width > 768) {
                burgerSetActive(false)
                setBurgerNotActive(false)
                document.body.setAttribute("overflow", "false")
            } else{
                burgerSetActive(false)
                setBurgerNotActive(true)
                document.body.setAttribute("overflow", "false")
            }
        }

        navbarLoadAnimation();

        window.addEventListener("resize", navbarLoadAnimation);
        return () => window.removeEventListener("resize", navbarLoadAnimation);
    },[])

    let [element1, setElement1] = React.useState(false)
    let [element2, setElement2] = React.useState(false)
    let [element3, setElement3] = React.useState(false)
    let [element4, setElement4] = React.useState(false)

    React.useLayoutEffect(() => {
        function setAnchor() {
            let scrolled = window.scrollY;
            let scrollBoxes = Array.from(document.querySelectorAll(".anchor"));
            scrolledPixels = scrollBoxes.map(element => element.offsetTop)
            scrolledPixels.push(document.body.scrollHeight- window.innerHeight)
            
            if(scrolled > scrolledPixels[4]-80) {
                setElement1(false)
                setElement2(false)
                setElement3(false)
                setElement4(true)
            } else if(scrolled > scrolledPixels[3]-80) {
                setElement1(false)
                setElement2(false)
                setElement3(false)
                setElement4(true)
            } else if(scrolled > scrolledPixels[2]-80) {
                setElement1(false)
                setElement2(false)
                setElement3(true)
                setElement4(false)
            } else if(scrolled > scrolledPixels[1]-80) {
                setElement1(false)
                setElement2(true)
                setElement3(false)
                setElement4(false)
            } else if(scrolled > scrolledPixels[0]-80) {
                setElement1(true)
                setElement2(false)
                setElement3(false)
                setElement4(false)
            }
        }
        setAnchor();

        window.addEventListener("scroll", setAnchor);
        return () => window.removeEventListener("scroll", setAnchor);
    },[headerRef])

    function burgerBtn() {
        let argument = document.querySelector(".burger_btn").dataset.first;
        if(argument === "false") setBurgerNotActive((burgerNotActive) => !burgerNotActive);
        burgerSetActive((burgerActive) => !burgerActive)
        setNonClickable(true)
        document.querySelector(".burger_btn").setAttribute("data-first", "false")
        setTimeout(() => {
            setNonClickable(false)
        },2600)
    }
    function burgerBtnClose() {
        burgerSetActive(false)
        setBurgerNotActive(true)
        setNonClickable(true)
        setTimeout(() => {
            setNonClickable(false)
        } ,2600)
    }

    return(
        <div className={`header_box box${headerBlack ? " black" : ""}${headerMinimize ? " minimize" : ""}${burgerActive ? " opened" : ""}${burgerNotActive ? " closed" : ""}`} data-opened={`${burgerActive ? document.body.setAttribute("overflow", "true") : document.body.setAttribute("overflow", "false")}`} ref={headerRef}>
            <div className={`container ${headerMinimize ? "minimize" : ""}`}>
                    <div className="header"><div className="logo_box">
                        <a href="#"><img src={logo} className="logo" /></a>
                        <a href="#"><img src={logoWhite} className="logo_white" /></a>
                    </div>
                    <div data-first="true" className={`burger_btn${burgerActive ? " active" : ""}${nonClickable ? " non_clickable" : ""}`} onClick={burgerBtn}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="navbar">
                        <ul className="navbar_ul">
                            <a onClick={windowWidth <= 768 ? burgerBtnClose : null} id="link" href="#home" className={element1 ? "active" : ""}><li>Home</li></a>
                            <a onClick={windowWidth <= 768 ? burgerBtnClose : null} id="link" href="#blog" className={element2 ? "active" : ""}><li>Blog</li></a>
                            <a onClick={windowWidth <= 768 ? burgerBtnClose : null} id="link" href="#pricing" className={element3 ? "active" : ""}><li>Pricing</li></a>
                            <a onClick={windowWidth <= 768 ? burgerBtnClose : null} id="link" href="#footer" className={element4 ? "active" : ""}><li>Contact</li></a>
                        </ul>
                        <div className="register_btn">
                            <a href="#" className="login">Sign in</a>
                            <a href="#" className="register">Get Started Free</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header