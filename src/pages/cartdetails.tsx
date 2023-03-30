
import styles from '../pages/cartdetail.module.scss';
import Image from 'next/image';

const CartDetail = ({ itemCount }: {itemCount:number}) => {
    console.log(itemCount, 'itemdata');
    

    return (
        <>
            <div className={`${styles.wrapper} row justify-content-center`}>
                <div className={`${styles.imgpic} col-md-2`}>
                    <Image
                        src="/homeimg/about.svg"
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
                                    <h6>name :{itemCount}</h6>
                                </li>
                                <li>
                                    <p>price</p>
                                </li>
                                <li>
                                    <p>desc</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-md-2 '> <button>dec</button></div>
                        <div className='col-md-2 '>

                            <p>count</p>

                        </div>
                        <div className='col-md-2 '> <button>dec</button></div>



                    </div>


                </div>
                

            </div>
        </>
    )
}

export default CartDetail;
