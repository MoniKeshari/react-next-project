
import { useAppDispatch } from '@/ReduxToolkit/hooks';
import styles from '../pages/cartdetail.module.scss';
import { decrementQuantity, incrementQuantity, removeItem } from '@/ReduxToolkit/createSlice';
import Image from 'next/image';
import Link from 'next/link';
import { product, productItem } from '@/types/hometype';


  
  
const CartDetail = ({ item }: {item:product}) => {
    const dispatch = useAppDispatch();


    return (
        <>
            {item?.map((id: productItem, index:number) => {
                const originalPrice = id.price;
                const discountPercentage = 10; // assuming 10% discount
                const discountedPrice = originalPrice - (originalPrice * (discountPercentage / 100));
                return (
                    <>
                        <div className={styles.container} key={index}>
                            <Link href={`/cardpost/${id.id}`} >
                               
                                <div className={`${styles.wrapper} row `}>
                                    <div className={`${styles.imgpic} col-md-4`}>
                                        <Image
                                            src={id.image}
                                            alt="Description of the image"
                                            width={200}
                                            height={200}
                                        />
                                    </div>

                                    <div className='col-md-6 mt-5 '>
                                        <div className='row justify-content-center'>

                                            <div className={`${styles.containerData} col-md-4`}>
                                                <ul>
                                                    <li>
                                                        <h6>{id.category}</h6>
                                                    </li>
                                                    <li>
                                                        <p className="card-text">
                                                            <span className={styles.originalPrice}> &#8377;{originalPrice.toLocaleString()}</span>
                                                            <span className={styles.discountprice}>&#8377;{discountedPrice.toLocaleString()} </span>
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p className={styles.desc}>{id.title}</p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className='col-md-2 '> <button className={styles.dec} onClick={() => dispatch(decrementQuantity(id.id))
                                        }><span>-</span></button>

                                        </div>
                                        <div className={`${styles.quantity} col-md-2`}>

                                            <span>{id.quantity}</span>

                                        </div>
                                        <div className='col-md-2 '> <button className={styles.inc} onClick={() => dispatch(incrementQuantity(id.id))}><span>+</span></button></div>

                                        <div className='col-md-2 '> <button className={styles.rem} onClick={() => dispatch(removeItem(id.id))

                                        }>Remove</button></div>

                                        </div>


                                    </div>


                                </div>
                            </Link>
                        </div>
                    </>
                )
            })}

        </>
    )
}

export default CartDetail;
