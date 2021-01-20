
import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import '../index.css';


const Resume = () => {

    return (



            
    <div class="resume" id="resumebg">
        <h2>Resume</h2>
        
        <div class="profile">

            <h2>Software Engineer </h2>
            <h3>In-Training</h3>
            <h4>Houston, TX</h4>

        <div>

        <hr/>
        <hr/>
        <hr/>
        <hr/>
        <hr/>
        <hr/>
        <hr/>   

        <div class="section">
            <h3>Education</h3>

            <div class="DC">
                <h4>DigitalCrafts - Full Stack | Present</h4>
                <p>DigitalCrafts is the top-rated code bootcamp in Atlanta and Houston, and was awarded "#9 Best Bootcamp in the World" by Course Report in 2019.</p>
            </div>        

            </div>

            <div class="WT">

                <h4>West Texas A&M University | Graduated May 2012</h4>
                <p>B.A. Business Administration, <br/>Minor in Finance</p>
            </div>



        </div>

        <hr/>
        <hr/>
        <hr/>
        <hr/>
        <hr/>
        <hr/>
        <hr/>   

        <div class="section">
            <h3>Professional Experience</h3>
                <h4 id="expheader">EY | Business Analyst | Houston, TX | 11/2015 - 12/2019</h4>

                <ul>
                    <li>Perform data analysis for 14+ small to medium-sized firms across the country.</li>
                    <br/>
                    <li>Manage competing priorities in dual Business Analyst role within Indirect and Global Tax.</li>                    
                    <br/>
                    <li>Document detailed, standard operational Business Analyst processes for department-wide training initiative.</li>
                </ul>    
                
                
                <h4 id="expheader">GE | Transactions Analyst | Dallas, TX | 09/2014 - 11/2015</h4>
                <ul>
                    <li>Manage transactions queue and process equipment financing deals using Siebel Service.</li>
                    <br/>
                    <li>Quickly learn Transactions Analyst objectives, leading to dual role within Inside Sales. </li>
                    <br/>
                    <li>Assist Inside Sales team and achieve weekly team revenue goals. </li>
                    
                </ul>            
                

        </div>

        <hr/>
        <hr/>
        <hr/>
        <hr/>
        <hr/>
        <hr/>
        <hr/>   
        
        <div class="section" >
            <h3>Community Involvement</h3>
                <li>Rebuild Houston</li>
                <br/>
                <li>Barbara Bush Book Sort</li>
        </div>
        </div> 
    </div>

            )

}

export default Resume;