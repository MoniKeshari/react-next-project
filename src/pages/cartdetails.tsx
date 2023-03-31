
import { useAppDispatch } from '@/ReduxToolkit/hooks';
import styles from '../pages/cartdetail.module.scss';
import Image from 'next/image';
import { decrementQuantity, incrementQuantity, removeItem } from '@/ReduxToolkit/createSlice';

const CartDetail = ({ item }: { item: any }) => {
    const dispatch = useAppDispatch();
    return (
        <>
            {item?.map((id: any) => {
                return (
                    <>
                        <div className={`${styles.wrapper} row justify-content-center`}>
                            <div className={`${styles.imgpic} col-md-2`}>

                                <Image
                                    src={`/${id.img}`}
                                    alt="Description of the image"
                                    width={200}
                                    height={200}
                                />

                            </div>

                            <div className='col-md-6 mt-5'>
                                <div className='row justify-content-center'>

                                    <div className={`${styles.containerData} col-md-4 `}>
                                        <ul>
                                            <li>
                                                <h6>{id.name}</h6>
                                            </li>
                                            <li>
                                                <p className="card-text">
                                                    {id.price}
                                                </p>
                                            </li>
                                            <li>
                                                <p>{id.desc}</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='col-md-2 '> <button onClick={() => dispatch(decrementQuantity(id.id))
                                    }>decrement</button></div>
                                    <div className='col-md-2 '>

                                        <p>count {id.quantity}</p>

                                    </div>
                                    <div className='col-md-2 '> <button onClick={() => dispatch(incrementQuantity(id.id))}>increment</button></div>

                                    <div className='col-md-2 '> <button onClick={() => dispatch(removeItem(id.id))

                                    }>Remove</button></div>

                                </div>


                            </div>


                        </div>
                    </>
                )
            })}

        </>
    )
}

export default CartDetail;
