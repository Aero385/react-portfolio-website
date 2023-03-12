import React from 'react';
import { About, Footer, Header, Skills,  Work } from './container';
import { Navbar } from './components';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Sidebar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
