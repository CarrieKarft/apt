import React from "react";
import aptsImage from "../images/aptsImage.jpeg"

function Header() {
    return(
        <div className="banner">
            <img type="image/jpeg" src={aptsImage} alt="The side of a large urban apartment building" className="bannerImage"></img>
            <div className="bannerText">
                <h1>Apt</h1>
                <h2>WHERE YOU CAN FIND YOUR DREAM LUXURY APARTMENT</h2>
            </div>
        </div>
    )
}

export default Header;