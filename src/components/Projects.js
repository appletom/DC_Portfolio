import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import '../index.css';


import candle from '../assets/images/candle.jpg'
import roadtrip from '../assets/images/Roadtrip.png'
import dashboard from '../assets/images/YourDashboard.png'


/* 
const slideIndex = 1;
showSlides(slideIndex);



function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("Projects-slides");
        var dots = document.getElementsByClassName("dot");
        if ( n > slides.length) {slideIndex = 1}
        if ( n < 1 ) {slideIndex = slides.length }
        for ( i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for ( i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace("active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += "active"


    } */

const Projects = () => {



    return (
    <div>
    <div className="Projects-container">

        <h2>Projects</h2>

        <div className="Projects-slides fade">    
            <div className="numbertext">1/2</div>
                <img src={roadtrip} alt="project-image1" id="project-img"/>
            <div className="caption">
                <h2>Road Trip App</h2>
                <p>Web application for users to browse games, add games to cart and solve a mini puzzle.</p>
                <p><Link to="https://github.com/appletom/RoadTrip">Link to github</Link></p>
            </div>                
        </div>

        <div className="Projects-slides fade">    
            <div className="numbertext">2/2</div>
                <img src={dashboard} alt="project-image2" id="project-img"/>
            <div className="caption">
                <h2>YourDashboard</h2>
                <p>Displays a home dashboard to show weather by zip code, New York Times articles and dad jokes API</p>
                <p><Link to="https://github.com/LewRit/YourDashboard">Link to github</Link></p>
            </div>                
        </div>



{/* 
        <a className="prev" onClick="plusSlides(-1)">&#10094;</a>
        <a className="next" onClick="plusSlides(1)">&#10095;</a>
 */}
    </div>

{/*         <div className="dot-div">
            <span className="dot" onClick="currentSlide(1)"></span> 
            <span className="dot" onClick="currentSlide(2)"></span> 
            <span className="dot" onClick="currentSlide(3)"></span> 
        </div>
 */}
    </div>

    )

}

export default Projects;
