import React from "react";
import "./RiwayatPemesanan.css";
import { OneWayFlightList } from "./Flights/ListCard/OneWayFlightList";
import { RoundTripList } from "./Flights/ListCard/RoundTripList";
import { HotelList } from "./Hotels/ListCard/HotelList";
import { ActivitesList } from "./Activites/ListCard/ActivitesList";
export const RiwayatPemesanan = () => {
	return (
		<div
			id="riwayat_pemesanan"
			className="h-full"
		>
			<h4 className="font-semibold text-2xl">Purchase History</h4>
			<nav className="mt-3">
				<ul className="flex gap-x-6">
					<li>Flights</li>
					<li>Hotels</li>
					<li>Activities</li>
				</ul>
			</nav>
			<div className="overflow-y-scroll h-[30rem] mt-6 flex flex-col gap-y-5">
				<OneWayFlightList />
				<RoundTripList/>
			</div>
		</div>
	);
};
