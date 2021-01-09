import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import '../index.css';


import candle from '../assets/images/candle.jpg'

const Projects = () => {

    return (
    <div>
    <div className="Projects-container">

        <h3>Projects</h3>

        <div className="Projects-slides fade">
            <div className="numbertext">1 / 1</div>
            <img src={candle} alt="project-image1" id="project-img"/>
            <div className="caption">image 1</div>                

        </div>



        <a className="prev" onClick="plusSlides(-1)">&#10094;</a>
        <a className="next" onClick="plusSlides(1)">&#10095;</a>



        <div >
            <span className="dot" onClick="currentSlide(1)"></span> 
            <span className="dot" onClick="currentSlide(2)"></span> 
            <span className="dot" onClick="currentSlide(3)"></span> 
        </div>

    </div>

    </div>
    )

}

export default Projects;
