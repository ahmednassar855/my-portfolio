import React from "react";
import { GALLERY } from "../constants";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper/modules"; // Import Autoplay

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Gallery = () => {
  return (
    <div className="">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">My Courses</h1>
        <div className="lg:w-[90%] w-[100%] m-auto ">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            effect={"fade"}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            autoplay={{
              // Add autoplay configuration
              delay: 3000, // Delay between slides in milliseconds
              disableOnInteraction: false, // Allows autoplay to continue after user interactions
            }}
            modules={[Navigation, Autoplay, EffectFade]} // Add Autoplay to modules
            className="mySwiper rounded-md"
          >
            {GALLERY.map((item, index) => (
              <SwiperSlide key={index} className="">
                <img
                  src={item.gallerImage}
                  alt=""
                  className="object-cover rounded-md "
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
