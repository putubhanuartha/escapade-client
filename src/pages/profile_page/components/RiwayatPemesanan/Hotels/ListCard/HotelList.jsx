import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { HotelDetail } from "../DetailPemesanan/HotelDetail";
export const HotelList = () => {
	const [showDetail, setshowDetail] = useState(false);
	return (
		<div className="bg-[rgba(255,255,255,0.5)] rounded-lg py-5 px-10">
			{showDetail ? (
				<HotelDetail
					showDetail={showDetail}
					setshowDetail={setshowDetail}
				/>
			) : null}
			<div className="flex justify-between">
				<div className="flex flex-col justify-between">
					<div className="flex flex-col gap-y-2">
						<h6 className="text-2xl font-semibold">Bali Hotel</h6>
						<span className="flex w-36 justify-between">
							<p className="font-semibold">Open</p>
							<p className="font-semibold">04.30</p>
						</span>
						<p className="font-semibold">Jl Ahmad Yani, Bali, Indonesia</p>
					</div>
					<div>
						<p className="font-semibold">Check-in : 21-05-2040</p>
						<p className="font-semibold">Check-out : 24-05-2040</p>
					</div>
				</div>
				<div>
					<img
						src="/hotel/bali.png"
						alt="hotel"
						className="h-36 w-36"
					/>
					<span className="flex items-center">
						<AiFillStar color="gold" />
						<AiFillStar color="gold" />
						<AiFillStar color="gold" />
						<AiFillStar color="gold" />
					</span>
				</div>
			</div>
			<div className="flex items-center gap-x-8 mt-4">
				<button
					onClick={() => {
						setshowDetail(!showDetail);
					}}
					className="px-7 py-1 bg-purple-700 text-white rounded-full"
				>
					Details
				</button>
				<button className="px-7 py-1 bg-purple-700 text-white rounded-full">
					Invoice
				</button>
				<button className="px-7 py-1 bg-purple-700 text-white rounded-full">
					Review
				</button>
			</div>
		</div>
	);
};
