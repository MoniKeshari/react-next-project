// import Search from "@/components/search";
import CardData from "@/components/locationcard/card";
import LocationArea from "@/components/geolocation/geolocation";

const Home = () => {
    return (
        <>
            <LocationArea />
            {/* <Search /> */}
            <div >
                <CardData />
            </div>
        </>

    );
};
export default Home;
