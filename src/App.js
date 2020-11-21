import React from 'react';
import { Route, Switch } from 'react-router';
import 'semantic-ui-css/semantic.min.css';
import Header from './pages/header/header.component';
import Navigation from './components/navigation/navigation.component';
import About from './pages/about/about.component';
import ProjectsPage from './pages/projects/projects.component';
import ContactPage from './pages/contact/contact.component';
import Particles from 'react-particles-js';
import particleOptions from './particle-options';
import './App.css';


function App() {
  return (
    <div className='main'>
      <Particles className='particles-main' params={particleOptions} />
      <Navigation />
      <Switch>
        <Route exact path='/' component={Header} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={ProjectsPage} />
        <Route path='/contact' component={ContactPage} />
      </Switch>
    </div>
  );
}

export default App;
