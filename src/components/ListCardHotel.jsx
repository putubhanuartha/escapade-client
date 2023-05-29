import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { BsFillPinFill } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BiBed } from "react-icons/bi";
function ListCardHotel({hotel}) {
	return (
		<div className="flex gap-x-3 rounded-md border-[0.5px] border-slate-300 bg-white p-2 lg:py-2.5 lg:px-3 max-w-3xl w-full">
			<img
				src={hotel.hotel.image}
				alt="gambar hotel"
				className="w-32 object-cover rounded-md"
			/>
			<div className="flex flex-col w-full">
				<div>
					<div className="flex items-center">
						<h3 className="font-semibold text-xl lg:text-2xl">{hotel.hotel.name}</h3>
						<div className="flex item-center">
							<AiTwotoneStar color="gold" />
							<AiTwotoneStar color="gold" />
							<AiTwotoneStar color="gold" />
							<AiTwotoneStar color="gold" />
							<AiTwotoneStar color="gold" />
						</div>
					</div>
					<div className="flex items-center">
						<BsFillPinFill />
						<p className="capitalize lg:text-md">{hotel.hotel.location}</p>
					</div>
				</div>
				<div >
					<div>
						<div className="flex items-center gap-x-1">
							<p className="font-semibold lg:text-lg">{hotel.room.type}</p>
							<BsPerson />
							<BsPerson />
							<BiBed />
						</div>
						<p className="text-red-600">Sisa 1 kamar</p>
					</div>
					<div className="flex flex-col h-20 gap-x-1 gap-y-2 sm:gap-y-0 sm:flex-row sm:justify-between">
						<p className="font-semibold text-xl	 lg:text-2xl">Rp. {hotel.room.price}</p>
						<button type="button" className="text-white block h-fit text-sm w-fit sm:self-end  rounded-md bg-cyan-800 px-2 py-2">Cek Ketersediaan</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ListCardHotel;
