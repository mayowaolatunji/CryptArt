import React, { useState } from 'react'

import './ai.css';

import Arrow from './arrow.svg'
import DefaultImg from './default_img.png'


function ai() {

  const [image_url, setImage_url] useState("/");

  let inputRef = useRef(nul);

  const imageGenerator = async ()=>{
    if (inputRef.current.value ===""){
      return 0;
    }
    const response = await fetch()
  }
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

      <div className="aiCard">
        <div className="imgBox">
          <img src={image_url==="/"?DefaultImg:image_url} alt="" />
        </div>

        <div className="searchBox">
          <input type="text" ref={inputRef} placeholder='Describe your Art'/>
        </div>
      </div>
    
    </div>
  )
}

export default ai