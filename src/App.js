import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Header from './components/Header';
import Showcase from './components/Showcase';
import Projects from './components/Projects';
import Hire from './components/Hire';
import Skills from './components/Skills';
function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Header />
        <Showcase />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/hire">
        <Hire />
      </Route>
      <Route path="/skills">
        <Skills/>
      </Route>
      <Redirect to="/"/>
    </Router>
  );
}

export default App;
