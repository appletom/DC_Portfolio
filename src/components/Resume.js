
import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import '../index.css';


const Resume = () => {

    return (



            
    <div class="resume" id="resumebg">
        <div class="profile">
            <h1>Resume</h1>
            <h3>Software Developer In-Training</h3>
            <h4>Houston, TX</h4>

        <div>

        <hr/>

        <div class="section">
            <h2>Education</h2>

            <div class="DC">
                <h3>DigitalCrafts - Full Stack | Present</h3>
                <p>DigitalCrafts is the top-rated code bootcamp in Atlanta and Houston, and was awarded "#9 Best Bootcamp in the World" by Course Report in 2019.</p>
            </div>        

            </div>

            <div class="WT">

                <h3>West Texas A&M University | Graduated May 2012</h3>
                <p>B.A. Business Administration, Minor in Finance</p>
            </div>

            </div> 

        </div>

        <hr/>

        <div class="section">
            <h2>Professional Experience</h2>
                <h4 id="expheader">EY | Business Analyst | Houston, TX | 11/2015 - 12/2019</h4>

                <ul>
                    <li>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. </li>
                    <li>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. </li>
                    <li>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. </li>

                </ul>    
                
                
                <h4 id="expheader">GE | Transactions Analyst | Dallas, TX | 09/2014 - 11/2015</h4>
                <ul>
                    <li>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. </li>
                    <li>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. </li>
                    <li>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. </li>

                </ul>            
                


                <h4 id="expheader">Gavilon | Operations Analyst | Houston, TX | 08/2012 - 09/2013</h4>
                <ul>
                    <li>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </li>
                    <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </li>
                    <li>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </li>

                </ul>

        </div>

        <hr/>

        <div class="section">
            <h2>Community Involvement</h2>
                <li>Rebuild Houston</li>
                <li>Barbara Bush Book Sort</li>
        </div>

    </div>

            )

}

export default Resume;