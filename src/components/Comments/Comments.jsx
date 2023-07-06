import React from "react";

import "../../css/Comments.scss";
import Items from "./CommentsColumns";

export default function Comments() {

    return(
        <div className="comments box">
            <div className="container">
                <div className="comments_container">
                    <div className="marquee_wrap">
                        <div className="column">
                            <Items index="0"/>
                            <Items index="1"/>
                        </div>
                        <div className="column">
                            <Items index="2"/>
                            <Items index="3"/>
                        </div>
                        <div className="column">
                            <Items index="4"/>
                            <Items index="5"/>
                        </div>
                        <div className="column">
                            <Items index="6"/>
                            <Items index="7"/>
                        </div>
                        <div className="column">
                            <Items index="8"/>
                            <Items index="9"/>
                        </div>
                        <div className="column">
                            <Items index="10"/>
                            <Items index="11"/>
                        </div>
                        <div className="column">
                            <Items index="12"/>
                            <Items index="13"/>
                        </div>
                    </div>
                    <div className="marquee_wrap">
                        <div className="column">
                            <Items index="0"/>
                            <Items index="1"/>
                        </div>
                        <div className="column">
                            <Items index="2"/>
                            <Items index="3"/>
                        </div>
                        <div className="column">
                            <Items index="4"/>
                            <Items index="5"/>
                        </div>
                        <div className="column">
                            <Items index="6"/>
                            <Items index="7"/>
                        </div>
                        <div className="column">
                            <Items index="8"/>
                            <Items index="9"/>
                        </div>
                        <div className="column">
                            <Items index="10"/>
                            <Items index="11"/>
                        </div>
                        <div className="column">
                            <Items index="12"/>
                            <Items index="13"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}