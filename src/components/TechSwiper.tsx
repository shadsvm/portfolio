import React, { useRef, useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-fade"

import { FaReact, FaVuejs, FaSass } from "react-icons/fa"
import {
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiFirebase,
  SiPrisma,
  SiMongodb,
} from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"

const TechSwiper = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      effect={"fade"}
      fadeEffect={{
        crossFade: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, EffectFade]}
      className="flex items-center justify-start text-5xl"
    >
      <SwiperSlide>
        <div className="z-50 flex gap-8 ">
          <SiTypescript className="text-sky-500" />
          <FaVuejs className="text-green-500" />
          <FaReact className="text-blue-400" />
          <TbBrandNextjs className="text-white" />
          <SiTailwindcss className="text-sky-500" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="z-40 flex gap-8 ">
          <FaSass className="text-pink-500" />
          <SiRedux className="text-purple-400" />
          <SiPrisma className="text-white" />
          <SiFirebase className="text-amber-500" />
          <SiMongodb className="text-emerald-500" />
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default TechSwiper
