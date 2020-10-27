import React, {useContext, useEffect, useState} from "react";
import {Link, Route, useHistory} from "react-router-dom";
import Page from "../Page";
import './styles/styles.scss';
import {AppContext} from "../../context/AppContext";
const Names = () => {
    const history = useHistory();
    const {state, dispatch} = useContext(AppContext);
    const [names, setNames] = useState([]);

    useEffect(()=> {

    }, [])

    const memorial = ()=> {
        history.push('/memorial');
    }

    return (
        <Page class="names">
            <div className="names__panel">
                <div className="names__button" onClick={memorial}>MEMORIAL BOARD</div>
            </div>
            <div className="names__panel">
                <div className="names__button">FEATURED STORIES</div>
            </div>
        </Page>
    )
}
export default Names;
