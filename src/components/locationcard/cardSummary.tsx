import React from 'react'

export interface cardType {
    id: number,
    img: string,
    name: string,
    desc: string

}
type cardArray = cardType[];
export interface cardarraytype{
    data:cardArray;

}

const CardSummary=(props:cardType) =>{
    const {id, img, desc, name}=props;
  
  return (
    <div className="col-md-6 col-lg-3 mx-0 mb-4">
                           

                                <div className="card p-0 overflow-hidden shadow h-100">
                                    <img src={img} alt='' />
                                    <div className="card-body">
                                        <h5 className="card-title">{name}</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">{desc}</small>
                                    </div>
                                </div>
                           

                        </div>
  )
}
export default CardSummary;