import { useState, useEffect } from 'react';
import carouseldata from '../components/json/carousel';
import styles from './carousel.module.scss'
import Image from 'next/image';
const MyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const interval = 3000;
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(currentIndex => (currentIndex + 1) % carouseldata.length);
    }, interval);
    return () => clearInterval(intervalId);
  }, []); // run useEffect only once on component mount


  const nextSlider = () => {
    setCurrentIndex(currentIndex + 1);
  }
  const prevSlider = () => {
    setCurrentIndex(currentIndex - 1);
  }
 
  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {carouseldata.map((item) => (
          <div key={item.id} className={`carousel-item ${styles.containerdata} ${item.id === currentIndex ? 'active' : ''}`}>
            <Image src={`/${item.imageUrl}`} alt={item.title} height={500} width={1400} />
            <div className="carousel-caption">
              <h5>{item.title}</h5>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev" onClick={prevSlider}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next" onClick={nextSlider}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default MyCarousel;
