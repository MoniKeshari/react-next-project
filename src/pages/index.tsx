import CardData from "@/components/locationcard/card";
import { product, ProductItemData, Variants } from "@/types/hometype";
import ControlledCarousel from "@/components/carousel";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { FilterContext } from "@/components/contextapi";
import ScrollToTopButton from "@/components/scroll/scrollbtn";
import styles from './index.module.scss'
import { useAnimationControls, useScroll } from "framer-motion";





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

    const isBrowser = () => typeof window !== 'undefined';
    const ScrollToTopContainerVariants: Variants = {
        hide: { opacity: 0, y: 100 },
        show: { opacity: 1, y: 0 },
    };
    const { scrollYProgress } = useScroll();
    const controls = useAnimationControls();

    useEffect(() => {
        return scrollYProgress.on('change', (latestValue) => {
            if (latestValue > 0.5) {
                controls.start('show');
            } else {
                controls.start('hide');
            }
        });
    });


    const scrollToTop = () => {
        if (isBrowser()) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        else {
            return;
        }
    }
    return (
        <>
            <div>
                <Head>
                    <title>
                        Home Page
                    </title>
                </Head>
                < ControlledCarousel isLoading={isLoading} />

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
                    <div className={styles.scrollbtn}>
                        <ScrollToTopButton scrollToTop={scrollToTop} ScrollToTopContainerVariants={ScrollToTopContainerVariants} controls={controls} /></div>

                </div>


            </div>
        </>

    );
};
export default Home;
