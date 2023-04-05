import React, { useEffect, useRef, useState } from 'react';
import styles from './carousel.module.scss';
// import Carousel from 'react-bootstrap/Carousel';
import carousel from '../components/json/carousel';

// import Carousel from 'react-multi-carousel';
// import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel"; // Import carousel component
const ControlledCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const interval = 2000;
  const handleChange = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      // increment current index and loop back to 0 when end of carousel is reached
      setCurrentIndex(currentIndex => (currentIndex + 1));
    }, interval);

    // clear interval on component unmount
    if (currentIndex) {
      setTimeout(() => setCurrentIndex(0), interval);
    }

    // clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []); 
  return (
    <>
      <div className={styles.container}>
      <Carousel 
        selectedItem={currentIndex} 
        onChange={handleChange}
      >
        <div>
          <img src='./homeimg/other2.jpg' alt="Slide 1" />
        </div>
        <div>
          <img src='./homeimg/other.jpg' alt="Slide 2" />
        </div>
        <div>
          <img src="./homeimg/bag.jpg" alt="Slide 3" />
        </div>
      </Carousel>

      {/* <button onClick={handlePrevClick}>Previous</button>
      <button onClick={handleNextClick}>Next</button> */}
    </div>

    </>

  );
}
export default ControlledCarousel;
