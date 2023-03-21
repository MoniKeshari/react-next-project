import React from 'react';
import CardSummary, { cardarraytype } from './cardSummary';
export interface cardType {
    id: number,
    img: string,
    name: string,
    desc: string

}
type cardArray = cardType[];

const CardData = () => {
    const location: cardArray = [
        {
            id: 1,
            img: "./homeimg/img5.jpg",
            name: 'Tazmahal',
            desc: 'It is beautiful location'

        },
        {
            id: 2,
            img: './homeimg/img6.jpg',
            name: 'Tazmahal',
            desc: 'It is beautiful location'

        },
        {
            id: 3,
            img: './homeimg/img7.jpg',
            name: 'Tazmahal',
            desc: 'It is beautiful location'

        },
        {
            id: 4,
            img: './homeimg/img8.jpg',
            name: 'Tazmahal',
            desc: 'It is beautiful location'

        },
        {
            id: 5,
            img: './homeimg/img9.jpg',
            name: 'Tazmahal',
            desc: 'It is beautiful location'

        },
        {
            id: 6,
            img: './homeimg/img10.jpg',
            name: 'Tazmahal',
            desc: 'It is beautiful location'

        },
        {
            id: 7,
            img: './homeimg/img3.jpg',
            name: 'Tazmahal',
            desc: 'It is beautiful location'

        },

    ]
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