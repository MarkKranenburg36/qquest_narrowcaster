import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export const Carousel = () => {

    const settings = {
        dots: false,
        Infinite: true,
        arrows: false,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 5000
    }

    return (
        <div className="widget carousel">
            <h1>Carousel</h1>
            <Slider {...settings}>
                {<p>1</p>}
                {<p>2</p>}
            </Slider>
        </div>
    )
}