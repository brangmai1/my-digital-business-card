import React from 'react'
import TwitterLogo from "../images/twitter.webp"
import FacebookLogo from "../images/facebook.png"
import InstagramLogo from "../images/instagram.png"
import GithubLogo from "../images/github.jpeg"

export default function Footer() {
    return (
        <div className="footer">
            <img src={TwitterLogo} alt="Twitter logo"></img>
            <img src={FacebookLogo} alt="Facebook logo"></img>
            <img src={InstagramLogo} alt="Instagram logo"></img>
            <img src={GithubLogo} alt="Github logo"></img>
        </div>
    )
}