import React from 'react';

import Header from './components/header';
import NavBar from './components/navbar';
import About from './components/about';
import Contact from './components/contact';
import Work from './components/work';
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Work />
      <Contact />
    </>
  );
}

export default App;
