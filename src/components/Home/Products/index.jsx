 import "./index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";


export default function Products(prop) {

  return (
    <section className="products-home">
      <h2 className="products-h2">Məhsullar</h2>
      {prop.products && prop.products.length !== 0 && <Swiper
        effect={"coverflow"}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation, EffectCoverflow, Autoplay]}
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: false,
          zoomedSlideClass: "active",
          maxRatio: 15,
          scale: 0.9,
        }}
        breakpoints={{
          1440: { slidesPerView: 5 }
        }}
      >
        <div>
          {prop.products.map((item) => (
            <SwiperSlide key={item.id}>
              <div>
                <img
                  className="img-slide"
                  src={require(`../../../images/home/${item.img}`)}
                  alt={item.name}
                />
                <div className="text-wrapper">
                  <h3>{item.name}</h3>
                  <p>Sort: {item.sort}</p>
                  <p>Alcohol: {item.alcohol}</p>
                  <Link to={'/products?searching'}><button onClick={() => { prop.handleSetClickedPId && prop.handleSetClickedPId(item.id) }}>Ətraflı</button></Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>}
    </section>
  );
}
