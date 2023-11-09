import './index.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

export default function News(prop) {
    const { t } = useTranslation();
    return (
        <section className='home-news'>
            <h2>{t("news")}</h2>
            {prop.news && prop.news.length !== 0 && <Swiper
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
                                            <h4>{news.title}</h4>
                                            <span>{news.releasedTime}</span>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        )
                    })}
                </div>
                <div className='buttons-wrapper'>
                    <div className="swiper-button-prev custom-button"><span>&#8592;</span>{t("prev")}</div>
                    <div className="swiper-button-next custom-button">{t("next")}<span>&#8594;</span></div>
                </div>
            </Swiper>}
        </section>
    )
}
