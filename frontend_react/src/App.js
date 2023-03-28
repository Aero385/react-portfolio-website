import React from 'react';
import { About, Footer, Header, Skills, Work } from './container';
import { Navbar } from './components';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Sidebar
        sections={[
          { id: 'home', label: 'Home' },
          { id: 'about', label: 'About' },
          { id: 'work', label: 'Work' },
          { id: 'skills', label: 'Skills' },
          { id: 'contact', label: 'Contact' },
        ]}
      />
      <Header id='home' />
      <About id='about' />
      <Work id='work' />
      <Skills id='skills' />
      <Footer id='contact'/>
    </div>
  );
};

export default App;
