import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
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
        <Switch>
          <Route path="/services/:id"  component={ServicesList} />
          <Route path="/services"  component={Services} />
          <Route path="/about"  component={About} />
          <Route path="/contact"  component={Contact} /> 
          <Route path="/"  component={Home} />
        </Switch>
      </div>
      
    </HashRouter>
  );
}

export default App;
