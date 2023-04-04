import React, { useEffect, useState } from 'react';
import CardSummary from './cardSummary';
import { CardItem } from '@/types/hometype';
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
            <section className='py-4 container'>
                <div className='row justify-content-center'>
                    {product.map((item: CardItem) => {
                        return (
                            <>
                                <CardSummary item={item} key={item.id}/>
                            </>
                        )
                    })}


                </div>
            </section>

        </>
    )
}
export default CardData;