import { cardType } from '@/types/hometype';
import React from 'react';
import styles from '../locationcard/cardSummary.module.scss';
import { Button } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '@/ReduxToolkit/hooks';
import { addToCart, incrementQuantity } from '@/ReduxToolkit/createSlice';

const CardSummary = ({ item }: any) => {
    console.log(item, 'item');

    const dispatch = useAppDispatch();

    const handleClick=()=>{
        dispatch(addToCart(item))
        console.log(  dispatch(addToCart(item)), 'checking');
        
    }

    return (
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
                        {/* <Button className={styles.dec}>-</Button>
                        <span className={styles.quantity}></span>
                        <Button className={styles.inc} onClick={() =>
                            //  console.log( dispatch(addToCart(item.id)), 'check')
                            dispatch(addToCart(item.id))

                        }>+</Button> */}
                        <Button onClick={handleClick}>Add To Cart</Button>

                    </small>
                </div>
            </div>


        </div>
    )
}
export default CardSummary;