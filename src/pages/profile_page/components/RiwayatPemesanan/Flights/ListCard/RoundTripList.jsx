import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { RoundTripDetail } from "../DetailPemesanan/RoundTripDetail";
export const RoundTripList = () => {
	const [showDetail, setshowDetail] = useState(false);
	return (
		<div className="bg-[rgba(255,255,255,0.5)] rounded-lg py-5 px-10">
			{showDetail ? (
				<RoundTripDetail
					showDetail={showDetail}
					setshowDetail={setshowDetail}
				/>
			) : null}
			<div className="flex items-center justify-between">
				<div>
					<h6 className="font-semibold text-2xl">Berangkat</h6>
					<h6 className="font-semibold text-xl mt-3">Citilink</h6>
					<div className="flex flex-col gap-y-0.5">
						<span className="flex gap-x-4 font-semibold w-48 justify-between">
							<p>Jakarta (CGK)</p>
							<p>04.30</p>
						</span>
						<span className="flex w-48 justify-between font-semibold">
							<p>Surabaya (SUB)</p>
							<p>05.30</p>
						</span>
						<p className="font-semibold">Flight Time: 1 Hour</p>
						<p className="font-semibold">Date of flight: 21-04-2040</p>
					</div>
				</div>
				<div>
					<img
						src="/flight/citilink.png"
						alt="airline"
						className="w-40 h-40"
					/>
					<span className="flex items-center">
						<AiFillStar color="gold" />
						<AiFillStar color="gold" />
						<AiFillStar color="gold" />
						<AiFillStar color="gold" />
					</span>
				</div>
			</div>
			<div className="flex items-center justify-between mt-6">
				<div>
					<h6 className="font-semibold text-2xl">Pulang</h6>
					<h6 className="font-semibold text-xl mt-3">Citilink</h6>
					<div className="flex flex-col gap-y-0.5">
						<span className="flex gap-x-4 font-semibold w-48 justify-between">
							<p>Jakarta (CGK)</p>
							<p>04.30</p>
						</span>
						<span className="flex w-48 justify-between font-semibold">
							<p>Surabaya (SUB)</p>
							<p>05.30</p>
						</span>
						<p className="font-semibold">Flight Time: 1 Hour</p>
						<p className="font-semibold">Date of flight: 21-04-2040</p>
					</div>
				</div>
				<div>
					<img
						src="/flight/citilink.png"
						alt="airline"
						className="w-40 h-40"
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
