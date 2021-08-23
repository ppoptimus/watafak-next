import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.min.css"
import "swiper/components/effect-cube/effect-cube.min.css"
import SwiperCore, { EffectCube, Pagination } from "swiper/core"
import Image from "next/image"
import pgslot1 from "../public/img/pgslot1.jpg"
import pgslot2 from "../public/img/pgslot2.jpg"
import pgslot3 from "../public/img/pgslot3.jpg"
import pgslot4 from "../public/img/pgslot4.jpg"
import pgslot5 from "../public/img/pgslot5.jpg"
import pgslot6 from "../public/img/pgslot6.jpg"
import pgslot7 from "../public/img/pgslot7.jpg"
import pgslot8 from "../public/img/pgslot8.jpg"
import pgslot9 from "../public/img/pgslot9.jpg"
import pgslot10 from "../public/img/pgslot10.jpg"
SwiperCore.use([EffectCube, Pagination])
export default function Cube() {
	return (
		<>
			<Swiper
				effect={"cube"}
				grabCursor={true}
				cubeEffect={{
					shadow: true,
					slideShadows: true,
					shadowOffset: 20,
					shadowScale: 0.94,
				}}
				pagination={true}
                // style={{width:"281px", height:"376px", zIndex:"999"}}
				className='mySwiper w-3/4 h-auto'>
				<SwiperSlide>
					<Image src={pgslot1} className="w-full h-auto" alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={pgslot2} className="w-full h-auto" alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={pgslot3} className="w-full h-auto" alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={pgslot4} className="w-full h-auto" alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={pgslot5} className="w-full h-auto" alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={pgslot6} className="w-full h-auto" alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={pgslot7} className="w-full h-auto" alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={pgslot8} className="w-full h-auto" alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={pgslot9} className="w-full h-auto" alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={pgslot10} className="w-full h-auto" alt='' />
				</SwiperSlide>
			</Swiper>
		</>
	)
}
