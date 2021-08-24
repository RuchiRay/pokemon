import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import "../styles/slider.css";
import { useGlobalContext } from "../context";

SwiperCore.use([Pagination, Navigation]);
export const Slider = () => {
  const { featured } = useGlobalContext();
      
  return (
    <div className="pok-slider">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {featured.map((item) => {
          const { ability, bex, h, id, image, nam, w } = item;
          return (
            <SwiperSlide key={id}>
              <div className="pokemon">
                <div className="upper-wrapper">
                  <div className="upper">
                    <div className="image">
                      <img src={image} alt="" />
                    </div>
                    <button className="name-btn">{nam}</button>
                    
                  </div>
                </div>
                <div className="lower">
                  <div className="ability">
                    <p>Ability </p>
                    {ability.map((item,index) => {
                      return <p key={index} className="ability-btn">{item}</p>;
                    })}
                  </div>
                  <div className="bex">
                    <p>Base-experience </p>
                    <p className="ability-btn">{bex}</p>
                  </div>
                  <div className="h-w">
                    <div className="height">
                      <span>Height</span>
                      <p className="ability-btn">{h}</p>
                    </div>
                    <div className="weight">
                      <span>Weight</span>
                      <p className="ability-btn">{w}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
