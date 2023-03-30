import { CardSummaryProps } from '@/types/hometype';
import React from 'react';
import styles from '../locationcard/cardSummary.module.scss';
import { Button } from 'react-bootstrap';
import { useAppDispatch } from '@/ReduxToolkit/hooks';
import { addToCart } from '@/ReduxToolkit/createSlice';

const CardSummary: React.FC<CardSummaryProps> = ({ item }: any) => {
    const dispatch = useAppDispatch();
    const handleClick = () => {

        dispatch(addToCart(item))

    }

    return (
        <>
            <div className='col-md-6 col-lg-3 mx-0 mb-4'>
                <div className={`${styles.cardData} card p-0 overflow-hidden shadow h-100`}>
                    <img src={item.img} alt='' />

                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">Price:{item.price}</p>
                        <p className="card-text">{item.desc}</p>
                    </div>
                    <div className={`${styles.cardFooter} card-footer`}>
                        <small className="text-muted">

                            <Button onClick={handleClick}>Add To Cart</Button>

                        </small>
                    </div>
                </div>
            </div>

        </>
    )
}
export default CardSummary;