import React from 'react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Roles from './components/Roles';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <div id="home"></div>
      <Introduction />
      <Skills />
      <Projects />
      <Roles />
      <Contact />
    </div>
  );
};

export default App;
