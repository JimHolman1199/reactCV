import React from 'react';
import { SocialList } from './socialList';

export function Footer(){
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <a href="index.html" className="effect footer-title">Yurii Pryshliak</a>

                    <div className="footer-social">
                        <ul className="footer-social-list">
                            <SocialList/>
                        </ul>
                    </div>

                    <p className="copy-text">JimH &copy; 2019. all right reserved, designed by <strong><a href="#" target="_blank">YuriiP</a></strong>.</p>
                </div> 
            </div> 
        </footer>
    )
}