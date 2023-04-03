import React, { useEffect, useState } from 'react';
import CardSummary from './cardSummary';
import { CardItem } from '@/types/hometype';
import CardShimmer from './cardSummuryShimmer';
import { SkeletonTheme } from 'react-loading-skeleton';
import axios from 'axios';

const CardData = () => {
    const [isLoading, setLoading] = useState(true);
    const [product, setProduct] = useState<CardItem[]>([]);

    useEffect(() => {
        setTimeout(() => {
            axios.get('https://fakestoreapi.com/products').then((res: any) => {
                const response = res.data;
                setProduct(response);
                setLoading(false);


            })
        }, 2000)

    }, [])


    return (
        <>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <section className='py-4 container'>
                    <div className='row justify-content-center'>

                        {product.map((item: CardItem) => {
                            return (
                                <>

                                    {isLoading ? (<CardShimmer />) : (<CardSummary item={item} />) }

                                </>



                            )
                        })}


                    </div>
                </section>
            </SkeletonTheme>
        </>
    )
}
export default CardData;