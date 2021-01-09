import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';


import '../index.css';

import candle from '../assets/images/candle.jpg'

const Header = () => {

    return (
        <div class="container">
            <div class="Resumeheader">
                <span><Link to="/"><h1>Portfolio</h1></Link></span>
                    

            </div>

            <div>
                <img src={candle} alt="candle" id="candleimg"/>
            </div>

            <div className="navbar">
            <ul className="navlist">
                <li className="navitem"><Link to="/Resume">Resume</Link></li>
                <li className="navitem"><Link to="/Projects">Projects</Link></li>
                <li className="navitem"><Link to="/About">About</Link></li>
            </ul>
            </div>


        </div>

    )

}

export default Header;