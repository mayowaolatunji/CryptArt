import React from 'react'

import './navBar.css';

import CryptArt from './CryptArt.png'


function navBar() {
  return (
    <div className='navbar'>
        
        <div className="logo"><a href="#">Crypt<span>Art</span></a></div>

        <div className='connect'>
            <button>Wallet Connect</button>
        </div>

        <div className='menu'>
        <ul>
            <li><a href="#">Mints</a></li>
            <li><a href="#">DAO</a></li>
            <li><a href="#">Rewars</a></li>
            <li><a href="#">Docs</a></li>
            
        </ul>
        </div>

        <div className='darkmood'></div>
    </div>
  )
}

export default navBar