import CardData from "@/components/locationcard/card";
import { product, ProductItemData } from "@/types/hometype";
import ControlledCarousel from "@/components/carousel";
import Head from "next/head";
import { useEffect, useState } from "react";
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

  useEffect(() => {
   
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

    return (
        <>
            <div>
               
                <Head>
                    <title>
                        Home Page
                    </title>
                </Head>
                < ControlledCarousel isLoading={isLoading}/>

                <div>
                    <section className='py-4 container'>
                        <div className='row justify-content-center'>
                            {res.map((item: ProductItemData) => {
                                return (
                                    <>
                                        <CardData item={item} key={item.id} isLoading={isLoading}/>
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
