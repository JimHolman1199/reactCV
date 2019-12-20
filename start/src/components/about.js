import React from 'react'
import { SocialList } from './socialList'
import CustomizedExpansionPanels from './aboutSkills'

export function About(){

    return (
        <section id="about" className="section one-page-section">
            <div className="container">
                <div className="row">

                    <div className="col-xs-12 col-md-6">
                        <div className="about-content">
                            <h2>Hi There! I'm Yurii Pryshliak</h2>
                            <p>I have experience in developing landing pages, been doing it for quite a long time. Always pay attention to page loading, it is one of the keys for great result.<br/>
                                - Last work: junior front-end dev/technical marketing specialist on swedish company. <br/>
                                - Works with CMS (wordpress, typo3), Tech Marcketing (GA, GTM, FBpixel, search console)  <br/>
                                - Courses: softserve-html/css/js
                            </p>

                            <div className="row">
                                <div className="col-sm-6">
                                    <ul>
                                        <li><span><i className="fa fa-envelope"></i> Email : </span><a href ='mailto:jimholman1199@gmail.com?subject=Hello !'>jimholman1199@gmail.com</a></li>
                                        <li><span><i className="fa fa-map-marker"></i> Location : </span>Lviv, UA.</li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <ul>
                                        <li><span><i className="fa fa-calendar"></i>Years old: </span>24</li>
                                        <li><span><i className="fa fa-phone"></i> Phone : </span>+380-93-11-99-688</li>
                                    </ul>
                                </div>
                            </div>

                            <ul className="social-list">
                                <SocialList/>
                            </ul>

                        </div>
                    </div>

                    <div className="col-xs-12 col-md-6 skills-section">
                        <CustomizedExpansionPanels/>
                    </div>
                </div> 
            </div> 
        </section>
    )
}