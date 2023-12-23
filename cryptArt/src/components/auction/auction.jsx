import React from 'react'
import './auction.css';


function auction() {

  // API key: 7bddc5b8e10a4c6181715b58838f2632


  const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'x-api-key': '7bddc5b8e10a4c6181715b58838f2632'}
  };
  
  fetch('https://api.opensea.io/api/v2/collections?chain_identifier=ethereum&include_hidden=false&limit=10', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

  return (
    <div><h1>Auction</h1></div>
  )
}

export default auction