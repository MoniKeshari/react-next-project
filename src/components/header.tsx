"use client";  // this is a client component
import { useAppSelector } from '@/ReduxToolkit/hooks';
import styles from '../components/header.module.scss';
import { FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';
import CartDetail from '../pages/cartdetails';
import Link from 'next/link';
import EmptyCart from '@/pages/emptycart';

const Header = () => {
    const [show, setShow] = useState(false);
    const [empty, setEmpty] = useState(false);
    const item = useAppSelector(state => state.counter.items)
    const itemCount = useAppSelector(state => state.counter.items.reduce((acc, item) => acc + item.quantity, 0));
    const handleClick = () => {

        if (itemCount === 0) {
            setEmpty(true);
        }
        if (itemCount !== 0) {
            setShow(true);
        }


    }
    return (
        <>
            <nav className={`${styles.wrapper} navbar navbar-expand-lg navbar-light bg-dark`}>
                <a className="navbar-brand" href="#">Location Finder</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`${styles.content} collapse navbar-collapse`} id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/about">  About</a>
                        </li>
                        <li className="nav-item">
                            <a href="/contact">  Contact</a>
                        </li>
                        <li className="nav-item">

                            <div className={styles.cart}>
                                <div className={styles.counter}>
                                    <span>{itemCount || 0} </span></div>
                                <FaShoppingCart className={styles.icon} onClick={handleClick} />
                            </div>
                        </li>
                    </ul>

                </div>
            </nav>

            {show && (<><CartDetail item={item} /></>)}

            {empty && (<> <EmptyCart /></>)}

        </>
    )
}
export default Header;