import React from 'react';
import CardSummary from './cardSummary';
import location from '../json/card'
import { useAppSelector } from '@/ReduxToolkit/hooks';

const CardData = () => {
    const cart = useAppSelector((state) => state.counter.items)
    console.log(cart, 'cart');
    
    return (
        <>
            <section className='py-4 container'>
                <div className='row justify-content-center'>
                    {cart.map((item, index) => {
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