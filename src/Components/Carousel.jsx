import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import agenda from '/assets/Images/agenda.png'
import post from '/assets/Images/post.png'
import { useEffect } from "react";
import { useState } from "react";


export const Carousel = () => {
    const [newsTitle, setNewsTitle] = useState('');

    useEffect(() => {
        // news API key: 7d1ff2f5cbf24cf0a4dddb07cd090e3d
        const newsApiUrl = 'https://newsapi.org/v2/top-headlines?' +
            'country=nl&' +
            'category=technology&' +
            'apiKey=7d1ff2f5cbf24cf0a4dddb07cd090e3d';

        const req = new Request(newsApiUrl);
        fetch(req)
            .then(response => response.json())
            .then(data => {
                if (data.articles && data.articles.length > 0) {
                    setNewsTitle(data.articles[0].title);
                }
                console.log(data.articles);
            })
            .catch(function (error) {
                console.error('Something went wrong fetching newsAPI', error);
            });
    }, []);

    const settings = {
        dots: false,
        Infinite: true,
        arrows: false,
        speed: 2000,
        autoplay: true,
        // autoplaySpeed: 60 * 1000 * 5
        autoplaySpeed: 100
    }

    return (
        <div className="widget middelCarousel">
            <h1>Wat content</h1>
            <Slider {...settings}>
                <img height={550} src={post} />
                <div>
                    <h1>{newsTitle}</h1>
                </div>
            </Slider>
        </div>
    )
}