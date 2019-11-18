import React from 'react';
import './App.css';
import { NavBar, Paralax, About, Services, Work, Review, Contact, Footer, NavButton } from './modules/navBar';

function App() {
  return (
    <div>
      <NavBar />
      <Paralax />
      <About />
      <Services />
      <Work />
      <Review />
      <Contact />
      <Footer />
      <NavButton />
    </div>
  );
}

export default App;
