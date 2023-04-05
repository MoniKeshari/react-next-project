import Skeleton from 'react-loading-skeleton'
import styles from './carousel.module.scss'
const CarouselShimmer = () => {
    return (
        <>
                    <div className={`carousel-item ${styles.containerdata} `}>
                        <Skeleton />
                     
                    </div>

              
        </>
    )
}
export default CarouselShimmer;