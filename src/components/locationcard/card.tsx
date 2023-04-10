import React from 'react';
import { ProductItemData } from '@/types/hometype';
import { useAppDispatch } from '@/ReduxToolkit/hooks';
import { addToCart } from '@/ReduxToolkit/createSlice';
import styles from './cardSummary.module.scss'
import { Button } from 'react-bootstrap';
import ShimmerEffect from '@/pages/shimmer';
import Image from 'next/image';
const CardData = ({ item , isLoading}: { item:ProductItemData, isLoading:boolean}) => {
    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(addToCart(item))
    }
   
    const originalPrice = item.price;
    const discountPercentage = 2; // assuming 10% discount
    const discountedPrice = originalPrice - (originalPrice * (discountPercentage / 100));
    return (
        <>
            {isLoading ? (<ShimmerEffect />) : (<>     <div className={`${styles.columncard} col-md-4  mx-0 mb-4`}>
                <div className={`${styles.cardData} card p-0 overflow-hidden shadow h-100`}>
                    <Image src={`${item.image}`} alt='' height={500} width={249}/>
                    <div className='card-body'>
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

            </div></>)}

        </>
    )
}
export default CardData;