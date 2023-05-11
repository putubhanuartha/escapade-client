import React, { useState } from "react";
import "../hotel_search_page/styles/color.css";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { FaPlane } from "react-icons/fa";
import { BiDownArrow } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { MdAirlineSeatLegroomExtra } from "react-icons/md";
import { CiPlane } from "react-icons/ci";
import ListCardFlight from "../../components/ListCardFlight";
const flightPlan = [{ 0: "Pulang - Pergi" }, { 1: "Satu Arah" }];
const classPlan = [{ 0: "Ekonomi" }, { 1: "Bisnis" }, { 2: "Eksekutif" }];
function FlightSearchPage() {
	return (
		<div className="cucumbar-water">
			<div className="h-80 lg:h-56"></div>
			<div className="relative rounded-t-[4rem] bg-gray-100">
				<SearchBarFlight />
				<div className="container mx-auto pt-16">
					<p className="bg-cyan-800 max-w-3xl w-full py-2 text-white mx-auto px-3 font-semibold mb-2 rounded-md">
						1. Berangkat ke surabaya
					</p>
					<div className="flex flex-col gap-y-6 items-center">
						<ListCardFlight />
						<ListCardFlight />
						<ListCardFlight />
						<ListCardFlight />
						<ListCardFlight />
						<ListCardFlight />
					</div>
				</div>
			</div>
		</div>
	);
}
function SearchBarFlight() {
	const [indexDropdown, setIndexDropdown] = useState(-1);
	const [wayPlanFlight, setWayPlanFlight] = useState(0);
	const [classPlanFlight, setClassPlanFlight] = useState(0);
	const [dayRangeFrom, setDayRangeFrom] = useState(new Date());
	const [dayRangeTo, setDayRangeTo] = useState(new Date());
	return (
		<div className="absolute left-[50%] -translate-x-[50%] bg-white shadow-xl rounded-lg -top-56 lg:-top-32 px-3 py-2">
			<form action="/search-flight">
				<div className="flex items-center gap-4">
					<div className="relative">
						<button
							type="button"
							className="flex items-center gap-1"
							onClick={() => {
								indexDropdown == 0 ? setIndexDropdown(-1) : setIndexDropdown(0);
							}}
						>
							<FaPlane />
							<p className="truncate max-w-[50px] sm:max-w-none">
								{flightPlan[wayPlanFlight][wayPlanFlight]}
							</p>
							<BiDownArrow size={14} />
						</button>
						<PlanWayFlight
							setWayPlanFlight={setWayPlanFlight}
							indexDropdown={indexDropdown}
							setIndexDropdown={setIndexDropdown}
						/>
					</div>
					<div className="relative">
						<button
							onClick={() => {
								indexDropdown == 1 ? setIndexDropdown(-1) : setIndexDropdown(1);
							}}
							type="button"
							className="flex items-center gap-1"
						>
							<BsFillPersonFill />
							<p className="truncate max-w-[50px] sm:max-w-none">1 Dewasa</p>

							<BiDownArrow size={14} />
						</button>
						<PlanPasengerFlight
							indexDropdown={indexDropdown}
							setIndexDropdown={setIndexDropdown}
						/>
					</div>
					<div className="relative">
						<button
							type="button"
							className="flex items-center gap-1"
							onClick={() => {
								indexDropdown == 2 ? setIndexDropdown(-1) : setIndexDropdown(2);
							}}
						>
							<MdAirlineSeatLegroomExtra />
							<p className="truncate max-w-[50px] sm:max-w-none">
								{classPlan[classPlanFlight][classPlanFlight]}
							</p>
							<BiDownArrow size={14} />
						</button>
						<PlanClassFlight
							indexDropdown={indexDropdown}
							setIndexDropdown={setIndexDropdown}
							setClassPlanFlight={setClassPlanFlight}
						/>
					</div>
				</div>
				<div className="flex items-center mt-4 gap-2 flex-nowrap relative z-30">
					<input
						type="text"
						placeholder="kota atau bandara"
						className="px-3 py-3 bg-slate-200 rounded-md block w-0 flex-1"
					/>

					<i className="absolute left-[50%] -translate-x-[55%] bg-white rounded-full">
						<CiPlane size={30} />
					</i>
					<input
						type="text"
						placeholder="kota atau bandara"
						className="px-3 py-3 bg-slate-200 rounded-md block w-0 flex-1"
					/>
				</div>
				<div className="flex items-end justify-between gap-2 mt-3 flex-wrap">
					<div className="flex gap-2 items-center">
						<div>
							<p className="font-poppins ml-2">From</p>
							<DatePicker
								selected={dayRangeFrom}
								onChange={(date) => setDayRangeFrom(date)}
							/>
						</div>
						<div>
							<p className="font-poppins ml-2">To</p>
							<DatePicker
								selected={dayRangeTo}
								onChange={(date) => setDayRangeTo(date)}
							/>
						</div>
					</div>
					<button
						type="submit"
						className="bg-cyan-800 py-2 text-white px-4 font-semibold rounded-sm ml-auto hover:-translate-y-0.5 hover:shadow-[0px_0px_3px_2px_rgba(0,0,0,0.2)] active:translate-y-0 active:shadow-none transition-all duration-200"
					>
						Cari
					</button>
				</div>
			</form>
		</div>
	);
}
function PlanWayFlight({ indexDropdown, setIndexDropdown, setWayPlanFlight }) {
	return (
		<ul
			className={`absolute z-40 bg-white rounded-sm py-1 shadow-[0px_0px_5px_2px_rgba(0,0,0,0.2)] -right-10 left-0 mt-2 ${
				indexDropdown == 0 || "hidden"
			}`}
		>
			{flightPlan.map((el, index) => {
				return (
					<li
						key={index}
						className="hover:bg-slate-200 transition-all duration-300 px-2"
					>
						<button
							onClick={() => {
								setIndexDropdown(-1);
								setWayPlanFlight(index);
							}}
							type="button"
							className="truncate"
						>
							{el[index]}
						</button>
					</li>
				);
			})}
		</ul>
	);
}
function PlanPasengerFlight({ indexDropdown, setIndexDropdown }) {
	return (
		<ul
			className={`absolute px-2 z-40 bg-white rounded-sm py-2 shadow-[0px_0px_5px_2px_rgba(0,0,0,0.2)] -right-24 -left-28 mt-2 ${
				indexDropdown === 1 || "hidden"
			}`}
		>
			<p className="text-sm mb-2 font-semibold">Pilih penumpang</p>
			<div className="flex flex-col gap-y-2">
				<li className="flex items-center justify-between">
					<p>Dewasa</p>
					<input
						type="number"
						className="w-12 py-1 outline-none border-none caret-transparent"
						min={1}
						defaultValue={1}
						max={10}
						placeholder="number"
						onKeyDown={(event) => event.preventDefault()}
					/>
				</li>
				<li className="flex items-center justify-between">
					<div>
						<p>Anak</p>
						<p className="text-xs">(2-11 tahun)</p>
					</div>
					<input
						type="number"
						className="w-12 py-1 outline-none border-none caret-transparent"
						min={0}
						defaultValue={0}
						max={10}
						placeholder="number"
						onKeyDown={(event) => event.preventDefault()}
					/>
				</li>
				<li className="flex items-center justify-between">
					<div>
						<p>Bayi Dipangku </p>
						<p className="text-xs">(14hari - 1 tahun)</p>
					</div>
					<input
						type="number"
						className="w-12 py-1 outline-none border-none caret-transparent"
						min={0}
						defaultValue={0}
						max={10}
						placeholder="number"
						onKeyDown={(event) => event.preventDefault()}
					/>
				</li>
			</div>
			<button
				type="button"
				onClick={() => setIndexDropdown(-1)}
				className="hover:text-black text-cold hover:bg-slate-300 rounded-sm mt-2 ml-auto block px-2 py-0.5 bg-cyan-600 hover:shadow-lg transition-all duration-300"
			>
				Selesai
			</button>
		</ul>
	);
}
function PlanClassFlight({
	indexDropdown,
	setIndexDropdown,
	setClassPlanFlight,
}) {
	return (
		<ul
			className={`absolute z-40 bg-white rounded-sm py-1 shadow-[0px_0px_5px_2px_rgba(0,0,0,0.2)] -right-10 left-0 mt-2 ${
				indexDropdown === 2 || "hidden"
			}`}
		>
			{classPlan.map((el, index) => {
				return (
					<li
						key={index}
						className="hover:bg-slate-200 transition-all duration-300 px-2"
					>
						<button
							onClick={() => {
								setIndexDropdown(-1);
								setClassPlanFlight(index);
							}}
							type="button"
							className="truncate"
						>
							{el[index]}
						</button>
					</li>
				);
			})}
		</ul>
	);
}
export default FlightSearchPage;
