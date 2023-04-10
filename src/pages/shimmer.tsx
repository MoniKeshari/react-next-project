
import styles from '../components/locationcard/cardSummary.module.scss';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {
  ShimmerButton,
  ShimmerThumbnail,
} from "react-shimmer-effects";
const ShimmerEffect = () => {
  return (
    <>
      <div className={`${styles.columncard} col-md-4  mx-0 mb-4`}>
        <div className={`${styles.cardData} card p-0 overflow-hidden shadow h-100`}>
          <ShimmerThumbnail height={500} width={500} className="m-0" rounded />
          <div className="card-body">
            <h5 className="card-title">

              <Skeleton width={100} height={10} />
            </h5>

            <p className="card-text">
              <span className={styles.originalPrice}> <Skeleton width={150} height={10} /> </span>
              <span className={styles.discountprice}>   <Skeleton width={50} height={10} style={{ marginTop: "15px" }} /> </span>
            </p>
            <p className="card-text">
              <span className={styles.originalPrice}>  <Skeleton width={200} height={10} /> </span>
              <span className={styles.discountprice}>  <Skeleton width={90} height={10} /> </span>
            </p>
          </div>
          <div className={`${styles.cardFooter} card-footer`}>
            <small className="text-muted">
              <ShimmerButton size="md"/>
            </small>
          </div>
        </div>
      </div>
    </>

  )
};

export default ShimmerEffect;