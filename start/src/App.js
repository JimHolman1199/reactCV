import React from 'react';
import { NavBar } from './components/navBar';
import { Paralax } from './components/paralax';
import { About } from './components/about';
import { Services } from './components/service'
import { Interest } from './components/interest'
import { Review } from './components/review'
import { Contact } from './components/contact'
import { Footer } from './components/footer'
import { NavButton } from './components/navButton'
import './App.css';

export default function App() {
  const navbarItem = [
    { name:'HOME', href: '#home', dataSpeed: 800 },
    { name:'ABOUT', href: '#about', dataSpeed: 1000 },
    { name:'SERVICES', href: '#services', dataSpeed: 1400 },
    { name:'INTERESTS', href: '#interest', dataSpeed: 1400 },
    { name:'REVIEWS', href: '#reviews', dataSpeed: 1600 },
    { name:'CONTACT', href: '#contact', dataSpeed: 1700 }
  ]
  const serviceName = [
    { name:'CREATIVE IDEA', comment: 'Сreating cool webpages.', icon : 'fa fa-html5 effect' },
    { name:'WEBSITE DESIGN', comment: 'Choosing a color scheme and creating a unique design.', icon: 'fa fa-laptop effect' },
    { name:'ONLINE SUPPORT', comment: '24/7 - Work smart and hard !', icon: 'fa fa-life-ring effect' }
  ]
  const interestsNames = [
    { name:'Travel ?',comment:'Love it', category: 'travel'},
    { name:'Coding ?',comment:'Love it', category: 'programing'},
    { name:'Music',comment:'Part of coding', category: 'music'},
    { name:'Music', comment:'More music - more coding',category: 'music'},
    { name:'Games',comment:'Part of life', category: 'games'},
    { name:'Carpentry',comment:'Part of service', category: 'carpentry'}
  ]
  const reviewNames = [
    { name: 'Richard Hendricks', company:'Pied Piper',comment: "I'm not hiring him, he uses spaces not tabs." },
    { name: 'Gavin', company:'Hooli',comment: "I dont wanna live in a world where someone else makes the world a better place better then we do." },
    { name: 'Jared "Donald" Dunn', company:'Chief Operating Officer',comment: "If you keep screaming your name, it forces the assaailant to acknowlege you as a human." },
    { name: 'Dinesh Chugtai', company:'Senior Programmer',comment: "Pakistani Denzel !" },
    { name: 'Bertram Gilfoyle', company:'Chief System Architect',comment: "My server could handle 10X the traffic if they werent busy apologizing for your shit codebase" },
    { name: 'Nelson "Big Head" Bighetti', company:'Majority Incestor',comment: "Username is password !" },
    { name: 'Monica Hall', company:'Chief Financial Officer', comment: "Also, i didn't..see anything..in there" },
  ]
  return (
    <React.Fragment>
      <NavBar navbarItem = {navbarItem} />
      <Paralax />
      <About/>
      <Services serviceName = { serviceName }/>
      <Interest interestsNames = { interestsNames } />
      <Review reviewNames = { reviewNames } />
      <Contact />
      <Footer />
      <NavButton />
    </React.Fragment>
  );
}


