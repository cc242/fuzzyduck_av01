import React, {useContext} from "react";
import {Link, useHistory} from "react-router-dom";
import Page from "../Page";
import './styles/styles.scss';
import {AppContext} from "../../context/AppContext";
const HomePage = () => {
    const history = useHistory();
    const {state, dispatch} = useContext(AppContext);


    return (
        <Page class="home">
            <Link to="/names">Names</Link>
            <Link to="/stories">Stories</Link>
        </Page>
    )
}
export default HomePage;
