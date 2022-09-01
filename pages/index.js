import React from 'react'

import { Product, FooterBanner, HeroBanner } from '../components';

const Home = () => {
  return (
    <>
      <HeroBanner />

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>African wears of many symbols</p>
      </div>

      <div className='products-container'>
        {['product 1', 'product 2'].map((product) => product)} 
      </div>

      <FooterBanner />
    </>
  )
}

export default Home