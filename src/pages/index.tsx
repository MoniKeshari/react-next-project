// import Search from "@/components/search";
import styles from  '../pages/home.module.scss';
import CardData from "@/components/locationcard/card";
import LocationArea from "@/components/geolocation/geolocation";

const Home = () => {
    return (
        <>
        <div className={styles.wrapper}>
        <LocationArea />
          {/* <Search /> */}
         
        </div>
        <div >
        <CardData />
        </div>
       
        </>
        
    );
};
export default Home;
