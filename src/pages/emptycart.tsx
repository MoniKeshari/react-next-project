

import Image from 'next/image';
import styles from './empty.module.scss';
const EmptyCart = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div>
                    <Image
                        src="/homeimg/empty-cart.svg"
                        alt="Description of the image"
                        width={300}
                        height={300}
                    />
                </div>

                <div >
                    <h3>Your Cart is Empty!</h3>
                    <p>Must add items on cart before you proceed to checkout.</p>


                    <button>RETURN TO SHOP</button>
                </div>


            </div>
        </>
    )
}
export default EmptyCart;