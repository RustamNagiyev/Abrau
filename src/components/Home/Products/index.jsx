import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, EffectCoverflow, Autoplay,} from "swiper/modules";

import "./index.css";

export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/db.json")
      .then((response) => {
        setData(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <section className="products">
      <h2 className="products-h2">Məhsullar</h2>
      <Swiper
        effect={"coverflow"}
        slidesPerView={5}
        navigation={true}
        modules={[Navigation, EffectCoverflow, Autoplay]}
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 2000,
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
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div>
              <img
                className="img-slide"
                src={require(`../../../images/home/${item.img}`)}
                alt={item.name}
              />
              <h3>{item.name}</h3>
              <p>Sort: {item.sort}</p>
              <p>Alcohol: {item.alcohol}</p>
              <button>Ətraflı</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
