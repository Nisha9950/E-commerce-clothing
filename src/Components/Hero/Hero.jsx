// ImageSlider.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import shopping_image from '../assets/shopping_image.jpg'
import arrow_icon from '../assets/arrow.png'
import './Hero.css'


const Hero = () => {
  // Array of image objects. Replace these with your actual image paths or URLs.
  const images = [
    { id: 1, url: shopping_image, alt: 'Image 1', title: "NEW ARRIVALS ONLY", subtitle: "Exclusive Collections for Everyone" },
    { id: 2, url: shopping_image, alt: 'Image 2', title: "STYLISH OUTFITS", subtitle: "Upgrade Your Wardrobe Today" },
    { id: 3, url: shopping_image, alt: 'Image 3', title: "MODERN LOOKS", subtitle: "Trendy Styles for Every Occasion" },
  ];


  const [activeIndex, setActiveIndex] = useState(0);

  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
  };

  // Inline styles for the text overlay
  const textOverlayStyle = {
    position: 'absolute',
    top: '50%',
    left: '20%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'flex-start',
    marginRight: '400px',
    padding: '20px',
    borderRadius: '10px',
    color: 'white',
    transition: 'opacity 0.5s ease-in-out',
    opacity: 1,
    // animation: 'fadeIn 1s ease-in-out',
  };

  const headingStyle = {
    fontSize: '60px',
    margin: '0',
    animation: 'fadeIn 1s ease-in-out',
  };

  const paragraphStyle = {
    fontSize: '22px',
    marginTop: '10px',
    animation: 'fadeIn 1s ease-in-out',
  };


  const buttonStyle = {
    position: 'absolute',
    bottom: '80px',
    right: '80%',
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#ff4141',
    color: 'white',
    fontSize: '20px',
    fontWeight: '500',
    borderRadius: '75px',
    cursor: 'pointer',
    transition: 'background 0.3s ease-in-out',
  };

  const arrowStyle = {
    width: '30px',
    height: '20px',
    marginLeft: '10px',
  };


  return (
    <div style={{ width: '100%', marginBottom: '50px', position: 'relative' }}>

      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} style={{ position: 'relative' }}>

            <img
              src={image.url}
              alt={image.alt}
              style={{ width: '100%', height: '600px' }}
            />

          </div>
        ))}
      </Slider>


      <div style={textOverlayStyle} key={images[activeIndex].id}>
        <h2 style={headingStyle}>{images[activeIndex].title}</h2>
        <p style={paragraphStyle}>{images[activeIndex].subtitle}</p>
      </div>


      <div style={buttonStyle}>
        <div>Latest Collection</div>
        <img src={arrow_icon} alt="" style={arrowStyle} />
      </div>
    </div>
  );
};

export default Hero;













