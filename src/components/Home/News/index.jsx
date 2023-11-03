import './index.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';


export default function News(prop) {
    return (
        <section className='home-news'>
            <h2>Xəbərlər</h2>
            {prop.news && prop.news.length !== 0 &&  <Swiper
                loop={true}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[Navigation]}
                className="mySwiper"
                slidesPerView={1}
                spaceBetween={5}
                breakpoints={{
                    1024: { slidesPerView: 3 }
                }}
            >
                <div className="home-news-card-container">
                    {prop.news.map((news) => {
                        return (
                            <SwiperSlide key={news.id}>
                                <Link to={`/news/?${news.id}`}>
                                    <div className="home-news-card">
                                        <div className="img-wrapper">
                                            <img src={require(`../../../images/news/${news.img}`)} alt="news" />
                                            <h3>{news.title}</h3>
                                            <span>{news.releasedTime}</span>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        )
                    })}
                </div>
                <div className="swiper-button-prev custom-button"><span>&#8592;</span>geri</div>
                <div className="swiper-button-next custom-button">irəli<span>&#8594;</span></div>
            </Swiper>}
        </section>
    )
}
