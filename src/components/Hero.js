"use client";

import '../app/globals.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function Hero({movies}) {
  const path = "https://image.tmdb.org/t/p/w1280"
  
    const content = movies?.map(mov =>(
      
        <SwiperSlide key={mov.id} className='w-fit'>
            <img 
            src={`${path}${mov.backdrop_path}`}
            alt={mov.title}
            className="rounded-2xl w-[1000px] h-[550px]"
            />
            <div className="absolute text-center bg-gradient-to-r from-red-800/0 via-black/80 to-blue-800/0 w-full py-2 px-5 bottom-10 text-yellow-400 drop-shadow-5xl">
              <h2 className="text-4xl text font-bold pb-2">
                {mov.original_title}
              </h2>
              <span className="font-bold text-white italic">
                popularity: {String(mov.popularity).substring(0,4)}
              </span>
            </div>
        </SwiperSlide>
        
    ))
    return (
      <div className='w-[1000px] my-10 mx-auto'>
          <Swiper
          spaceBetween={0}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay:2500,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          >
              {content}
          </Swiper>
      </div>
  )
}
