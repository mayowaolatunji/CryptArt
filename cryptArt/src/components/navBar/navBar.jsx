import React from 'react'

import './navBar.css';



import CryptArt from './CryptArt.png'
import Search from './search.svg'
import Profile from './profile1.svg'

function navBar() {
  return (
    <div className='navbar'>
        
        <div className="logo"><a href="#">Crypt<span>Art</span></a></div>

        <div className='connect'>
          <img className='profileIcon' src={Profile} alt="" />
            <button>Wallet Connect</button>
        </div>

        <div className='menu'>
        <ul>
            <li><a href="#">Mint</a></li>
            <li><a href="#">Collections</a></li>
            <li><a href="#">Rewards</a></li>
            <li><a href="#">Docs</a></li>
            
        </ul>
        </div>

        {/* <div className='searchBox'>

          <input type="text" 
          placeholder='' 
          className='input'/>

          <img src={Search} alt="searchIcon" className='searchIcon'/>
        </div> */}
    </div>
  )
}

export default navBar