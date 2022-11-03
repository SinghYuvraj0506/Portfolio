import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import "./layout.css";

import { data } from "./data.js";
import { Audio } from "react-loader-spinner";
import { Link } from "react-router-dom";

export const Testimonial = () => {
  return (
    <>
    <Link to="/testimonial/feedback" className="button-contact next-btn">
        SHARE YOUR FEEDBACK
      </Link>
      <div className="main-testimonial">
        <h1 className="text-1">Testimonials</h1>
        <div className="testimonial-cards">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 6,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {data.map((item, key) => (
              <SwiperSlide key={key}>
                <img src={item.image} alt={item.Name} />
                <h3 className="text-2">{item.Name}</h3>
                <p className="details">{item.testimony}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="loaders">
        <Audio height="80" width="80" color="black" ariaLabel="loading" />
      </div>
    </>
  );
};
