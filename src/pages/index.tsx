import CardData from "@/components/locationcard/card";
import { product, ProductItemData } from "@/types/hometype";
import ControlledCarousel from "@/components/carousel";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "@/ReduxToolkit/createSlice";
export const getStaticProps = async () => {
    const data = await fetch('https://fakestoreapi.com/products');
    const res = await data.json();
    return {
        props: {
            res: res

        }
    }
}
type FilterValue = 'all' | "men's clothing" | 'jewelery' | 'electronics' | "wome's clothing";
const productdata = ["all", "men's Clothing", "Jewelery", "Electronics", "women's clothing"]
const Home = ({ res }: { res: product }) => {
    const [isLoading, setLoading] = useState(true);
    const [filterValue, setFilterValue] = useState<FilterValue>('all'); 
    const [filteredData, setFilteredData] = useState<ProductItemData[]>([]); 
    const dispatch = useDispatch();
  

    useEffect(() => {

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
   
     useEffect(() => {
        if (filterValue === 'all') {
          setFilteredData(res);
        } else {
          const data = res.filter((item: ProductItemData) => item.category === filterValue);
          setFilteredData(data);
        }
      }, [filterValue, res]);


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
                <select value={filterValue} onChange={(e) => setFilterValue(e.target.value as FilterValue)}>
                        {productdata.map((id: any) => {
                            return (
                                <option value={id.toLowerCase()} key={id}>{id}</option>
                            )
                        })}

                    </select>
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
