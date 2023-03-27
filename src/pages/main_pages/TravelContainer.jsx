import React, { useRef,  } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import { Pagination, Navigation } from "swiper";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import destinationData from "../../model/destinationData";
import Card from "../../components/card";

export default function TravelContainer() {
	const refPrev = useRef(null);
	const refNext = useRef(null);
	return (
		<div className="container mx-auto py-7">
			<div>
				<h2 className="font-semibold text-xl lg:text-start font-poppins text-center md:text-3xl lg:text-3xl">
					Most Popular Destinations
				</h2>
				<p className="font-normal text-sm md:text-lg lg:text-start lg:text-xl font-poppins text-center">
					Explore point of interest in various places around the world
				</p>
			</div>
			<div
				id="card_container"
				className="relative max-w-full mx-auto mt-7"
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
		</div>
	);
}
