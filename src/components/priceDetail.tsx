import { useAppSelector } from '@/ReduxToolkit/hooks';
import styles from './price.module.scss';
const PriceDetail = ({ itemCount, item }: any) => {
    const totalPrice = item.reduce((acc: any, product: any) => acc + product.price * product.quantity, 0);
    const discountPercentage = 2;
    const totaldiscountPrice = totalPrice - (totalPrice * (discountPercentage / 100));
    const discountprice = totalPrice - totaldiscountPrice;
    const totalamountdata = totalPrice - discountprice;

    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <h3>PriceDetails</h3>
                    <p className={styles.para}></p>
                    <ul className="list">
                        <li>
                            <span className={styles.itemdata}>Price ({itemCount} Items)</span>
                            <span className={styles.itemdata}>&#8377; {totalPrice.toFixed(2)}</span>
                        </li>
                        <li>
                            <span className={styles.itemdata}>Discount</span>
                            <span className={styles.discountdata}>-&#8377; {discountprice.toFixed(2)}</span>
                        </li>
                        <li >
                            <span className={styles.itemdata}>Delivery Charges</span>
                            <span className={styles.deleverycharge}>Free</span>
                        </li>
                    </ul>
                    <div className={styles.totalmath}>
                        <ul className={styles.totalamount}>
                            <li>
                                <span className="item">Total Amount</span>
                                <span className="value">&#8377; {totalamountdata.toFixed(2)}</span>
                            </li>

                        </ul>
                    </div>
                    <div>
                        <ul className="list">
                            <li> <span className={styles.rewardspoints}>You will save &#8377; {discountprice.toFixed(2)} on this order</span></li>

                        </ul>
                    </div>
                </div>

            </div>


        </>
    )

}
export default PriceDetail;