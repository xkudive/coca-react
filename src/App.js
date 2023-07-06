import React from "react";

import Hero from "./components/Hero";
import Work from "./components/Work";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Comfort from "./components/Comfort";
import Places from "./components/Places";
import Workflow from "./components/Workflow";
import Comments from "./components/Comments/Comments";
import Footer from "./components/Footer";

import "./body.css";
import "./css/Mobile.scss";

const App = () => {

	let [loaded, setLoaded] = React.useState(false)
 
	React.useLayoutEffect(() => {
        window.addEventListener("load", () => {
            setLoaded(true);
        })
    }, [])

	return (
		<div className={`App`}>

			<Preloader />
			<Header />
			<Hero />
			<Work />
			<Comfort />
			<Places />
			<Workflow />
			<Comments />
			<Footer />
			
		</div>
	);
}

export default App;
