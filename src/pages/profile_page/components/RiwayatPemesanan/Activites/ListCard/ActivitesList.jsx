import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { ActivitesDetail } from "../DetailPemesanan/ActivitesDetail";
export const ActivitesList = () => {
	const [showDetail, setshowDetail] = useState(false);
	return (
		<div className="bg-[rgba(255,255,255,0.5)] rounded-lg py-5 px-10">
			{showDetail ? (
				<ActivitesDetail
					showDetail={showDetail}
					setshowDetail={setshowDetail}
				/>
			) : null}
			<div className="flex justify-between">
				<div className="flex flex-col justify-between">
					<div className="flex flex-col gap-y-1">
						<h6 className="text-2xl font-semibold capitalize">
							Konser Nonton BTS
						</h6>
						<span className="flex w-36 justify-between mt-2">
							<p className="font-semibold">Open Gate</p>
							<p className="font-semibold">17.30</p>
						</span>
						<span className="flex w-36 justify-between">
							<p className="font-semibold">Close Gate</p>
							<p className="font-semibold">19.30</p>
						</span>
						<p className="font-semibold">Time: 5 Hour</p>
						<p className="font-semibold">Date: 21-04-2021</p>
					</div>
				</div>
				<div>
					<img
						src="/activities/bts.png"
						alt="activites"
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
