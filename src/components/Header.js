import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';


import '../index.css';

import candle from '../assets/images/candle.jpg'

const Header = () => {

    return (
        <div class="container">
            <div class="Resumeheader">
            <div className="navbar">

                <ul className="navlist">
                    <li className="navitem"><Link to="/Resume">Resume</Link></li>
                    <li className="navitem"><Link to="/Projects">Projects</Link></li>
                    <li className="navitem"><Link to="/Contact">Contact</Link></li>
                    
                </ul>
                <Link to="/"><h2 className="Portfolio">Christy Phommasak</h2></Link>

                </div>                    

            </div>

            <div>
                <img src={candle} alt="candle" id="candleimg"/>
            </div>
        </div>

    )

}

export default Header;