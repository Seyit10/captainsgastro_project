import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/background.jpg'
import '../styles/Home.css'

function Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>
      <div className="headerContainer">
        <h1> Captain's Gastro Food Truck </h1>
        <p> TURKISH FOOD CATERING </p>
        <Link to="/menu">
          <button>ORDER NOW!</button>
        </Link>
        
      </div>
    </div>
  )
}

export default Home



