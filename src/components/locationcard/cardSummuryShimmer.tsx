import styles from './cardSummary.module.scss';
import Skeleton from 'react-loading-skeleton'
const CardShimmer = () => {
    return (
        <>
            <div className={`${styles.columncard} col-md-4 col-lg-3 mx-0 mb-4`}>
                <div className={`${styles.cardData} card p-0 overflow-hidden shadow h-100`}>
                    <Skeleton />
                    <div className="card-body">
                        <h5 className="card-title"><Skeleton /></h5>

                        <p className="card-text">
                            <span className={styles.originalPrice}> <Skeleton /></span>
                            <span className={styles.discountprice}><Skeleton /> </span>
                        </p>

                        <p><Skeleton /></p>

                        <p className="card-text"><Skeleton /></p>
                    </div>
                    <div className={`${styles.cardFooter} card-footer`}>
                        <small className="text-muted">

                            <Skeleton />

                        </small>
                    </div>
                </div>
            </div>
        </>
    )


}
export default CardShimmer;