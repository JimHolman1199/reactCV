import React from 'react'
import travel  from "../media/travel-airplane.jpg";
import music  from "../media/music.jpg";
import musicDavid  from "../media/music-davidGuetta.jpg";
import games  from "../media/games.jpg";
import carpentry  from "../media/carpentry.jpg";
import programing  from "../media/programing.jpg";

let imgArray = [travel,programing,music,musicDavid,games,carpentry] 

function InterestItem( {interestsNames, i} ){
    return <div className = {`col-sm-6 col-md-4 filtr-item ${interestsNames.category}`} >
    <div className="single-work mb-30">
        <a href={ imgArray[i] } className="popup-link">
            <img className="effect" src={ imgArray[i] } alt = {interestsNames.category}/>
            <div className="work-overlay effect">
                <h3> { interestsNames.name } </h3>
                <p> { interestsNames.comment } </p>
            </div>
        </a>
    </div>
</div>
}

export function Interest ( props ){
    return (
        <section id="interest" className="section one-page-section">
            <div className="container">
                <div className="section-title">
                    <h2>Interests</h2>
                </div>

                <div className="row">
                    <div className="col-xs-12">
                        <ul id="work-list" className="text-center">

                            <li className="main-color">
                                <a href="#" className="filter filter-active effect" data-filter="*">All</a>
                            </li>
                            <li className="main-color">
                                <a href="#" className="filter effect" data-filter=".programing">Programing</a>
                            </li>
                            <li className="main-color">
                                <a href="#" className="filter effect" data-filter=".travel">Travel</a>
                            </li>
                            <li className="main-color">
                                <a href="#" className="filter effect" data-filter=".carpentry">Carpentry</a>
                            </li>
                            <li className="main-color">
                                <a href="#" className="filter effect" data-filter=".music">Music</a>
                            </li>
                            <li className="main-color">
                                <a href="#" className="filter effect" data-filter=".games">Games</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row filtr-container">
                    { 
                        props.interestsNames.map( (items, i) => { return <InterestItem interestsNames={ items } i={i} key = {i}/> })
                    }
                </div>
            </div> 
        </section>
    )
}
