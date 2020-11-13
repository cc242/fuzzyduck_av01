import React, {memo, useContext, useEffect, useRef, useState} from "react";
import {useHistory} from "react-router-dom";
import Page from "../Page";
import './styles/styles.scss';
import {AppContext} from "../../context/AppContext";
import RSC from "react-scrollbars-custom";
import SVG from "react-inlinesvg";
import chevron from "./assets/Ic_chevron_right_48px.svg";

const FeaturedStories = memo(props => {
    const history = useHistory();
    const {state, dispatch} = useContext(AppContext);

    const openFeatured = (id)=> {
        history.push(`story/${id}`)
    }

    const Featured = ()=> {
        return (
            <RSC id="RSC-Example" style={{width: "1138px", height: "800px", inverted: false}}>
                <div className="featured_results">
                    {state.featuredNames && state.featuredNames.length ? (
                            state.featuredNames.map((e, i) => (
                                <div key={i} className="featured_result" onClick={() => {openFeatured(e.featured_story.ID)}}>
                                    <div className="featured_result__image">
                                        {e.photo ? (
                                            <img src={e.photo.sizes.medium_large}/>
                                        ) : (<></>)}
                                    </div>
                                    <div className="featured_result__copy">
                                        <div className="featured_result__name">{e.firstname} {e.surname}</div>
                                        {e.rank ? (
                                            <p><span className="bold">Rank: </span>{e.rank}</p>
                                        ) : (<></>)}
                                        {e.date_of_death ? (
                                            <p><span className="bold">Date of death: </span>{e.date_of_death}</p>
                                        ) : (<></>)}
                                        {e.buried_memorialised ? (
                                            <p><span className="bold">Buried/memorialised: </span>{e.buried_memorialised}</p>
                                        ) : (<></>)}
                                        {e.next_of_kin ? (
                                            <p><span className="bold">Next of kin: </span>{e.next_of_kin}</p>
                                        ) : (<></>)}

                                        <div className="featured_result__button">Find out more <SVG src={chevron}/></div>
                                    </div>

                                </div>
                            ))) :
                        <></>
                    }
                </div>
            </RSC>
        )
    }

    return (
        <Page class="featured">
            <div className="featured__left">#
                <div className="featured__copy">
                <h1>Featured<br/>stories</h1>
                </div>
            </div>
            <div className="featured__right">
                <Featured/>
            </div>
        </Page>
    )
})
export default FeaturedStories;
