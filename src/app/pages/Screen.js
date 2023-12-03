'use client';
import React, { Component } from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 

export default function Screen() {
  
  const images = [
    "https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg",
    "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ]

  const textStyle = {
    position: 'absolute',
    display: 'flex',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white', 
    fontSize: '100px', 
    fontWeight: 'bold', 
    textAlign: 'centre',
    textShadow: '2px 2px 4px rgba(10, 10, 10, 10)', // Add text shadow
    fontStyle: 'italic',
    fontFamily: 'fantasy', 
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
        {
          images.map((image, index)=>(
            <div key={index}> 
              <img src={image} alt="image"/>
              <div style={textStyle}>This is an example text</div>
            </div> 
          ))
        }
      </Carousel> 
    </div> 
  )
}
