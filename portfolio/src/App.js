import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/header';
import NavBar from './components/navbar';
import About from './components/about';
import Contact from './components/contact';
import Work from './components/work';
import Skills from './components/skills';
import './reset.css'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Router>

        <About />
         <Skills />
        <Work />
      <Contact />
    <Switch>
      <Route path="/about">
      </Route>
      
      <Route path="/skills">
      </Route>
      
      <Route path="/work">
      </Route>

    <Route path="/contact">
    </Route>

    </Switch>
      </Router>
    </>
  );
}

export default App;
