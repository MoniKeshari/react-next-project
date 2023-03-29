"use client";  // this is a client component
import { useAppSelector } from '@/ReduxToolkit/hooks';
import styles from '../components/header.module.scss';
import { FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';
import CartDetail from '../pages/cartdetails';
import Link from 'next/link';
const Header = () => {
    const [show, setShow] = useState(false);
   
    const itemCount = useAppSelector(state => state.counter.items.reduce((acc, item) => acc + item.quantity, 0));
   
    
    const handleClick = () => {
        setShow(true);
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

                            <Link onClick={() => handleClick} href="/cartdetails">
                                <div className={styles.cart}>

                                    <div className={styles.counter}>

                                        {itemCount > 0 && <span>{itemCount}</span>}  </div>
                                    <FaShoppingCart className={styles.icon} />
                                </div>
                            </Link>


                        </li>
                    </ul>

                </div>
            </nav>
            {show && (<><CartDetail /></>)}
        </>
    )
}
export default Header;