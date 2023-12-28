import React, { useRef, useState } from 'react'

import './ai.css';

import Arrow from './arrow.svg'
import DefaultImg from './default_img.png'


function ai() {

  // API key = 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

  const [image_url, setImage_url] = useState("/");

  let inputRef = useRef(null)

  const imageGenerator = async ()=>{
    if (inputRef.current.value ===""){
      return 0;
    }
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers:{
         "Content-Type": "application/json",
         Authorization: 
         "Bearer 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",
         "User-Agent" : "Chrome", 
        },
        body : JSON.stringify({
          prompt: `${inputRef.current.value}`,
          n :1,
          size: "400X400"
        }),
      }
    );
    let data = await response.json();
    console.log(data);
    let data_array = data.data;
    setImage_url(data_array[0].url);
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
          <button className='generate-btn' onClick={()=>{imageGenerator()}}>Generate</button>
        </div>
      </div>
    
    </div>
  )
}

export default ai