import styles from './cardpost.module.scss';
import Skeleton from 'react-loading-skeleton'
import {
    ShimmerThumbnail,
} from "react-shimmer-effects";
const CardPostShimmer = () => {
    return (
        <>
            <div className={`${styles.wrapper} row`} >
                <div className={`${styles.imgpic} col-md-4`}>
                    <ShimmerThumbnail height={300} width={400} className="m-0" rounded />
                </div>

                <div className={`${styles.content} col-md-6 mt-5`}>
                    <div className='row justify-content-center'>

                        <div className={`${styles.containerData} col-md-4`}>
                            <ul>
                                <li>
                                    <h2 className={styles.cate}>  <Skeleton width={150} height={20} /></h2>
                                </li>
                                <li>
                                    <h5>  <Skeleton width={150} height={20} /></h5>
                                </li>
                                <li>
                                    <p className="card-text">
                                        <span className={styles.originalPrice}>   <Skeleton width={150} height={20} /></span>
                                        <span className={styles.originalPrice}>   <Skeleton width={150} height={20} /></span>
                                        <span className={styles.originalPrice}>   <Skeleton width={150} height={20} /></span>
                                        <span className={styles.originalPrice}>   <Skeleton width={150} height={20} /></span>
                                        <span className={styles.originalPrice}>   <Skeleton width={150} height={20} /></span>
                                        <span className={styles.originalPrice}>   <Skeleton width={150} height={20} /></span>
                                    </p>
                                </li>


                            </ul>
                        </div>

                    </div>


                </div>


            </div></>
    )

}
export default CardPostShimmer;