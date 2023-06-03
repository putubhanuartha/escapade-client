import React, { useState , useRef, useEffect} from "react";
import "../hotel_search_page/styles/color.css";
import DatePicker from "react-datepicker";
import axios from "axios";
import { checkDateWithToDate, checkSingularDate } from "../../helpers/checker";
import "react-datepicker/dist/react-datepicker.css";
import ListCardHotel from "../../components/ListCardHotel";
import { useLocation , useNavigate} from "react-router-dom";
function HotelSearchPage() {
	const location = useLocation();
	const [hotels, setHotels] = useState([]);
	const getData = async (destinasi, from, to, keyword) => {
		const res = await fetchSearchHotels({
			destination: destinasi,
			from_date: from,
			to_date: to,
			adult: 1,
			child: 0,
			baby: 0,
			keyword: keyword,
		});
		console.log(res);
		setHotels(res);
	};
	console.log(location.state);
	return (
		<div className="cucumbar-water">
			<div className="h-80 lg:h-56"></div>
			<div className="relative rounded-t-[4rem] bg-gray-100">
				<SearchBarHotel onSubmitSearch={getData} />
				<div className="container mx-auto pt-16">
					<div className="flex flex-col gap-y-6 items-center">
						{hotels.map((hotel, index) => (
							<ListCardHotel
								hotel={hotel}
								key={index}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
function SearchBarHotel({ onSubmitSearch }) {
	const today = new Date();
	const nextDay = new Date(new Date().getTime() + 1000 * 60 * 60 * 24);
	const navigate = useNavigate();
	const [indexDropdown, setIndexDropdown] = useState(-1);
	const [dayRangeTo, setDayRangeTo] = useState(nextDay);
	const [dayRangeFrom, setDayRangeFrom] = useState(today);
	const [dayRange, setdayRange] = useState(1);
	const [totalGuest, setTotalGuest] = useState(1);
	const destinationInput = useRef(null);
	const keywordsInput = useRef(null);
	useEffect(() => {
		const milisDifferences = dayRangeTo.getTime() - dayRangeFrom.getTime();
		const day = Math.ceil(milisDifferences / (1000 * 60 * 60 * 24));
		setdayRange(day);
	}, [dayRangeFrom, dayRangeTo]);
	function handleSubmit(e) {
		e.preventDefault();
		const hotelInputUser = {
			destinationInput: destinationInput.current.value,
			keywordsInput: keywordsInput.current.value,
			totalGuest,
			dateFrom: `${dayRangeFrom.getFullYear()}-${(dayRangeFrom.getMonth() + 1)
				.toString()
				.padStart(2, "0")}-${dayRangeFrom
				.getDate()
				.toString()
				.padStart(2, "0")}`,
			dateTo: `${dayRangeTo.getFullYear()}-${(dayRangeTo.getMonth() + 1)
				.toString()
				.padStart(2, "0")}-${dayRangeTo.getDate().toString().padStart(2, "0")}`,
		};
		function checkIsEmpty(obj) {
			for (let key in obj) {
				if (!obj[key]) {
					return true;
				}
			}
			return false;
		}
		if (checkIsEmpty(hotelInputUser)) {
			alert("isi data dengan lengkap");
		} else {
			navigate("/search-hotel", { state: hotelInputUser });
		}
	}

	return (
		<div className="absolute left-[50%] -translate-x-[50%] bg-white shadow-xl rounded-lg -top-56 lg:-top-28 px-3 py-2">
			<form
				onSubmit={handleSubmit}
				className="flex lg:gap-x-3 lg:flex-row flex-col lg:gap-y-0 gap-y-3"
			>
				<div className="flex flex-col border-[0.2px] border-gray-300 px-3 pt-1">
					<label
						htmlFor="destinasi"
						className="text-gray-500"
					>
						Destinasi atau nama properti
					</label>
					<input
						ref={destinationInput}
						type="text"
						name="destinasi"
						id="destinasi"
						placeholder="kota, bandara, stasiun, area"
						className="outline-none border-b-[2px] box-border border-transparent focus:border-cyan-500 w-52"
					/>
				</div>
				<div className="flex items-center justify-evenly gap-x-3 border-[0.4px] border-gray-300">
					<div>
						<p className="font-poppins ml-2">From</p>
						<DatePicker
							selected={dayRangeFrom}
							onChange={(date) => {
								if (checkDateWithToDate(today, date, dayRangeTo)) {
									setDayRangeFrom(date);
								}
							}}
						/>
					</div>
					<p className="font-semibold w-11">{dayRange} hari</p>
					<div>
						<p className="font-poppins ml-2">To</p>
						<DatePicker
							selected={dayRangeTo}
							onChange={(date) => {
								if (checkDateWithToDate(today, dayRangeFrom, date)) {
									setDayRangeTo(date);
								}
							}}
						/>
					</div>
				</div>
				<div className="border-[0.4px] border-gray-300 px-3 pt-1 relative">
					<div
						className="w-36"
						onClick={() => {
							indexDropdown === 1 ? setIndexDropdown(-1) : setIndexDropdown(1);
						}}
					>
						<p className="text-gray-500">Jumlah tamu kamar</p>
						<p>{totalGuest} orang</p>
					</div>

					<PlanHotel
						setTotalGuest={setTotalGuest}
						indexDropdown={indexDropdown}
						setIndexDropdown={setIndexDropdown}
					/>
				</div>
				<div className="flex gap-x-2">
					<div className="flex flex-col border-[0.2px] border-gray-300 px-3 pt-1 w-full">
						<label
							htmlFor="keyword"
							className="text-gray-500"
						>
							Kata kunci (opsional)
						</label>
						<input
							ref={keywordsInput}
							type="text"
							name="keyword"
							id="keywordS"
							placeholder="bandara, statsiun, nama properti"
							className="outline-none border-b-[2px] w-52 box-border border-transparent focus:border-cyan-500"
						/>
					</div>
					<button
						type="submit"
						className="bg-cyan-700 text-white px-6 hover:-translate-y-0.5 hover:shadow-[0px_0px_3px_2px_rgba(0,0,0,0.2)] active:translate-y-0 active:shadow-none transition-all duration-200"
					>
						Cari
					</button>
				</div>
			</form>
		</div>
	);
}
function PlanHotel({ indexDropdown, setIndexDropdown, setTotalGuest }) {
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
						type="number"
						className="w-12 py-1 outline-none border-none caret-transparent"
						min={1}
						onChange={(e) => {
							setDewasaCount(e.target.value);
						}}
						defaultValue={dewasaCount}
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
						onChange={(e) => {
							setAnakCount(e.target.value);
						}}
						type="number"
						className="w-12 py-1 outline-none border-none caret-transparent"
						min={0}
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
					setTotalGuest(
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
export default HotelSearchPage;
