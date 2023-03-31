
import 'react-multi-carousel/lib/styles.css';
import styles from './carousel.module.scss';

import { Carousel, CarouselItem } from 'react-bootstrap';

const  MyCarousel=()=> {
  const images = ['/homeimg/w9.jpg', '/homeimg/w21.jpg', '/homeimg/w34.jpg', '/homeimg/w78.jpg'];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className={styles.carouselContainer}>
      <Carousel responsive={responsive}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default MyCarousel;
