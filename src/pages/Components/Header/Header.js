import React from "react";
import "./styles.scss"
const Header = ()=> {
    const home = ()=> {
        window.location.href = `http://ducknest.co.uk/doncaster/av01/`;
    }
    return (
        <div className="header">
            <div className="header__bg"></div>
            <div className="header__home" onClick={home}></div>
        </div>
    )
}
export default Header
