import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import { Pagination, Navigation } from "swiper";
export default function Card(props) {
	return (
		<div className="w-72 m-auto rounded-lg overflow-clip shadow-[0px_0px_7px_2px_rgba(0,0,0,0.2)] pb-6">
			<div className="relative">
				<img
					src={props.url}
					alt={props.country}
					className="h-64 object-cover w-full"
				/>
				<h3 className="text-cold font-poppins text-xl rounded-tr-lg absolute left-0 bottom-0 w-fit py-1 px-3 bg-[rgba(0,0,0,0.5)]">{props.country}</h3>
			</div>
			<div className="px-3">
				<h3 className="text-lg font-poppins">{props.city}</h3>
				<p className="font-poppins text-sm">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
					laudantium.
				</p>
			</div>
		</div>
	);
}
