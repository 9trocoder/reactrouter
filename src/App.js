import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import ServicesList from './components/ServicesList';

const App = () => {
  return (
    

    <HashRouter>
      <Header />
      <div className="container">
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/services/:id" exact component={ServicesList} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} /> 
      </div>
      
    </HashRouter>
  );
}

export default App;
