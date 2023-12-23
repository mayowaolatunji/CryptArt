import React from 'react'

import './App.css';

import NavBar from "./components/navBar/navBar.jsx";
import Intro from "./components/intro/intro.jsx";
import Auction from "./components/auction/auction.jsx";
import Ai from "./components/ai/ai.jsx";
import Footer from "./components/footer/footer.jsx";




function App() {
  return (
    <div className='container'>
      <div className='Navbar'><NavBar/></div>
      <div className='Intro'><Intro/></div>
      <div className='Auction'><Auction/></div>
      <div className='Ai'><Ai/></div>
      <div className='Footer'><Footer/></div>
    </div>
  )
}

export default App