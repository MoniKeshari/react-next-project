import Search from "@/components/search";
import styles from  '../pages/home.module.scss';
import CardData from "@/components/locationcard/card";
const Home = () => {
    return (
        <>
        <div className={styles.wrapper}>
          <Search />
        </div>
         <div>
         <CardData />
     </div>
        </>
        
    );
};
export default Home;
