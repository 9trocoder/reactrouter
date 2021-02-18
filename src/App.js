import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </BrowserRouter>
  );
}

export default App;
