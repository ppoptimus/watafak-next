import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import css from "./styles/slide.module.css"

import Image from "next/image"
import promotion11 from "../public/img/slot01.jpg"
import promotion1 from "../public/img/sport01.jpg"
import promotion2 from "../public/img/birthday.png"
import promotion3 from "../public/img/ag01.jpg"
import promotion4 from "../public/img/ag02.jpg"
import promotion5 from "../public/img/slot02.jpg"
import promotion6 from "../public/img/slot03.jpg"

import SwiperCore, { EffectCoverflow, Autoplay } from "swiper"

// install Swiper modules
SwiperCore.use([EffectCoverflow, Autoplay])

export default function Slidecard() {
	return (
		<div>
			<div className='flex justify-center mt-16'>
				<h1 className='font-bold text-2xl'>Promotion</h1>
			</div>
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={"auto"}
				spaceBetween={1}
				coverflowEffect={{
					rotate: 60,
					stretch: 0,
					depth: 50,
					modifier: 1,
					slideShadows: true,
				}}
				autoplay={{
					delay: 2000,
					disableOnInteraction: false,
				}}
				loop={true}
				className={css.swiper}>
				<SwiperSlide className={css.swiperslide}>
					<Image src={promotion11} width={500} height={500} alt='pg slot promotion' />
				</SwiperSlide>
				<SwiperSlide className={css.swiperslide}>
					<Image src={promotion1} width={500} height={500} className='lazyload img-fuild' alt='pg slot promotion' />
				</SwiperSlide>
				<SwiperSlide className={css.swiperslide}>
					<Image src={promotion2} width={500} height={500} className='lazyload img-fuild' alt='pg slot promotion' />
				</SwiperSlide>
				<SwiperSlide className={css.swiperslide}>
					<Image src={promotion3} width={500} height={500} className='lazyload img-fuild' alt='pg slot promotion' />
				</SwiperSlide>
				<SwiperSlide className={css.swiperslide}>
					<Image src={promotion4} width={500} height={500} className='lazyload img-fuild' alt='pg slot promotion' />
				</SwiperSlide>
				<SwiperSlide className={css.swiperslide}>
					<Image src={promotion5} width={500} height={500} className='lazyload img-fuild' alt='pg slot promotion' />
				</SwiperSlide>
				<SwiperSlide className={css.swiperslide}>
					<Image src={promotion6} width={500} height={500} className='lazyload img-fuild' alt='pg slot promotion' />
				</SwiperSlide>
			</Swiper>
		</div>
	)
}
