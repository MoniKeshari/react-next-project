import CardData from "@/components/locationcard/card";
import { product, ProductItemData } from "@/types/hometype";
import ControlledCarousel from "@/components/carousel";
import Head from "next/head";
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
    return (
        <>
            <div>
               
                <Head>
                    <title>
                        Home Page
                    </title>
                </Head>
                < ControlledCarousel />

                <div>
                    <section className='py-4 container'>
                        <div className='row justify-content-center'>
                            {res.map((item: ProductItemData) => {
                                return (
                                    <>
                                        <CardData item={item} key={item.id} />
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
