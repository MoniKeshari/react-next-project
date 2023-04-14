import React from 'react';
import { ProductItemData } from '@/types/hometype';
import { useAppDispatch } from '@/ReduxToolkit/hooks';
import { addToCart } from '@/ReduxToolkit/createSlice';
import styles from './cardSummary.module.scss'
import { Button } from 'react-bootstrap';
import ShimmerEffect from '@/pages/shimmer';
import Image from 'next/image';
import Link from 'next/link';

const CardData = ({ item, isLoading }: { item: ProductItemData, isLoading: boolean }) => {
    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(addToCart(item))
    }
    const rating = item?.rating?.rate;
    const ratingVisual = item?.rating?.rate >= 4;
    const originalPrice = item.price;
    let discountPercentage = 2;
    if (originalPrice >= 40) {
        discountPercentage = 4;
    }
    const discountedPrice = originalPrice - (originalPrice * (discountPercentage / 100));
    return (
        <>
            {isLoading ? (<ShimmerEffect />) : (<>

                <div className={`${styles.columncard} col-md-4  mx-0 mb-4`}>
                    <div className={`${styles.cardData} card p-0 overflow-hidden shadow h-100`}>
                        <Link href={`/cardpost/${item.id}`} >

                            {ratingVisual && (<> <span className={styles.badge}>Best Seller</span></>)}
                            <Image src={`${item.image}`} alt='' height={500} width={249} />


                        </Link>
                        <div className='card-body'>
                            <h5 className="card-title">{item.category}</h5>

                            <p className="card-text">
                                <span className={styles.originalPrice}> &#8377;{originalPrice.toFixed(2).toLocaleString()}</span>
                                <span className={styles.discountprice}>&#8377;{discountedPrice.toFixed(2).toLocaleString()} </span>
                            </p>

                            <p>{discountPercentage}% off</p>

                            <p className="card-text">{item.title}</p>
                        </div>
                        <div className={`${styles.cardFooter} card-footer`}>

                            <div>
                                <Button className={styles.buttondec}>{rating}
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg></span></Button>
                            </div>
                            <div>
                                <Button onClick={handleClick} className={styles.buttonadd}>Add To Cart</Button>
                            </div>



                        </div>
                    </div>

                </div></>)}

        </>
    )
}
export default CardData;