import React from 'react';

interface cardType {
    id: number,
    img: any,
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
            img: '/homeimg/img8.jpg',
            name: 'Tazmahal',
            desc: 'It is beautiful location'

        },
        {
            id: 5,
            img: '/homeimg/img9.jpg',
            name: 'Tazmahal',
            desc: 'It is beautiful location'

        },
        {
            id: 6,
            img: '/homeimg/img10.jpg',
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
            {location.map((id) => {
                return (
                    <>
                   
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <div className="col-sm">
                                <div className='card h-100'>
                                    <img src={id.img} alt='' />
                                    <div className="card-body">
                                        <h5 className="card-title">{id.name}</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">{id.desc}</small>
                                    </div>
                                </div>
                            </div>

                        </div>
                       
                    </>
                )
            })}
        </>
    )
}
export default CardData;