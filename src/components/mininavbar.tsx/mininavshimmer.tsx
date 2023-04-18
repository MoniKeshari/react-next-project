import styles from './mininav.module.scss';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {
    ShimmerCircularImage
  } from "react-shimmer-effects";
const MiniShimmer = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div >
                <ShimmerCircularImage size={100} />
                    <div className={styles.container}><p><Skeleton width={70} height={30} /></p></div>
                </div>
            </div>
        </>
    )
}
export default MiniShimmer;