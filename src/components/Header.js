import React from "react";
import profileImage from "../images/profile-image.jpg"

export default function Header() {
    return (
        <div className="header">
            <img src={profileImage} alt="Profile" className="header--profile_image"></img>
            <h2>Brang Mai</h2>
            <p>Software Engineer</p>
            <a href="brangmai.com" target="_blank">brangmai.com</a>
            <div className="buttons">
                <button>Email</button>
                <button>LinkedIn</button>
            </div>            
        </div>
    )
}