import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect } from "react";
import { useState } from "react";
import { getNews } from "../API-requests/news-API";
import dummyContent1 from '/assets/Images/dummyContent1.png';
import dummyContent2 from '/assets/Images/dummyContent2.png';
import dummyContent3 from '/assets/Images/dummyContent3.png';



export const Carousel = () => {
    const [newsTitle, setNewsTitle] = useState('');

    const [ newsTest, setNewsTest ] = useState('');

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
                    // console.log(data);
                }
                // console.log(data.articles);
            })
            .catch(function (error) {
                console.error('Something went wrong fetching newsAPI', error);
            });



        // vbUGjupVjZydXbadmM4XM-RcxkEsazHVLWAxiNDcpN-FeN6M

        const fetchNews = async () => {
            try {
                const news = await getNews();
                setNewsTest(news);
                console.log(newsTest);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };
        fetchNews();

    }, []);

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
                <img height={500} src={dummyContent1} />
                <img height={500} src={dummyContent2} />
                <img height={500} src={dummyContent3} />
            </Slider>
        </div>
    )
}