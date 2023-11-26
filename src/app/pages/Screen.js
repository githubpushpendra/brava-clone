'use client';
import React, { Component } from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 

export default function Screen() {
  const images = [
    "https://t4.ftcdn.net/jpg/04/37/68/41/360_F_437684167_PfMo7xJwQPik8dAgM01lR0LO1NpiZ8fo.jpg",
    "https://t4.ftcdn.net/jpg/04/37/68/41/360_F_437684167_PfMo7xJwQPik8dAgM01lR0LO1NpiZ8fo.jpg",
    "https://t4.ftcdn.net/jpg/04/37/68/41/360_F_437684167_PfMo7xJwQPik8dAgM01lR0LO1NpiZ8fo.jpg"
  ]

  const textStyle = {
    position: 'absolute',
    top: '50%',
    left: '40%',
    transform: 'translate(-50%, -50%)',
    color: 'white', 
    fontSize: '50px', 
    fontWeight: 'bold', 
    textAlign: 'right',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add text shadow
  };

  const carouselSettings = {
    showStatus: false,  // Hide status (dots)
    showIndicators: false,  // Hide indicators (dots)
    infiniteLoop: true,  // Infinite loop of images
    autoPlay: true,  // Auto play carousel
    interval: 2000,  // Auto play interval in milliseconds (5 seconds in this example)
    showThumbs: false,
  };
  return (
    <div> 
      <Carousel {...carouselSettings}> 
          <div> 
              <img src={images[0]} alt="image1"/>
              <div style={textStyle}>This is an example text</div>
          </div> 
          <div> 
              <img src={images[1]} alt="image2" /> 
              <div style={textStyle}>This is an example text</div>
          </div> 
          <div> 
              <img src={images[2]} alt="image3"/> 
              <div style={textStyle}>This is an example text</div>
          </div> 
      </Carousel> 
    </div> 
  )
}
