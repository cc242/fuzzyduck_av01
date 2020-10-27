import React from "react";
import "./styles.scss"
import {Link} from "react-router-dom";
const Header = ()=> {

    return (
        <div className="header">
            <div className="header__home"></div>
            <Link to="/names">Names</Link>
            <Link to="/stories">Stories</Link>
        </div>
    )
}
export default Header
