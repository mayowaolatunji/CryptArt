import './auction.css';
import React, { useState, useEffect } from 'react';

import Cart from './cart.svg'

// ... (imports)

const Auction = () => {
  const [collections, setCollections] = useState([]);

  const generateRandomPrice = () => {
    return (Math.random() * (4 - 0.5) + 0.5).toFixed(2);
  };

  const addRandomPrices = (collections) => {
    return collections.map((collection) => ({
      ...collection,
      randomPrice: generateRandomPrice(),
    }));
  };

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
        const collectionsWithRandomPrices = addRandomPrices(data.collections);
        setCollections(collectionsWithRandomPrices);
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
      <div className='header'>
        <h3>Auction Collections</h3>
        <div className="line"></div>
      </div>

      <div className='auctionPage'>
        <div className='cardBoard'>
          {filteredCollections.map((collection) => (
            <div className='card' key={collection.collection}>
              <div className='cardNFT'>
                <h3 className='collectionName'>{collection.name}</h3>
                <img src={collection.image_url} alt={collection.name} />
                <div className="chainInfo">
                  <p>
                    Chain: {collection.contracts.map(contract => contract.chain).join(', ')}
                  </p>
                  <p className='cardPrice'>
                    {collection.randomPrice} ETH
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Auction;
