import React, { useEffect, useState } from 'react';
import CardSummary from './cardSummary';
import location from '../json/card'
import { CardItem } from '@/types/hometype';


const CardData = () => {
    const [product, setProduct] = useState<CardItem[]>([]);
    useEffect(() => {
        setProduct(location);

    }, [product])
    return (
        <>
            <section className='py-4 container'>
                <div className='row justify-content-center'>
                    {product.map((item:CardItem) => {

                        return (
                            <>
                                <CardSummary item={item} />
                            </>
                        )
                    })}

                </div>
            </section>

        </>
    )
}
export default CardData;