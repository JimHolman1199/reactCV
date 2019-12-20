import React from 'react'
import me from '../media/me.jpg'

export function Paralax(){
    return (
        <section id="home" className="home-1 parallax one-page-section">
            <div className="page-table">
                <div className="table-cell text-center">
                    <div className="avatar-hero">
                        <img src= {me} alt="avatar-hero" ></img>
                    </div>
                    <h1>Hi, I'm Yurii Pryshliak</h1>
                    <h2 className="typer-title">i'm craftsman</h2>
                </div>
            </div>
            <div id="particles-js"></div>
        </section>
    )
} 