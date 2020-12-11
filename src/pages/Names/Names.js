import React, {useContext, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import Page from "../Page";
import './styles/styles.scss';
import imgMemorial from "./assets/memorial_image.png";
import featuredImage from "./assets/Group 61@2x.png";
const Names = () => {
    const history = useHistory();

    const memorial = ()=> {
        history.push('/memorial');
    }
    const featured = ()=> {
        history.push('/featuredstories');
    }

    return (
        <Page class="names">
            <div className="names__panel">
                <div className="names__button" onClick={memorial}>
                    <img src={imgMemorial} className="memorial_image"/>
                    <div className="names__button__label">MEMORIAL BOARD<br/><span>Full list of names</span></div>
                </div>
            </div>
            <div className="names__panel">
                <div className="names__button" onClick={featured}>
                    <img className="featuredImage" src={featuredImage}/>
                    <div className="names__button__label">FEATURED STORIES</div>
                </div>
            </div>
        </Page>
    )
}
export default Names;
