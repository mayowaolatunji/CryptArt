import React from 'react'

import './footer.css';

import Telegram from './telegram.svg'
import Twitter from './twitter.svg'
import Discord from './discord.svg'


function footer() {
  return (
    <div className='Footer'>

      <div className="footerContent">

      <div className="list">
        <ul>
          <li className='headerText'>Account</li>
          <li>Profile</li>
          <li>Studio</li>
          <li>mints</li>
        </ul>
      </div>

      <div className="list">
        <ul>
          <li className='headerText' >Resource</li>
          <li>Documentation</li>
          <li>Developer</li>
          <li>Learn</li>
          <li>Help</li>
        </ul>

      </div>

      <div className="list">
      <ul>
          <li className='headerText'>Stats</li>
          <li>Rankings</li>
          <li>Collections</li>
          <li>Art status</li>
        </ul>
      </div>

      <div className="community">
        <ul>
          <li className='headerText'>Community</li>
        </ul>

        <div className="communityImg">
        <img src={Discord} alt="" />
        <img src={Telegram} alt="" />
        <img src={Twitter} alt="" />
        </div>
      </div>

      </div>

    </div>
  )
}

export default footer