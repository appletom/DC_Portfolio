import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import linkedin from '../assets/images/linkedin_logo.jpeg'
import github from '../assets/images/github.png'

import '../index.css';


const Contact = () => {

    return (

    <div className="contact">

        <h2>Contact</h2>


        <form action="mailto:digichristyp@outlook.com"
        method="POST"
        enctype="multipart/form-data"
        name="EmailForm">
            Your Name:<br/>
            <input type="text" size="19" name="Contact-Name"/><br/><br/>
            Your Email:<br/>
            <input type="email" name="Contact-Email"/><br/><br/> 
            Your Message:<br/> 
            <textarea name="Contact-Message" rows="8" cols="60">
            </textarea><br/><br/> 
            <button type="submit" value="Submit">Send</button>
            
        </form>
        <a href="www.linkedin.com/phommasak-christy">
            <img src={linkedin} alt="LinkedInLogo" height="30px" width="30px"/>
        </a>

        <a href="https://github.com/appletom">
            <img src={github} alt="githublogo" height="30px" width="30px"/>
        </a>

    </div>

    )

}

export default Contact;
