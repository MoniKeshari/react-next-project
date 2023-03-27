import React from 'react';
import CardSummary from './cardSummary';
import location from '../json/card'
const CardData = () => {
    return (
        <>
            <section className='py-4 container'>
                <div className='row justify-content-center'>
                    {location.map((id, index) => {
                        return (
                            <>
                                <CardSummary img={id.img} name={id.name} desc={id.desc} key={index} id={id.id} />
                            </>
                        )
                    })}

                </div>
            </section>

        </>
    )
}
export default CardData;