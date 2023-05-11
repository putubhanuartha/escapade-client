import React, { useState } from "react";

function InputTabsSwitch({ statePlanOption, indexState, setIndexState }) {
	return (
		<div className="absolute bg-cyan-800 py-2.5 px-3 gap-3 flex left-[50%] -translate-x-[50%] -top-10 rounded-lg">
			<button
				onClick={() => {
					setIndexState(statePlanOption.FlightSearchState);
				}}
				type="button"
				className={`${
					indexState === 0
						? "bg-slate-200 rounded-lg px-2 py-1 text-black"
						: "text-white"
				}`}
			>
				Flights
			</button>
			<button
				onClick={() => {
					setIndexState(statePlanOption.HotelSearchState);
				}}
				type="button"
				className={`${
					indexState === 1
						? "bg-slate-200 rounded-lg px-2 py-1 text-black"
						: "text-white"
				}`}
			>
				Hotels
			</button>
			<button
				onClick={() => {
					setIndexState(statePlanOption.ActivitiesSearchState);
				}}
				type="button"
				className={`${
					indexState === 2
						? "bg-slate-200 rounded-lg px-2 py-1 text-black"
						: "text-white"
				}`}
			>
				Activites
			</button>
		</div>
	);
}

export default InputTabsSwitch;
