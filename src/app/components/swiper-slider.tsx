"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import styles from "./style.module.css";

const MySwiperComponent = ({ path, movies }: any) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      style={{ overflow: "visible" }}
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {movies.map((mov: any) => (
        <SwiperSlide key={mov.id}>
          <div className="w-fit mx-auto">
            <div className="flex items-center relative">
              <Image
                loading="lazy"
                width={1000}
                height={200}
                className={`absolute top-0 blur-2xl scale-110 ${styles.animationSlider}`}
                src={`${path}${mov?.backdrop_path}`}
                alt="movie cover"
              />
              <Image
                loading="lazy"
                className="relative"
                width={990}
                height={200}
                src={`${path}${mov?.backdrop_path}`}
                alt="movie cover"
              />
              <div className="absolute pl-2">
                <div className="bg-gradient-to-tr from-black/50 p-3">
                  <h2 className="font-bold text-2xl">{mov?.title}</h2>
                  <p>{mov?.overview.slice(0, 100)}...</p>
                  <h4>{mov?.vote_average?.toFixed(1)}</h4>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MySwiperComponent;
