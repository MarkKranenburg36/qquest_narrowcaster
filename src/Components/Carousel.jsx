import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import dummyContent1 from '/assets/Images/dummyContent1.png';
import dummyContent2 from '/assets/Images/dummyContent2.png';
import dummyContent3 from '/assets/Images/dummyContent3.png';
import Algemeen from "./Algemeen";



export const Carousel = () => {
    const settings = {
        dots: false,
        Infinite: true,
        arrows: false,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 60 * 1000 * 5
    }

    return (
        <div className="widget middelCarousel">
            <h1>Uitgelicht</h1>
            <Slider {...settings}>
                <Algemeen img={dummyContent1} titel="Collega 1 op de spotlight" info="Hoi ik ben vasilis. ben ik fjdkjfkdf"/>
                <Algemeen img={dummyContent2} titel="Collega 2 op de spotlight" info="Hoi ik ben Guus. ben ik fjdkjfkdf"/>
                <Algemeen img={dummyContent3} titel="Collega 2 op de spotlight" info="Hoi ik ben Guus. ben ik fjdkjfkdf"/>
            </Slider>
        </div>
    )
}