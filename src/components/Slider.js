import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import "../styles/slider.css";
import { useGlobalContext } from "../context";
import { ImHeart} from "react-icons/im";

SwiperCore.use([Pagination, Navigation]);
export const Slider = () => {
  const { featured ,handleFav } = useGlobalContext();
  console.log(featured);

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
          const { ability, bex, h, id, image, nam, w ,isFav} = item;
          return (
            <SwiperSlide key={id} >
              <div className="pokemon">
                <div className="upper-wrapper">
                  <div className="upper">
                    <div className="image">
                      <img src={image} alt="" />
                    </div>
                    <button className="name-btn">{nam}</button>
                   <div className="fav">
                   <p className='fav-btn'>Add to favourites</p>
                   <ImHeart className={isFav?'red heart':'heart'} onClick={()=>handleFav(id)} />
                   </div>
                  </div>
                </div>
                <div className="lower">
                  <div className="ability">
                    <p>Ability </p>
                    {/* <HiSparkles className="property-icon" /> */}
                    <p className="ability-btn">{ability[0]}</p>
                    <p className="ability-btn">{ability[1]}</p>
                  </div>
                  <div className="bex">
                    <p>Base-experience </p>
                    {/* <ImPower className="property-icon" /> */}
                    <p className="ability-btn">{bex}</p>
                  </div>
                  <div className="h-w">
                    <div className="height">
                      <span>Height</span>
                      {/* <GiBodyHeight className="property-icon" /> */}
                      <p className="ability-btn">{h}</p>
                    </div>
                    <div className="weight">
                      <span>Weight</span>
                      {/* <FaWeight className="property-icon" /> */}
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
