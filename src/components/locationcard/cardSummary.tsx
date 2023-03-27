import { cardType } from '@/types/hometype';
import React from 'react';
import styles from '../locationcard/cardSummary.module.scss';
import { Button } from 'react-bootstrap';
const CardSummary = (props: cardType) => {
    const { img, desc, name } = props;
    return (
        <div className='col-md-6 col-lg-3 mx-0 mb-4'>
            <div className={`${styles.cardData} card p-0 overflow-hidden shadow h-100`}>
                <img src={img} alt='' />

                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{desc}</p>
                </div>
                <div className={`${styles.cardFooter} card-footer`}>
                    <small className="text-muted">
                        <Button className={styles.dec}>-</Button>
                               
                        <Button className={styles.inc}>+</Button>

                    </small>
                </div>
            </div>


        </div>
    )
}
export default CardSummary;