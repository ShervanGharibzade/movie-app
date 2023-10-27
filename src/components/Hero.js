"use client";

import "../app/globals.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";

export default function Hero({ movies }) {
  const path = "https://image.tmdb.org/t/p/w1280";

  const backgroundBluer = movies?.map((mov) => (
    <SwiperSlide key={mov.id} className="w-fit blur-lg">
      <Image
        src={`${path}${mov.backdrop_path}`}
        alt={mov.title}
        className="rounded-2xl w-[1000px] h-[550px]"
      />
    </SwiperSlide>
  ));

  console.log(movies);

  const content = movies?.map((mov) => (
    <SwiperSlide key={mov.id} className="w-fit">
      <Link href={`/movie/${mov.id}`}>
        <Image
          src={`${path}${mov.backdrop_path}`}
          alt={mov.title}
          className="rounded-2xl w-[1000px] h-[550px]"
        />
        <div className="absolute text-center bg-gradient-to-r from-red-800/0 via-black/80 to-blue-800/0 w-full py-2 px-5 bottom-10 text-yellow-400 drop-shadow-5xl">
          <h2 className="text-4xl text font-bold pb-2">{mov.title}</h2>
          <span className="font-bold text-white italic">
            popularity: {String(mov.vote_average).substring(0, 4)}
          </span>
        </div>
      </Link>
    </SwiperSlide>
  ));
  return (
    <div className="w-[1000px] my-24 mx-auto">
      <Swiper
        spaceBetween={0}
        effect={"fade"}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        style={{
          position: "absolute",
          width: "1100px",
          overflow: "visible",
        }}
        modules={[EffectFade, Autoplay]}>
        {backgroundBluer}
      </Swiper>
      <Swiper
        spaceBetween={0}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}>
        {content}
      </Swiper>
    </div>
  );
}
