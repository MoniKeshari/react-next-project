import { CardSummaryProps } from '@/types/hometype';
import React from 'react';
import styles from '../locationcard/cardSummary.module.scss';
import { Button } from 'react-bootstrap';
import { useAppDispatch } from '@/ReduxToolkit/hooks';
import { addToCart } from '@/ReduxToolkit/createSlice';

const CardSummary: React.FC<CardSummaryProps> = ({item}: any) => {
  

    return (
        <>
           

        </>
    )
}
export default CardSummary;