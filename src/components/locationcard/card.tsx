import React, {useEffect, useState} from 'react';
import CardSummary from './cardSummary';
import location from '../json/card'
import { useAppSelector } from '@/ReduxToolkit/hooks';
interface CardItem {
    id: number;
    name: string;
    price: number;
    description: string;
   
  }
  
const CardData = () => {
    
    const[product, setProduct]=useState<CardItem[]>([]);
    useEffect(()=>{
        setProduct(location);

    })
    return (
        <>
            <section className='py-4 container'>
                <div className='row justify-content-center'>
                    {product.map((item, index) => {
                      
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