import "./index.css";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './swiper.css';

// import required modules
import { Navigation } from 'swiper/modules';

import awardImg1 from '../../../images/about/awards/1.png';
import awardImg2 from '../../../images/about/awards/2.png';
import awardImg3 from '../../../images/about/awards/3.png';
import awardImg4 from '../../../images/about/awards/4.png';
import awardImg5 from '../../../images/about/awards/5.png';
import awardImg6 from '../../../images/about/awards/6.png';
import awardImg7 from '../../../images/about/awards/7.png';
import awardImg8 from '../../../images/about/awards/8.png';

export default function Awards() {
  const awardsData = [
    {
      img: awardImg1,
      text: [
        "Abrau-Durso",
        "Chardonnay2018 ZNMP"
      ],
      mundusVini: false,
      decanterWorldWineAwards: false
    },
    {
      img: awardImg2,
      text: [
        "Imperial Brut Vintage",
        "2016 1.5 liters"
      ],
      mundusVini: false,
      decanterWorldWineAwards: false
    },
    {
      img: awardImg3,
      text: [
        "Victor Dravigny",
        "Brut Rose 2018"
      ],
      mundusVini: false,
      decanterWorldWineAwards: false
    },
    {
      img: awardImg4,
      text: [
        "Abrau-Durso Cabernet",
        "Sauvignon 2017 ZNMP"
      ],
      mundusVini: false,
      decanterWorldWineAwards: false
    },
    {
      img: awardImg5,
      text: [
        "Brut Dor Blanc'De'",
        "Noir 2018"
      ],
      mundusVini: false,
      decanterWorldWineAwards: false
    },
    {
      img: awardImg6,
      text: [
        "Victor Dravigny",
        "Brut 2017"
      ],
      mundusVini: false,
      decanterWorldWineAwards: false
    },
    {
      img: awardImg1,
      text: [
        "Abrau-Durso",
        "Chardonnay2018 ZNMP"
      ],
      mundusVini: true,
      decanterWorldWineAwards: false
    },
    {
      img: awardImg1,
      text: [
        "Abrau-Durso Cabernet",
        "Sauvignon 2017 ZNMP"
      ],
      mundusVini: true,
      decanterWorldWineAwards: false
    },
    {
      img: awardImg1,
      text: [
        "Imperial Brut Rose",
        "2015"
      ],
      mundusVini: true,
      decanterWorldWineAwards: false
    },
    {
      img: awardImg3,
      text: [
        "Brut Dor Blanc'De'Blanc",
        "2017"
      ],
      mundusVini: true,
      decanterWorldWineAwards: false
    },
    {
      img: awardImg3,
      text: [
        "Brut Dor Blanc'De'Noir",
        "2017"
      ],
      mundusVini: true,
      decanterWorldWineAwards: false
    },
    {
      img: awardImg3,
      text: [
        "Victor Dravigny Brut",
        "Rose 2018"
      ],
      mundusVini: true,
      decanterWorldWineAwards: false
    },
    {
      img: awardImg7,
      text: [
        "Abrau-Durso Chardonnay",
        "2018 ZNMP"
      ],
      mundusVini: false,
      decanterWorldWineAwards: true
    },
    {
      img: awardImg8,
      text: [
        "Victor Dravigny",
        "Brut Rose 2018"
      ],
      mundusVini: false,
      decanterWorldWineAwards: true
    },
    {
      img: awardImg8,
      text: [
        "Victor Dravigny",
        "Extra Brut 2017"
      ],
      mundusVini: false,
      decanterWorldWineAwards: true
    },
    {
      img: awardImg8,
      text: [
        "Winery Vedernikov",
        "Tsimlyansky extra brut 2017"
      ],
      mundusVini: false,
      decanterWorldWineAwards: true
    },
    {
      img: awardImg8,
      text: [
        "Abrau-Durso Chardonnay",
        "2019 ZNMP"
      ],
      mundusVini: false,
      decanterWorldWineAwards: true
    },
    {
      img: awardImg8,
      text: [
        "Imperial Rose Brut",
        "Rose 2013"
      ],
      mundusVini: false,
      decanterWorldWineAwards: true
    }
  ]

  return (
    <section className="about-awards">
      <div className="all-awards-slider">
        <h2>Mükafatlar</h2>
        <Swiper
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
            1440: { slidesPerView: 6 }
          }}
        >
          <div className="awards-container-slider">
            {awardsData.map((award, index) => {
              return (
                <SwiperSlide>
                  <div key={index} className="award-card-slider">
                    <img src={award.img} alt="award" />
                    <div className="text-wrapper">
                      {award.text.map((text, index) => {
                        return (
                          <p key={index}> {text} <br /></p>
                        )
                      })}
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </div>
          <div class="swiper-button-prev custom-button"><span>&#8592;</span>geri</div>
          <div class="swiper-button-next custom-button">irəli<span>&#8594;</span></div>
        </Swiper>
      </div>
      <div className="other-awards">
        <h2>Mükafatlar</h2>
        <div className="mundus-awards">
          <h3>Mundus Vini</h3>
          <div className="awards-container">
            {awardsData.map((award, index) => {
              return award.mundusVini && (
                <div key={index} className="award-card">
                  <img src={award.img} alt="award" />
                  <div className="text-wrapper">
                    {award.text.map((text, index) => {
                      return (
                        <p key={index}> {text} <br /></p>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="decanter-awards">
          <h3>Decanter World Wine Awards</h3>
          <div className="awards-container">
            {awardsData.map((award, index) => {
              return award.decanterWorldWineAwards && (
                <div key={index} className="award-card">
                  <img src={award.img} alt="award" />
                  <div className="text-wrapper">
                    {award.text.map((text, index) => {
                      return (
                        <p key={index}> {text} <br /></p>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section >
  )
}
