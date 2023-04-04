// import Search from "@/components/search";
import CardData from "@/components/locationcard/card";
// import LocationArea from "@/components/geolocation/geolocation";
// import MyCarousel from "@/components/carousel";
import styles from './index.module.scss';
import { useEffect, useState } from "react";
import { CardItem } from "@/types/hometype";
import axios from "axios";
import ShimmerEffect from "./shimmer";
const Home = () => {
    const [isLoading, setLoading] = useState(true);
    const [product, setProduct] = useState<CardItem[]>([]);


    useEffect(() => {
        
        const getdata = async () => {
            try {
                setLoading(true);
                const res = await axios.get('https://fakestoreapi.com/products');
                const response = res.data;
                setProduct(response);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        setTimeout(() => {
            getdata();
        }, 2000);

    }, [])
    return (
        <>
            <div className={styles.wrapper}>
                {/* <LocationArea /> */}
                {/* <Search /> */}
                {/* < MyCarousel /> */}
                <section className='py-4 container'>
                    <div className='row justify-content-center'>
                   
                        {product.map((item: CardItem, index) => {
                            return (
                                <>
                                  {isLoading && (<ShimmerEffect />)}
                                  

                                    <CardData item={item} key={item.id} isLoading={isLoading} />


                                </>
                            )
                        }
                        )
                        }
                    </div>
                </section>
            </div>


        </>

    );
};
export default Home;
