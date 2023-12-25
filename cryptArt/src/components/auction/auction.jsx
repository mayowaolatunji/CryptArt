import './auction.css';
import React, { useState, useEffect } from 'react';

const Auction = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-api-key': '7bddc5b8e10a4c6181715b58838f2632',
        },
      };

      try {
        const response = await fetch(
          'https://api.opensea.io/api/v2/collections?chain_identifier=ethereum&include_hidden=false&limit=80',
          options
        );
        const data = await response.json();
        setCollections(data.collections);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount

  const filteredCollections = collections.filter(
    (collection) => collection.image_url && collection.image_url !== ""
  );

  return (
    <>
    <div className='auctionPage'>

     <div className='header'>
     <div className="line"></div>
      <h3>Auction Collection</h3>
      <div className="line"></div>
     </div>


      {filteredCollections.map((collection) => (
        <div className='card' key={collection.collection}>

          <div className='collectionName'>
           <h3>{collection.name}</h3>
           <p className='cardDescription'> {collection.description}</p>

          </div>
          <div className='cardNFT'>
           <img src={collection.image_url} alt={collection.name} />
          </div>


        </div>
      ))}
    </div>
    </>
  );
};

export default Auction;
