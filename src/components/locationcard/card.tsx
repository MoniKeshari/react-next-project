import React, { useEffect, useState } from 'react';
import CardSummary from './cardSummary';
import { CardItem } from '@/types/hometype';
import { SkeletonTheme } from 'react-loading-skeleton';
import axios from 'axios';

const CardData = () => {
  
    const [product, setProduct] = useState<CardItem[]>([]);

    useEffect(() => {
       
            axios.get('https://fakestoreapi.com/products').then((res: any) => {
                const response = res.data;
                setProduct(response);
              


            })
      

    }, [])


    return (
        <>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <section className='py-4 container'>
                    <div className='row justify-content-center'>

                        {product.map((item: CardItem) => {
                            return (
                                <>

                                <CardSummary item={item} />

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