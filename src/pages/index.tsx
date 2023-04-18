import CardData from "@/components/locationcard/card";
import { product, ProductItemData } from "@/types/hometype";
import ControlledCarousel from "@/components/carousel";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { FilterContext } from "@/components/contextapi";
import ScrollToTopButton from "@/components/scroll/scrollbtn";
import styles from './index.module.scss'
import MiniNavBar from "@/components/mininavbar.tsx/mininavbar";

export const getStaticProps = async () => {
    const data = await fetch('https://fakestoreapi.com/products');
    const res = await data.json();
    return {
        props: {
            res: res

        }
    }
}

const Home = ({ res }: { res: product }) => {
    const [isLoading, setLoading] = useState(true);
    const [filteredData, setFilteredData] = useState<ProductItemData[]>([]);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const { filter } = useContext(FilterContext);

    useEffect(() => {
        if (filter === 'all') {
            setFilteredData(res);
        }

        else {
            const data = res.filter((item: ProductItemData) => item.category === filter);
            setFilteredData(data);
        }


    }, [filter, res])

    return (
        <>
            <div>
                <Head>
                    <title>
                        Home Page
                    </title>
                </Head>
                <MiniNavBar res={res} isLoading={isLoading}/>
                < ControlledCarousel isLoading={isLoading} />
             
                <div className={styles.scrollbtn}>
                    <ScrollToTopButton  /></div>
                <div>
                    <section className='py-4 container'>
                        <div className='row justify-content-center'>
                            {filteredData.map((item: ProductItemData) => {

                                return (
                                    <>
                                        <CardData item={item} key={item.id} isLoading={isLoading} />
                                    </>
                                )
                            }
                            )
                            }
                        </div>
                    </section>


                </div>


            </div>
        </>

    );
};
export default Home;
