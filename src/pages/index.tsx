// import Search from "@/components/search";
import CardData from "@/components/locationcard/card";
// import LocationArea from "@/components/geolocation/geolocation";
// import MyCarousel from "@/components/carousel";
import styles from  './index.module.scss';
const Home = () => {
    return (
        <>
        <div className={styles.wrapper}>
 {/* <LocationArea /> */}
            {/* <Search /> */}
           {/* < MyCarousel /> */}
           <CardData />
        </div>
           
           
        </>

    );
};
export default Home;
