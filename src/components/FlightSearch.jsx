import React, { useEffect, useState, useRef } from "react";
import { FaPlane } from "react-icons/fa";
import { BiDownArrow } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { MdAirlineSeatLegroomExtra } from "react-icons/md";
import { CiPlane } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import { checkDateWithToDate, checkSingularDate } from "../helpers/checker";
import "react-datepicker/dist/react-datepicker.css";
const flightPlan = [{ 0: "Pulang - Pergi" }, { 1: "Satu Arah" }];
const classPlan = [{ 0: "Ekonomi" }, { 1: "Bisnis" }, { 2: "Eksekutif" }];
function FlightSearch() {
	const navigate = useNavigate();
	const today = new Date();
	const nextDay = new Date(new Date().getTime() + 1000 * 60 * 60 * 24);
	const [indexDropdown, setIndexDropdown] = useState(-1);
	const [wayPlanFlight, setWayPlanFlight] = useState(0);
	const [classPlanFlight, setClassPlanFlight] = useState(0);
	const [dayRangeFrom, setDayRangeFrom] = useState(today);
	const [dayRangeTo, setDayRangeTo] = useState(nextDay);
	const [totalPassenger, setTotalPassenger] = useState(1);
	const cityAirportFrom = useRef(null);
	const cityAirportTo = useRef(null);
	const handleSubmit = (e) => {
		e.preventDefault();

		const flightInputUser = {
			cityAirportFrom: cityAirportFrom.current.value,
			cityAirportTo: cityAirportTo.current.value,
			flightClass: classPlan[classPlanFlight][classPlanFlight],
			dateDeparture: `${dayRangeFrom.getFullYear()}-${dayRangeFrom.getMonth()}-${dayRangeFrom.getDate()}`,
			dateArrival:
				wayPlanFlight == 0
					? `${dayRangeTo.getFullYear()}-${dayRangeTo.getMonth()}-${dayRangeTo.getDate()}`
					: null,
			totalPassenger,
		};

		function checkIsNotEmpty(obj) {
			return obj.cityAirportFrom && obj.cityAirportTo;
		}

		if (checkIsNotEmpty(flightInputUser)) {
			if (
				dayRangeFrom.valueOf() >= dayRangeTo.valueOf() &&
				flightInputUser.dateArrival !== null
			) {
				alert("tanggal pulang dan berangkat harus selisih 1 hari");
			} else {
				navigate("/search-flight", { state: flightInputUser });
			}
		} else {
			alert("isi data dengan lengkap");
		}
	};
	return (
		<form
			action="/search-flight"
			onSubmit={handleSubmit}
		>
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
						<p className="truncate max-w-[50px] sm:max-w-none">
							{totalPassenger} Orang
						</p>

						<BiDownArrow size={14} />
					</button>
					<PlanPasengerFlight
						setTotalPassenger={setTotalPassenger}
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
					ref={cityAirportFrom}
					type="text"
					placeholder="bandara asal"
					className="px-3 py-3 bg-slate-200 rounded-md block w-0 flex-1"
				/>
				<i className="absolute left-[50%] -translate-x-[55%] bg-white rounded-full">
					<CiPlane size={30} />
				</i>
				<input
					ref={cityAirportTo}
					type="text"
					placeholder="bandara tujuan"
					className="px-3 py-3 bg-slate-200 rounded-md block w-0 flex-1"
				/>
			</div>
			<div className="flex items-end justify-between gap-2 mt-3 flex-wrap">
				<div className="flex gap-2 items-center">
					<div>
						<p className="font-poppins ml-2">Berangkat</p>
						<DatePicker
							selected={dayRangeFrom}
							onChange={(date) => {
								if (wayPlanFlight == 0) {
									if (checkDateWithToDate(today, date, dayRangeTo)) {
										setDayRangeFrom(date);
									}
								} else {
									console.log("chechk singular date");
									if (checkSingularDate(today, dayRangeFrom)) {
										setDayRangeFrom(date);
									}
								}
							}}
						/>
					</div>
					{wayPlanFlight == 0 && (
						<div>
							<p className="font-poppins ml-2">Pulang</p>
							<DatePicker
								selected={dayRangeTo}
								onChange={(date) => {
									if (checkDateWithToDate(today, dayRangeFrom, date)) {
										setDayRangeTo(date);
									}
								}}
							/>
						</div>
					)}
				</div>

				<button
					type="submit"
					className="bg-cyan-800 py-2 text-white px-4 font-semibold rounded-sm ml-auto hover:-translate-y-0.5 hover:shadow-[0px_0px_3px_2px_rgba(0,0,0,0.2)] active:translate-y-0 active:shadow-none transition-all duration-200"
				>
					Cari
				</button>
			</div>
		</form>
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
function PlanPasengerFlight({
	indexDropdown,
	setIndexDropdown,
	setTotalPassenger,
}) {
	const [dewasaCount, setDewasaCount] = useState(1);
	const [anakCount, setAnakCount] = useState(0);
	const [bayiCount, setbayiCount] = useState(0);

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
						onChange={(e) => {
							setDewasaCount(e.target.value);
						}}
						type="number"
						className="w-12 py-1 outline-none border-none caret-transparent"
						min={1}
						defaultValue={dewasaCount}
						max={10}
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
						onChange={(e) => {
							setAnakCount(e.target.value);
						}}
						defaultValue={anakCount}
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
						onChange={(e) => {
							setbayiCount(e.target.value);
						}}
						defaultValue={bayiCount}
						max={10}
						placeholder="number"
						onKeyDown={(event) => event.preventDefault()}
					/>
				</li>
			</div>
			<button
				type="button"
				onClick={() => {
					setTotalPassenger(
						Number(dewasaCount) + Number(anakCount) + Number(bayiCount)
					);
					setIndexDropdown(-1);
				}}
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

export default FlightSearch;
