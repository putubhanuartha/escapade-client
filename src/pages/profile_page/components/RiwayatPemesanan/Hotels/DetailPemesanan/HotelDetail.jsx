import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
export const HotelDetail = ({ showDetail, setshowDetail }) => {
	return (
		<div className="fixed flex w-screen h-screen top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.3)] z-50">
			<div className="m-auto px-7 max-w-3xl w-full py-3 bg-gray-50 rounded-md">
				<div className="flex justify-between items-center">
					<p className="font-semibold text-2xl">Detail Pemesanan</p>
					<button
						onClick={() => {
							setshowDetail(!showDetail);
						}}
					>
						<AiOutlineCloseCircle size={30} />
					</button>
				</div>
				<div className="mt-5">
					<p className="font-bold text-2xl">Friday, 26rd May</p>
					<p className="font-semibold text-xl my-2">Taamu Hotel</p>
					<div className="flex justify-between">
						<div className="grid grid-cols-2 gap-x-12">
							<div>
								<p className="text-gray-400">Nama Lengkap</p>
								<p className="font-semibold">Putu Gde Arya Bhanuartha</p>
							</div>
							<div>
								<p className="text-gray-400">Tipe Kamar</p>
								<p className="font-semibold">Eksekutif</p>
							</div>
							<div>
								<p className="text-gray-400">No ID</p>
								<p className="font-semibold">217102730123123</p>
							</div>
							<div>
								<p className="text-gray-400">No Kamar</p>
								<p className="font-semibold">A-12</p>
							</div>
						</div>
						<img
							src="/hotel/bali.png"
							alt="konser"
							className="w-40 h-28"
						/>
					</div>
				</div>
				<div className="flex gap-x-5 items-center mt-5 justify-between">
					<p className="font-semibold basis-36 text-2xl">Date May 21, 2040</p>

					<div className="basis-36">
						<p>Open 04.00 am</p>
						<p>Close 11.00 pm</p>
					</div>
				</div>
			</div>
		</div>
	);
};
