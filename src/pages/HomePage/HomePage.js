import React, {useContext} from "react";
import {Link, useHistory} from "react-router-dom";
import Page from "../Page";
import './styles/styles.scss';
import {AppContext} from "../../context/AppContext";
const HomePage = () => {
    const history = useHistory();
    const {state, dispatch} = useContext(AppContext);


    return (
        <Page>
            <h1>Home</h1>
            <Link to="/memorialboard">Memorial Board</Link>
        </Page>
    )
}
export default HomePage;
