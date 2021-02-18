import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import ServicesList from './components/ServicesList';

const App = () => {
  return (
    

    <BrowserRouter>
      <header>
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
          <h5 className="my-0 mr-md-auto font-weight-normal">React Router</h5>
          <nav className="my-2 my-md-0 mr-md-3">
            <Link className="p-2 text-dark" to="/">Home</Link>
            <Link className="p-2 text-dark" to="/services">Services</Link>
            <Link className="p-2 text-dark" to="/about">About</Link>
            <Link className="p-2 text-dark" to="/contact">Contact</Link>
          </nav>
        </div>
      
    </header>
      <div className="container">
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/services/:id" exact component={ServicesList} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} /> 
      </div>
      
    </BrowserRouter>
  );
}

export default App;
