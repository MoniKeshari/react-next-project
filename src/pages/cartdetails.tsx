import { Button } from 'react-bootstrap';
import styles from '../components/locationcard/cardSummary.module.scss'
import { useAppSelector } from '@/ReduxToolkit/hooks';
import EmptyCart from './emptycart';
const CartDetail = ({ item }: any) => {

    return (
        <>
            <div className='col-md-6 col-lg-3 mx-0 mb-4'>
                <div className={`${styles.cardData} card p-0 overflow-hidden shadow h-100`}>
                    <img src={item?.img} alt='' />

                    <div className="card-body">
                        <h5 className="card-title">{item?.name}</h5>
                        <p className="card-text">Price:{item?.price}</p>
                        <p className="card-text">{item?.desc}</p>
                    </div>
                    <div className={`${styles.cardFooter} card-footer`}>
                        <small className="text-muted">

                            <Button >back</Button>

                        </small>
                    </div>
                </div>


            </div>
           
        </>
    )
}
export default CartDetail;