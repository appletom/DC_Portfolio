import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './index.css';

function App() {
  return (
    <div className="App">
      <header>
        
        <Header />

      </header>

      <main>

        <Switch> 
          <Route exact path="/" component={Home} /> 
          <Route exact path="/Resume" component={Resume} />                        
          <Route exact path="/Projects" component={Projects} />         
          <Route exact path="/Contact" component={Contact} />                             
        </Switch>

      </main>

      <footer>

        <Footer />

      </footer>
    </div>
  );
}

export default App;
