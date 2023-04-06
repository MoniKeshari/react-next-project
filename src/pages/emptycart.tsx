

import Image from 'next/image';
import styles from './empty.module.scss';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const EmptyCart = ({toggleDrawer}:any) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleClick = () => {
        setScrollPosition(window.pageYOffset + 1500);
        toggleDrawer();
    };
    useEffect(() => {
        window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    });


    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.imges}>
                    <Image
                        src="/homeimg/empty-cart.svg"
                        alt="Description of the image"
                        width={300}
                        height={300}
                    />
                </div>

                <div className={styles.contentdata}>
                    <h3>Your Cart is Empty!</h3>
                    <p>Must add items on cart before you proceed to checkout.</p>
                    <Link href= '/'>
                    <button className={styles.buttonR} onClick={handleClick}><span>RETURN TO SHOP</span></button>
                    </Link>
                </div>


            </div>
        </>
    )
}
export default EmptyCart;