import {
    ShimmerThumbnail,
} from "react-shimmer-effects";
const CarouselShimmer = () => {
    return (
        <>
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
               <ShimmerThumbnail height={500} />
            </div>
        </>
    )
}
export default CarouselShimmer;