import React from 'react';
import './style.css'; // Import your CSS here (make sure it exists in src/)
import './App.css';   // Optional, only if you have styles here
import './style.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Features from './components/Features';
import About from './components/About';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Home />
      <Features />
      <About />
      <Menu />
      
      <Footer />
      

    </div> 
  );
}


export default App;
