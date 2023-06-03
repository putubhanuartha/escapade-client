import React, { useRef } from "react";
import "swiper/swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import destinationData from "../../model/destinationData";
import Card from "../../components/Card";
function CityListComponent() {
	const refPrev = useRef(null);
	const refNext = useRef(null);
	return (
		<>
			<div>
				<h2 className="font-semibold text-lg sm:text-xl lg:text-start font-poppins text-center md:text-2xl">
					Tour and Activity
				</h2>
			</div>
			<div
				id="card_container"
				className="relative max-w-full mx-auto"
			>
				<Swiper
					slidesPerGroup={1}
					slidesPerView={1}
					breakpoints={{
						640: {
							slidesPerGroup: 2,
							slidesPerView: 2,
						},
						1024: {
							slidesPerGroup: 2,
							slidesPerView: 3,
						},
						1536: {
							slidesPerGroup: 2,
							slidesPerView: 4,
						},
					}}
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					navigation={{
						prevEl: refPrev.current,
						nextEl: refNext.current,
					}}
					onBeforeInit={(swiper) => {
						swiper.params.navigation.prevEl = refPrev.current;
						swiper.params.navigation.nextEl = refNext.current;
					}}
					modules={[Pagination, Navigation]}
				>
					{destinationData.map((el, index) => {
						return (
							<SwiperSlide key={index}>
								<Card
									url={el.path}
									country={el.country}
									city={el.city}
								/>
							</SwiperSlide>
						);
					})}
				</Swiper>
				<button
					ref={refPrev}
					className="left-0 top-[50%] bg-white  rounded-full p-4 -translate-y-[50%] absolute z-30 shadow-[0px_0px_15px_2px_rgba(0,0,0,0.2)]"
				>
					<AiFillCaretLeft />
				</button>
				<button
					ref={refNext}
					className="right-0 top-[50%] bg-white p-4 rounded-full -translate-y-[50%] absolute z-30 shadow-[0px_0px_15px_2px_rgba(0,0,0,0.2)]"
				>
					<AiFillCaretRight />
				</button>
			</div>
		</>
	);
}

export default CityListComponent;
