import React from 'react';
import Navbar from '../components/Navbar';
import DisplayLayer from './displaylayer';
import { Link } from 'react-router-dom';
import backgroundVideo from '../assets/background.mp4';
import Product from '../components/product';

const Home = () => {
  return (
    
      <div>
        <Navbar />
        <Product />
      </div>
    
  );
};

export default Home;