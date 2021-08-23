import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.min.css"
import "swiper/components/effect-cube/effect-cube.min.css"
import SwiperCore, { EffectCube, Autoplay } from "swiper/core"
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
import pgslot11 from "../public/img/pgslot11.jpg"
import pgslot12 from "../public/img/pgslot12.jpg"
import pgslot13 from "../public/img/pgslot13.jpg"
import pgslot14 from "../public/img/pgslot14.jpg"
import pgslot15 from "../public/img/pgslot15.jpg"
import pgslot16 from "../public/img/pgslot16.jpg"
import pgslot17 from "../public/img/pgslot17.jpg"
import pgslot18 from "../public/img/pgslot18.jpg"
import pgslot19 from "../public/img/pgslot19.jpg"
import pgslot20 from "../public/img/pgslot20.jpg"
import pgslot21 from "../public/img/pgslot21.jpg"
import pgslot22 from "../public/img/pgslot22.jpg"

import pgslot24 from "../public/img/pgslot24.jpg"
import pgslot25 from "../public/img/pgslot25.jpg"
import pgslot26 from "../public/img/pgslot26.jpg"

SwiperCore.use([Autoplay, EffectCube])
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
                autoplay={{
                    "delay": 500,
                    "disableOnInteraction": false
                  }}
				className='mySwiper w-3/4 h-auto'>
				<SwiperSlide>
					<Image src={pgslot1} className="w-full h-auto" alt='pg slot' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={pgslot2} className="w-full h-auto" alt='pg slot' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={pgslot3} className="w-full h-auto" alt='pg slot' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={pgslot4} className="w-full h-auto" alt='pg slot' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={pgslot5} className="w-full h-auto" alt='pg slot' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={pgslot6} className="w-full h-auto" alt='pg slot' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={pgslot7} className="w-full h-auto" alt='pg slot' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={pgslot8} className="w-full h-auto" alt='pg slot' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={pgslot9} className="w-full h-auto" alt='pg slot' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={pgslot10} className="w-full h-auto" alt='pg slot' />
				</SwiperSlide>
                <SwiperSlide>
					<Image src={pgslot11} className="w-full h-auto" alt='pg slot' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={pgslot12} className="w-full h-auto" alt='pg slot' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={pgslot13} className="w-full h-auto" alt='pg slot' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={pgslot14} className="w-full h-auto" alt='pg slot' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={pgslot15} className="w-full h-auto" alt='pg slot' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={pgslot16} className="w-full h-auto" alt='pg slot' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={pgslot17} className="w-full h-auto" alt='pg slot' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={pgslot18} className="w-full h-auto" alt='pg slot' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={pgslot19} className="w-full h-auto" alt='pg slot' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={pgslot20} className="w-full h-auto" alt='pg slot' />
				</SwiperSlide>
                <SwiperSlide>
					<Image src={pgslot21} className="w-full h-auto" alt='pg slot' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={pgslot22} className="w-full h-auto" alt='pg slot' />
				</SwiperSlide>
				
				<SwiperSlide>
					<Image src={pgslot24} className="w-full h-auto" alt='pg slot' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={pgslot25} className="w-full h-auto" alt='pg slot' />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={pgslot26} className="w-full h-auto" alt='pg slot' />
				</SwiperSlide>
			</Swiper>
		</>
	)
}
