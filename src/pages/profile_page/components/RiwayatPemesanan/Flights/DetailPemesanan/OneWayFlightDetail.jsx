import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
const OneWayFlightDetail = ({ showDetail, setshowDetail }) => {
	return (
		<div className="fixed flex w-screen h-screen top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.3)] z-50">
			<div className="m-auto px-7 max-w-4xl w-full py-3 bg-gray-50 rounded-md">
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
					<p className="font-semibold text-xl my-2">Penumpang</p>
					<div className="flex justify-between items-end gap-x-3  ">
						<div className="grid grid-cols-2 gap-x-12">
							<div>
								<p className="text-gray-400">Nama Lengkap</p>
								<p className="font-semibold">Putu Gde Arya Bhanuartha</p>
							</div>
							<div>
								<p className="text-gray-400">Tipe Card</p>
								<p className="font-semibold">VVIP</p>
							</div>
							<div>
								<p className="text-gray-400">No ID</p>
								<p className="font-semibold">217102730123123</p>
							</div>
							<div>
								<p className="text-gray-400">No Seat</p>
								<p className="font-semibold">VVIP/B115</p>
							</div>
						</div>
						<div>
							<img
								src="/flight/citilink.png"
								alt="konser"
								className="w-40 h-28 ml-auto"
							/>
							<div className="flex gap-x-3 font-semibold mt-5">
								<div className="basis-36">
									<p>Flight Time: 1 Hour</p>
									<p>Date of flight: 21-05-2040</p>
								</div>
								<div className="basis-36">
									<p>Jakarta (CGK) 04:30</p>
									<p>Surabaya (SUB) 05:30</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex gap-x-5 items-center mt-5">
					<button className="grow shrink rounded-full bg-purple-800 text-white h-fit py-1">
						Cetak Boarding Pass
					</button>
				</div>
			</div>
		</div>
	);
};

export default OneWayFlightDetail;
