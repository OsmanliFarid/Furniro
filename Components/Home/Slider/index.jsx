import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <div className="bg-[#FCF8F3] mt-10">
      <div className="max-w-[85vw] m-auto">
        <div className="grid grid-cols-[1fr_auto] items-center">
          <div className="">
            <h1 className="font-bold text-4xl w-[422px]">
              50+ Beautiful rooms inspiration
            </h1>
            <p className="text-[#616161] text-md w-[368px] py-6">
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </p>
            <Link
              href="#"
              className="bg-[#B88E2F] p-[10px_35px] text-white inline-block"
            >
              Explore More
            </Link>
          </div>

          <div className="w-[818px] ">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={10}
              slidesPerView={1}
            >
              <SwiperSlide>
                <img
                  src="/images/Furniture.png"
                  alt="slide1"
                  className="select-none"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/Furniture2.png"
                  alt="slide2"
                  className="select-none"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/Furniture3.png"
                  alt="slide3"
                  className="select-none"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
