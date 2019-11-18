import  React from 'react';
import me from '../media/me.jpg'

export function NavBar(){
    return (
        <header className="nav-wrapper effect">
            <nav className="navbar-custom">
                <div className="container">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bm-navbar" aria-expanded="false">
                            <span className="sr-only"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand effect" href="CV.pdf" download target="_blank">My CV</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bm-navbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#home" className="scroll effect active" data-speed="800">HOME</a></li>
                            <li><a href="#about" className="scroll effect" data-speed="1000">ABOUT</a></li>
                            <li><a href="#services" className="scroll effect" data-speed="1400">SERVICES</a></li>
                            <li><a href="#work" className="scroll effect" data-speed="1400">INTERESTS</a></li>
                            <li><a href="#reviews" className="scroll effect" data-speed="1600">REVIEWS</a></li>
                            <li><a href="#contact" className="scroll effect" data-speed="1700">CONTACT</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
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
export function About(){
    return (
        <section id="about" className="section one-page-section">
            <div className="container">
                <div className="row">

                    <div className="col-xs-12 col-md-6">
                        <div className="about-content">
                            <h2>Hi There! I'm Yurii Pryshliak</h2>
                            <p>I have experience in developing landing pages, been doing it for quite a long time. Always pay attention to page loading, it is one of the keys for great result.<br/>
                                -last work: junior front-end dev/technical marketing specialist on swedish company. <br/>
                                -Works with CMS (wordpress, typo3), Tech Marcketing (GA, GTM, FBpixel, search console)  <br/>
                                -courses: softserve-html/css/js</p>

                            <div className="row">
                                <div className="col-sm-6">
                                    <ul>
                                        <li><span><i className="fa fa-envelope"></i> Email : </span>jimholman1199@gmail.com</li>
                                        <li><span><i className="fa fa-map-marker"></i> Location : </span>81600, Mykolaiv, UA.</li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <ul>
                                        <li><span><i className="fa fa-calendar"></i>Years old: </span>23</li>
                                        <li><span><i className="fa fa-phone"></i> Phone : </span>+380-93-11-99-688</li>
                                    </ul>
                                </div>
                            </div>

                            <ul className="social-list">
                                <li><a href="https://www.facebook.com/holmanjim" className="effect"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#" className="effect"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="https://www.instagram.com/jim.holman_/" className="effect"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xs-12 col-md-6 skills-section">

                        <div className="progress-bar-linear">
                            <p className="progress-bar-text">HTML5, CSS3</p>
                            <div className="progress-cont">
                                <span className="main-color progress-bar-text">90%</span>
                            </div>
                            <div className="progress-bar-skills">
                                <div className="progress-bar-line main-color-bg" data-percent="90"></div>
                            </div>
                        </div>

                        
                        <div className="progress-bar-linear">
                            <p className="progress-bar-text">Technical Marketing (GTM, GA...) </p>
                            <div className="progress-cont">
                                <span className="main-color progress-bar-text">85%</span>
                            </div>
                            <div className="progress-bar-skills">
                                <div className="progress-bar-line main-color-bg" data-percent="85"></div>
                            </div>
                        </div>

                        <div className="progress-bar-linear">
                            <p className="progress-bar-text">JavaScript</p>
                            <div className="progress-cont">
                                <span className="main-color progress-bar-text">55%</span>
                            </div>
                            <div className="progress-bar-skills">
                                <div className="progress-bar-line main-color-bg" data-percent="55"></div>
                            </div>
                        </div>

                        <div className="progress-bar-linear">
                            <p className="progress-bar-text">ADOBE PHOTOSHOP</p>
                            <div className="progress-cont">
                                <span className="main-color progress-bar-text">65%</span>
                            </div>
                            <div className="progress-bar-skills">
                                <div className="progress-bar-line main-color-bg" data-percent="65"></div>
                            </div>
                        </div>
                        <div className="progress-bar-linear">
                            <p className="progress-bar-text">MySQL</p>
                            <div className="progress-cont">
                                <span className="main-color progress-bar-text">46%</span>
                            </div>
                            <div className="progress-bar-skills">
                                <div className="progress-bar-line main-color-bg" data-percent="46"></div>
                            </div>
                        </div>
                        <div className="progress-bar-linear">
                            <p className="progress-bar-text">CMS(WORDPRESS,Typo3)</p>
                            <div className="progress-cont">
                                <span className="main-color progress-bar-text">75%</span>
                            </div>
                            <div className="progress-bar-skills">
                                <div className="progress-bar-line main-color-bg" data-percent="75"></div>
                            </div>
                        </div>
                        <div className="progress-bar-linear">
                            <p className="progress-bar-text">Git</p>
                            <div className="progress-cont">
                                <span className="main-color progress-bar-text">70%</span>
                            </div>
                            <div className="progress-bar-skills">
                                <div className="progress-bar-line main-color-bg" data-percent="70"></div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div> 
        </section>
    )
}
export function Services(){
    return (
        <section id="services" className="section one-page-section second-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Services</h2>
                </div>
                
                <div className="row">
                    <div className="col-xs-12 col-md-4">
                        <div className="single-service">
                            <div className="service-icon">
                                <i className="fa fa-html5 effect"></i>
                            </div>
                            <div className="service-content">
                                <h3>CREATIVE IDEA</h3>
                                <div className="s-line"></div>
                                <p>Сreating cool webpages.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-md-4">
                        <div className="single-service bordered">
                            <div className="service-icon">
                                <i className="fa fa-laptop effect"></i>
                            </div>
                            <div className="service-content">
                                <h3>WEBSITE DESIGN</h3>
                                <div className="s-line"></div>
                                <p>Choosing a color scheme and creating a unique design.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-md-4">
                        <div className="single-service">
                            <div className="service-icon">
                                <i className="fa fa-life-ring effect"></i>
                            </div>
                            <div className="service-content">
                                <h3>ONLINE SUPPORT</h3>
                                <div className="s-line"></div>
                                <p>24/7 - Work smart and hard!</p>
                            </div>
                        </div>
                    </div>

                </div> 
            </div> 
        </section>
    )
}
export function Work (){
    return (
        <section id="work" className="section one-page-section">
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
                                <a href="#" className="filter effect" data-filter=".web">Web</a>
                            </li>
                            <li className="main-color">
                                <a href="#" className="filter effect" data-filter=".design">Design</a>
                            </li>
                            <li className="main-color">
                                <a href="#" className="filter effect" data-filter=".photography">Photography</a>
                            </li>
                            <li className="main-color">
                                <a href="#" className="filter effect" data-filter=".music">Music</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row filtr-container">

                    <div className="col-sm-6 col-md-4 filtr-item design web">
                        <div className="single-work mb-30">
                            <a href="img/design-1.jpg" className="popup-link">
                                <img className="effect" src="img/design-1.jpg" alt="design-1"/>
                                <div className="work-overlay effect">
                                    <h3>Template</h3>
                                    <p>WEB DESIGN</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4 filtr-item web design">
                        <div className="single-work mb-30">
                            <a href="img/design-2.jpg" className="popup-link">
                                <img className="effect" src="img/design-2.jpg" alt="design-2" />
                                <div className="work-overlay effect">
                                    <h3>Template</h3>
                                    <p>WEB DESIGN</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4 filtr-item music ">
                        <div className="single-work mb-30">
                            <a href="img/music-2.jpg" className="popup-link">
                                <img className="effect" src="img/music-2.jpg" alt="music-2" />
                                <div className="work-overlay effect">
                                    <h3>Linkin Park</h3>
                                    <p>MUSIC</p>
                                </div>
                            </a>
                        </div>
                    </div>
 
                    <div className="col-sm-6 col-md-4 filtr-item  music">
                        <div className="single-work mb-30">
                            <a href="img/wok-4.jpg" className="popup-link">
                                <img className="effect" src="img/wok-4.jpg" alt="work-4" />
                                <div className="work-overlay effect">
                                    <h3>Jon Bellion</h3>
                                    <p>MUSIC</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4 filtr-item photography">
                        <div className="single-work mb-30">
                            <a href="img/wok-2.jpg" className="popup-link">
                                <img className="effect" src="img/wok-2.jpg" alt="work-2" />
                                <div className="work-overlay effect">
                                    <h3>Rock</h3>
                                    <p>PHOTOGRAPHY</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4 filtr-item photography">
                        <div className="single-work mb-30">
                            <a href="img/wok-6.jpg" className="popup-link">
                                <img className="effect" src="img/wok-6.jpg" alt="work-6" />
                                <div className="work-overlay effect">
                                    <h3>Forest</h3>
                                    <p>PHOTOGRAPHY</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div> 
        </section>
    )
}

export function Review(){
    return (
        <section id="reviews" className="section one-page-section second-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Reviews</h2>
                </div>

                <div className="row">
                    <div className="col-xs-12">
                        <div className="owl-carousel testimonial-slider">

                            <div className="one-testimonial">
                                <div className="testimonial-content">
                                    <p>I'm not hiring him, he uses spaces not tabs.</p>
                                    <br />
                                </div>
                                <div className="testimonial-person">
                                    <figure>
                                      <img src="img/characters/richard.gif" alt="richard" />
                                    </figure>
                                    <div className="testimonial-inf">
                                        <h4>Amber Cottle</h4>
                                        <p>Pied Piper</p>
                                    </div>
                                </div>
                            </div>
                            <div className="one-testimonial">
                                <div className="testimonial-content">
                                    <p>I dont wanna live in a world where someone else makes the world a better place better then we do</p>
                                </div>
                                <div className="testimonial-person">
                                    <figure>
                                      <img src="img/characters/gavin.png" alt="gavin" />
                                    </figure>
                                    <div className="testimonial-inf">
                                        <h4>Gavin</h4>
                                        <p>Hooli</p>
                                    </div>
                                </div>
                            </div>
                            <div className="one-testimonial">
                                <div className="testimonial-content">
                                    <p>If you keep screaming your name, it forces the assaailant to acknowlege you as a human</p>
                                </div>
                                <div className="testimonial-person">
                                    <figure>
                                      <img src="img/characters/donald.jpg" alt="Donald" />
                                    </figure>
                                    <div className="testimonial-inf">
                                        <h4>Donald</h4>
                                        <p>Creative Head</p>
                                    </div>
                                </div>
                            </div>
                            <div className="one-testimonial">
                                <div className="testimonial-content">
                                    <p>Pakistani Denzel</p>
                                    <br />
                                </div>
                                <div className="testimonial-person">
                                    <figure>
                                      <img src="img/characters/dinesh.png" alt="Dinesh" />
                                    </figure>
                                    <div className="testimonial-inf">
                                        <h4>Dinesh</h4>
                                        <p>Project Manager</p>
                                    </div>
                                </div>
                            </div>
                            <div className="one-testimonial">
                                <div className="testimonial-content">
                                    <p>My server could handle 10X the traffic if they werent busy apologizing for your shit codebase</p>
                                </div>
                                <div className="testimonial-person">
                                    <figure>
                                      <img src="img/characters/photo-gilfoyle.png" alt="gilfoyle" />
                                    </figure>
                                    <div className="testimonial-inf">
                                        <h4>Gilfoyle</h4>
                                        <p>Creative Head</p>
                                    </div>
                                </div>
                            </div>
                            <div className="one-testimonial">
                                <div className="testimonial-content">
                                    <p>Username is password//<br />
                                    So when i get into work tomorrow..What do i do?</p>
                                </div>
                                <div className="testimonial-person">
                                    <figure>
                                      <img src="img/characters/big-head.png" alt="big-head" />
                                    </figure>
                                    <div className="testimonial-inf">
                                        <h4>Big-head</h4>
                                        <p>Creative Head</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div> 
        </section>
        )
}
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
                                <h6>81600, Mykolaiv, UA.</h6>
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
export function Footer(){
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <a href="index.html" className="effect footer-title">Yurii Pryshliak</a>

                    <div className="footer-social">
                        <ul className="footer-social-list">
                            <li><a className="effect" href="https://www.facebook.com/holmanjim"><i className="fa fa-facebook"></i></a></li>
                            <li><a className="effect" href="#"><i className="fa fa-linkedin"></i></a></li>
                            <li><a className="effect" href="https://www.instagram.com/jim.holman_/"><i className="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>

                    <p className="copy-text">JimH &copy; 2019. all right reserved, designed by <strong><a href="#" target="_blank">YuriiP</a></strong>.</p>
                </div> 
            </div> 
        </footer>
    )
}
export function NavButton(){
    return (
        <a href="#" className="scroll-up effect">
            <i className="fa fa-angle-up"></i>
        </a>
    )
}