import "./index.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

export default function Awards(prop) {
  return (
    <section className="about-awards">
      <div className="all-awards-slider">
        <h2>Mükafatlar</h2>
        {prop.awards && <Swiper
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
            {prop.awards.map((award, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="award-card-slider">
                    <img src={require(`../../../images/about/awards/${award.img}`)} alt="award" />
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
          <div className="swiper-button-prev custom-button"><span>&#8592;</span>geri</div>
          <div className="swiper-button-next custom-button">irəli<span>&#8594;</span></div>
        </Swiper>}
      </div>
      <div className="other-awards">
        <h2>Mükafatlar</h2>
        <div className="mundus-awards">
          <h3>Mundus Vini</h3>
          <div className="awards-container">
            {prop.awards && prop.awards.map((award, index) => {
              return award.mundusVini && (
                <div key={index} className="award-card">
                  <img src={require(`../../../images/about/awards/${award.img}`)} alt="award" />
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
            {prop.awards && prop.awards.map((award, index) => {
              return award.decanterWorldWineAwards && (
                <div key={index} className="award-card">
                  <img src={require(`../../../images/about/awards/${award.img}`)} alt="award" />
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
