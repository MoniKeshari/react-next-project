
import styles from '../cartdetail.module.scss';
import Image from 'next/image';
export async function getStaticPaths() {

    const res = await fetch('https://fakestoreapi.com/products');
    const cardposts = await res.json();

    const paths = cardposts.map((post: any) => (
        {
            params: { pageno: post.id.toString() },
        }));

    return { paths, fallback: false };
}

export async function getStaticProps(context: any) {
    const id = context.params.pageno;

    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const postcard = await res.json();

    return {
        props: {
            postcard,
        },
    };
}
const CardPost = ({ postcard }: any) => {
    const { id, description, image, category, title, price } = postcard;
    const originalPrice = price;
    const discountPercentage = 10; // assuming 10% discount
    const discountedPrice = originalPrice - (originalPrice * (discountPercentage / 100));

    return (


        <>
            <div className={`${styles.wrapper} row`} key={id}>
                <div className={`${styles.imgpic} col-md-4`}>
                    <Image
                        src={image}
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
                                    <p className={styles.desc}>{category}</p>
                                </li>
                                <li>
                                    <h6>{title}</h6>
                                </li>
                                <li>
                                    <p className="card-text">
                                        <span className={styles.originalPrice}>  &#8377;{originalPrice.toString()}</span>
                                        <span className={styles.discountprice}>&#8377;{discountedPrice.toString()} </span>
                                    </p>
                                </li>
                                <li>
                                    <p>{description}</p>
                                </li>

                            </ul>
                        </div>

                    </div>


                </div>


            </div>

        </>




    )
}
export default CardPost;