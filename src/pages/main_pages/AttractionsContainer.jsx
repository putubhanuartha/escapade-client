import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/swiper.css";
import { Pagination, Navigation } from "swiper";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { attractionsData } from "../../model/attractionsData";
import WideCard from "../../components/WideCard";

export default function AttractionsContainer() {
	const refPrev = useRef(null);
	const refNext = useRef(null);
	useEffect(() => {
		const it = setInterval(() => {
			refNext.current.click();
		}, 3000);
		return () => {
			clearInterval(it);
		};
	}, []);
	return (
		<div className="container mx-auto py-7">
			<div>
				<h2 className="font-semibold text-xl lg:text-start font-poppins text-center md:text-3xl lg:text-3xl">
					More Attractions
				</h2>
				<p className="font-normal text-sm md:text-lg lg:text-start lg:text-xl font-poppins text-center">
					Explore your joy and passion
				</p>
			</div>
			<div
				id="card_container"
				className="relative mx-auto mt-7"
			>
				<Swiper
					speed={1500}
					slidesPerGroup={1}
					slidesPerView={1}
					spaceBetween={30}
					loop={true}
					pagination={{
						clickable: true,
					}}
					navigation={{
						prevEl: refPrev.current,
						nextEl: refNext.current,
					}}
					modules={[Pagination, Navigation]}
				>
					{attractionsData.map((el, index) => {
						return (
							<SwiperSlide key={el.id}>
								<WideCard
									url={el.url}
									title={el.title}
								/>
							</SwiperSlide>
						);
					})}
				</Swiper>
				<button
					ref={refPrev}
					className="-left-5 top-[50%] bg-white  rounded-full p-4 -translate-y-[50%] absolute z-30 shadow-[0px_0px_15px_2px_rgba(0,0,0,0.2)]"
				>
					<AiFillCaretLeft />
				</button>
				<button
					ref={refNext}
					className="-right-5 top-[50%] bg-white p-4 rounded-full -translate-y-[50%] absolute z-30 shadow-[0px_0px_15px_2px_rgba(0,0,0,0.2)]"
				>
					<AiFillCaretRight />
				</button>
			</div>
		</div>
	);
}
