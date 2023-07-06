import React from "react";
import { motion } from "framer-motion";
import ParallaxItem from "./ParallaxItem";

const comments = [
    {
        imageUrl: "https://framerusercontent.com/images/HQFKc8o7lCJgiaAGraxLp0kTzaA.jpg",
        nickname: "Nabeel",
        username: "@itsnotnabeel",
        comment: `I didn't make any money of my first 50 @Photoshop designs. Never made money of my first 100 @figma screens . I made money of my first @xkudive design (made it into a template and sold it). Designers, don't underestimate the power of bringing immediate value to your designs`,
    },
    {
        imageUrl: "https://framerusercontent.com/images/lgj5W3PkSHf2sI3mvRXZacXuZBU.jpeg",
        nickname: "Alexia Rio",
        username: "@alexi_rio",
        comment: `Websites built on @xkudive look so beautiful. Pretty good stuff`,
    },
    {
        imageUrl: "https://framerusercontent.com/images/vbXuZrOONZb2fwfVqQD1HetcubE.jpg",
        nickname: "Mani",
        username: "@BeingMani97",
        comment: `The scroll variant in @xkudive hits differently. Never imaged that making some complex things would be easy with that. Everyday i learn something new with Framer.`,
    },
    {
        imageUrl: "https://framerusercontent.com/images/ZsI55y1i0cgpt4roKHb5LE4URGk.jpg",
        nickname: "Ferky Aiad",
        username: "@FerkyAiad",
        comment: `I have been in a @xkudive rabbit hole for the past 6 hours without even noticing as time goes by — its everything I love in Figma combined with everything I love in Webflow.  I am in love.`,
    },
    {
        imageUrl: "https://framerusercontent.com/images/pRCG0vgAXiJkgroKh7FOwEhfyJY.png",
        nickname: "./on",
        username: "@oleg_nykolyn",
        comment: `Yo, @xkudive is sick AF. Mind-blowing bth.`,
    },
    {
        imageUrl: "https://framerusercontent.com/images/cKt9ALb77GAwm8oIdJpz35bdyhM.jpg",
        nickname: "Miguel Ventura",
        username: "@migdvv",
        comment: `Learned some basics of @xkudive yesterday, and today I delivered a landing page for a client. It's so unreal how small the learning curve is from Figma to @xkudive. Absolutely loving it.`,
    },
    {
        imageUrl: "https://framerusercontent.com/images/wF4IswOcft0mKqykBvKvy25NG0.jpeg",
        nickname: "DANN©",
        username: "@DannPetty",
        comment: `I learned how to build a website in @Framer! My goal was to learn the basic tools in about 20 minutes a day last week. Nothing fancy. No special design. Just randomness elements that's responsive. Check it out on my github page [@xkudive]. If I can do it, so can you!`,
    },
    {
        imageUrl: "https://framerusercontent.com/images/DElpTERJTxNUBYQs9EHsDV0qfRQ.jpeg",
        nickname: "Parker",
        username: "@_prkr",
        comment: `I was enjoying @xkudive a lot but I am BLOWN AWAY by their Figma plug-in. From Auto-layout to flex-box in the browser in seconds; this has completely changed how I'll build.`,
    },
    {
        imageUrl: "https://framerusercontent.com/images/3MLg8EPkjLBW8bQ59OmnapyP21Y.jpeg",
        nickname: "Daniël van der Winden",
        username: "@dvdwinden",
        comment: `I've built pretty handy sites powered by Craft or WordPress in the past, but seeing @xkudive tackle CMS stuff so effortlessly is mind-boggling.`,
    },
    {
        imageUrl: "https://framerusercontent.com/images/DElpTERJTxNUBYQs9EHsDV0qfRQ.jpeg",
        nickname: "Lauren Waller",
        username: "@waller_texas",
        comment: `Honestly the @xkudive publish time is insanely fast. Just published 2 weeks of changes in 5 seconds 🤯 like it’s almost too fast for such a big moment 😂`,
    },
    {
        imageUrl: "https://framerusercontent.com/images/DhNk2PiPYyYO376SWzrAJXlO8w.png",
        nickname: "Christopher Lo",
        username: "@ChristopherLoCC",
        comment: `Thank you for building such an empowering tool, especially for designers! The site went from Figma to Framer in less than a week!`,
    },
    {
        imageUrl: "https://framerusercontent.com/images/Z1NmB7nAcQAUBARrK6FfUeTR7g.jpeg",
        nickname: "Amos",
        username: "@amosbastian",
        comment: `Playing around with @xkudive while building a landing page for a side project. I suck at animations, but they make it so easy🤩`,
    },
    {
        imageUrl: "https://framerusercontent.com/images/lgj5W3PkSHf2sI3mvRXZacXuZBU.jpeg",
        nickname: "manoj nayak",
        username: "@manojnayak",
        comment: `Websites built on @xkudive look so beautiful✨`,
    },
    {
        imageUrl: "https://framerusercontent.com/images/5zWIlORq2DXZTr91qgKd80TqyTk.jpeg",
        nickname: "Davo",
        username: "@pixelbeat",
        comment: `A quick word about @xkudive. Framer is forever changing the experience of designing for the web. Forget about a design tool. Once you get the basics, you're not on a design tool anymore. You're creating your product/story in the medium itself. As friendly & powerful as it is.`,
    },
]

export default function Items({index}) {
    return(
        <ParallaxItem>
                <div className="label">
                    <div className="avatar_box">
                        <img src={comments[index]["imageUrl"]} alt="" />
                    </div>
                    <div className="name_box">
                        <p className="nickname">{comments[index]["nickname"]}</p>
                        <p className="username">{comments[index]["username"]}</p>
                    </div>
                </div>
                <div className="comment">
                    <p>{
                        comments[index]["comment"].split("@xkudive").map((element, index) => {
                            let text = element
                            if(index === 1) return [<a target="blank_" key={`a_${index}`}href="https://github.com/xkudive/" className="comment_link">@xkudive</a>, text]
                            return element
                        })
                    }</p>
                </div>
        </ParallaxItem>
    )
}