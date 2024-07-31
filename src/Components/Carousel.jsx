import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import agenda from '/assets/Images/agenda.png'
import post from '/assets/Images/post.png'


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
            <h1>Wat content</h1>
            <Slider {...settings}>
                <img src={agenda}/>
                <img height={550} src={post}/>                
            </Slider>
        </div>
    )
}