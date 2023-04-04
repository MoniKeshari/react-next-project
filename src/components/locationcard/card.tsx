import React from 'react';
import {  CardSummaryProps } from '@/types/hometype';
import { useAppDispatch } from '@/ReduxToolkit/hooks';
import { addToCart } from '@/ReduxToolkit/createSlice';
import styles from './cardSummary.module.scss'
import { Button } from 'react-bootstrap';
const CardData: React.FC<CardSummaryProps> = ({ item }: {item:any}) => {
    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(addToCart(item))

    }
    const originalPrice = item.price;
    const discountPercentage = 2; // assuming 10% discount
    const discountedPrice = originalPrice - (originalPrice * (discountPercentage / 100));
    return (
        <>
            <div className={`${styles.columncard} col-md-4 col-lg-3 mx-0 mb-4`}>
                <div className={`${styles.cardData} card p-0 overflow-hidden shadow h-100`}>
                    <img src={item.image} alt='' />

                    <div className="card-body">
                        <h5 className="card-title">{item.category}</h5>

                        <p className="card-text">
                            <span className={styles.originalPrice}> &#8377;{originalPrice.toLocaleString()}</span>
                            <span className={styles.discountprice}>&#8377;{discountedPrice.toLocaleString()} </span>
                        </p>

                        <p>{discountPercentage}% off</p>

                        <p className="card-text">{item.title}</p>
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
export default CardData;