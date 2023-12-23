import React from 'react'
import Brush from './Brush.jpg'

import './intro.css';


function intro() {
  return (
    <div className='Intro'>
      
      <div className='introText'>
          <h3>Find new High-value Frens & Make >>> <span className='green'>Profit</span> From Your <span className='white'>On-Chain</span> & <span className='gray'>Off-Chain</span> Arts.</h3>
            
          <p> Wherever you are, the <span className='white'>Crypt</span><span className='red'>Art</span> ecosystem allows you to connect & collaborate with bright
                while making profit from our luxury gallery.</p>

                
        </div> 

      <img  className='brush' src={Brush}/>

      <div className='box1'></div>
      <div className='box2'></div>

    </div>

    
  )
}

export default intro