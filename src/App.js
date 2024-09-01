import logo from './logo.svg';
import './App.css';
import React from 'react'
import Navbar from './components/navbar';
import Hero from './components/hero';
import Info from './components/infos';
import Quotes from './components/quotes';
import Donate from './components/donation';
import Footer from './components/footer';

function App() {
  return (
    <>
  <Navbar />
  <Hero />
  <Info />
  <Quotes/>
  <Donate />
  <Footer />
    </>
      );
  
}

export default App;
