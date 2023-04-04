import React, { useState } from 'react';
import styles from './carousel.module.scss';
import Carousel from 'react-bootstrap/Carousel';
import carousel from '../components/json/carousel';
const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <div className={styles.container}>
    {carousel.map((id) => {
        return (
          <><Carousel className={styles.Carouseldata} activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className={styles.carouselItem}>
              <img
                className="d-block w-100"
                src={`/${id.imageUrl}`}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{id.id}</h3>
                <p>{id.title}</p>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel></>
        )
      })}
    </div>
    

    </>

  );
}
export default ControlledCarousel;
