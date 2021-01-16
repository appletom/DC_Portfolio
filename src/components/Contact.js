import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

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

    </div>

    )

}

export default Contact;
