
import { ContextData, ProductItemData } from '@/types/hometype';
import styles from './cardpost.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import CardPostShimmer from './cardpostshimmer';
export async function getStaticPaths() {

    const res = await fetch('https://fakestoreapi.com/products');
    const cardposts = await res.json();

    const paths = cardposts.map((post: ProductItemData) => (
        {
            params: { pageno: post.id.toString() },
        }));

    return { paths, fallback: false };
}

export async function getStaticProps(context: ContextData) {
    const id = context.params.pageno;

    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const postcard = await res.json();

    return {
        props: {
            postcard,
        },
    };
}
const CardPost = ({ postcard }: { postcard: ProductItemData }) => {
    const { id, description, image, category, title, price, rating } = postcard;
    const originalPrice = price;
    let discountPercentage = 2;
    if (originalPrice >= 40) {
        discountPercentage = 4;
    } // assuming 10% discount
    const discountedPrice = originalPrice - (originalPrice * (discountPercentage / 100));
    const ratingVisual = rating?.rate >= 4;
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return (
        <>
            {isLoading ? (<><CardPostShimmer /></>) : (<>    <div className={`${styles.wrapper} row`} key={id}>
                <div className={`${styles.imgpic} col-md-4`}>
                    {ratingVisual && (<> <span className={styles.badge}>Best Seller</span></>)}
                    <Image
                        src={image}
                        alt="Description of the image"
                        width={400}
                        height={300}
                    />
                </div>

                <div className={`${styles.content} col-md-6 mt-5`}>
                    <div className='row justify-content-center'>

                        <div className={`${styles.containerData} col-md-4`}>
                            <ul>
                                <li>
                                    <h2 className={styles.cate}>{category}</h2>
                                </li>
                                <li>
                                    <h5>{title}</h5>
                                </li>
                                <li>
                                    <p className="card-text">
                                        <span className={styles.originalPrice}>  &#8377;{originalPrice.toString()}</span>
                                        <span className={styles.discountprice}>&#8377;{discountedPrice.toString()} </span>
                                    </p>
                                </li>
                                <li>
                                    <p className={styles.description}>{description}</p>

                                </li>

                            </ul>
                        </div>

                    </div>


                </div>


            </div></>)}


        </>
    )
}
export default CardPost;