import React from 'react';

export function Contact(){
    return (
        <section id="contact" className="section one-page-section">
        <div className="container">
            <div className="section-title">
                <h2>GET IN TOUCH</h2>
            </div>

            <div className="row">
                <div className="col-xs-12 col-md-10 col-md-offset-1">
                    <div className="col-xs-12 col-sm-4">
                        <div className="contact-item mb-30">
                            <div className="c-icon text-center">
                                <i className="fa fa-phone"></i>
                            </div>
                            <div className="c-text">
                                <h5>PHONE</h5>
                                <h6>+380-93-11-99-688</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-4">
                        <div className="contact-item mb-30">
                            <div className="c-icon text-center">
                                <i className="fa fa-map-marker"></i>
                            </div>
                            <div className="c-text">
                                <h5>LOCATION</h5>
                                <h6>Lviv, UA.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-4">
                        <div className="contact-item mb-30">
                            <div className="c-icon text-center">
                                <i className="fa fa-envelope"></i>
                            </div>
                            <div className="c-text">
                                <h5>EMAIL</h5>
                                <h6>jimholman1199@gmail.com</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xs-12 col-md-10 col-md-offset-1">
                    <form id="contact-form" method="POST" action="https://formspree.io/jimholman1199@gmail.com">
                        <div className="col-sm-6">
                            <input type="text" name="name"  className="input-field" required="required" placeholder="Name" />
                            <span className="name-error text-center mb-30"></span>
                        </div>
                        <div className="col-sm-6">
                            <input type="email" name="_replyto"  className="input-field" required="required" placeholder="Email" />
                            <span className="email-error text-center mb-30"></span>
                        </div>
                        <div className="col-xs-12">
                            <textarea name="name" className="input-field" required="required" placeholder="Message"></textarea>
                            <span className="message-error text-center mb-30"></span>
                        </div>
                        <div id="form-message" className="error mb-30 text-center"></div>
                            <input type="submit" className="effect submit-btn" value="Send" />
                        
                    </form>
                </div>
            </div> 
        </div> 
    </section>
    )
}