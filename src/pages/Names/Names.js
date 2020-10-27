import React, {useContext, useEffect, useState} from "react";
import {Link, Route, useHistory} from "react-router-dom";
import Page from "../Page";
import './styles/styles.scss';
import {AppContext} from "../../context/AppContext";
import HomePage from "../HomePage/HomePage";
import {getAppData} from "../../utils/getAppData";
const Names = () => {
    const history = useHistory();
    const {state, dispatch} = useContext(AppContext);

    const [names, setNames] = useState([]);

    useEffect(()=> {

    }, [])


    return (
        <Page>
            <h1>Memorial Board</h1>
            <Link to="/stories">Stories</Link>
            <h1>Names</h1>

        </Page>
    )
}
export default Names;
