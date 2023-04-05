"use client";  // this is a client component
import { useAppSelector } from '@/ReduxToolkit/hooks';
import styles from '../components/header.module.scss';
import { FaShoppingCart } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import CartDetail from '../pages/cartdetails';
import EmptyCart from '@/pages/emptycart';
import Link from 'next/link';
const Header = () => {
    const [show, setShow] = useState(false);
    const [empty, setEmpty] = useState(false);
    const item = useAppSelector(state => state.counter.items)
    const itemCount = useAppSelector(state => state.counter.items.reduce((acc, item) => acc + item.quantity, 0));
    const handleClick = () => {

        if (itemCount === 0) {
            setEmpty(true);
        }
        else {
            setEmpty(false);

        }
        if (itemCount !== 0) {
            setShow(true);
        }
        else {

        }


    }
    useEffect(() => {
        if (itemCount !== 0) {
            setEmpty(false);
        }

    }, [itemCount])

    return (

        <>
            <header className={styles.header}>
                <nav className={`${styles.wrapper} navbar navbar-expand-lg navbar-light bg-dark`}>
                    <h3>Shopping View</h3>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`${styles.content} collapse navbar-collapse`} id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li> <Link className="nav-item active" href="/">
                                Home
                            </Link></li>
                            <li><Link className="nav-item" href="/about">
                                About

                            </Link></li>
                            <li> <Link className="nav-item" href="/contact">
                                Contact
                            </Link></li>
                            <li><Link className="nav-item" href=''>

                                <div className={styles.cart}>
                                    <div className={styles.counter}>
                                        <span>{itemCount || 0} </span></div>
                                    <FaShoppingCart className={styles.icon} onClick={handleClick} />
                                </div>
                            </Link></li>

                        </ul>

                    </div>
                </nav>
            </header>

            {show && (<div><CartDetail item={item} /></div>)}

            {empty && (<> <EmptyCart /></>)}

        </>
    )
}
export default Header;