import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import '../index.css';
import heart from '../assets/images/heart.png'
import linkedin from '../assets/images/linkedin_logo.jpeg'
import github from '../assets/images/github.png'

const Footer = () => {

    return (

    <div className="footer">

        <p>Made with <img src={heart} alt="heart" height="15px" width="15px"/></p>

            
        <a href="">
            <img src={linkedin} alt="LinkedInLogo" height="25px" width="25px"/>
        </a>

        <a href="https://github.com/appletom">
            <img src={github} alt="githublogo" height="25px" width="25px"/>
        </a>

        <br/>
        
        <p><img src="../../public/images/copywright.png" alt="copywright" height="13px" width="13px"/> twentytwenty</p>    

        <span>Photo by <a href="https://unsplash.com/@englr?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Alvin Engler</a> on <a href="https://unsplash.com/collections/1767685/bureau-?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        
        <br/>

        <span>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></span>


    </div>

    )

}

export default Footer;



   

       
