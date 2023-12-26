import React from 'react'

import './ai.css';

import Arrow from './arrow.svg'


function ai() {
  return (
    <div className='aiContainer'>

      <div className="sideCard">
       <div className='text'>
         <h1>Create Custom NFTs <br /> With AI</h1>
         <p>Bring Your Imaginations to Life... <br /> Powered by  <span>cryptArt MLL.</span></p>
       </div>
       <div className='btn'>
          <button><p>Create NFTs</p></button>
          <img src={Arrow} alt="" />
       </div>
      </div>

      <div className="aiCard"></div>
    
    </div>
  )
}

export default ai