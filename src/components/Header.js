import React from "react";
import profileImage from "../images/profile-image.jpg"

export default function Header() {
    return (
        <div className="header">
            <img src={profileImage} alt="Profile" className="header--profile_image"></img>
            <h2>Brang Mai</h2>
            <p className="header--job_title">Software Engineer</p>
            <a className="header--website" href="brangmai.com" target="_blank">https://brangmai.com</a>
            <div className="buttons">
                <button className="email-button"><a href="mailto: brangmai100@gmail.com">Email</a></button>
                <button className="linkedin-button">
                    <a href="https://linkedin.com/in/brangmai" target="_blanck">LinkedIn</a>
                </button>
            </div>            
        </div>
    )
}