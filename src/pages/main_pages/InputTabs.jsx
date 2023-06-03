import React, { useContext, useEffect, useRef, useState } from "react";

import FlightSearch from "../../components/FlightSearch";
import InputTabsSwitch from "../../components/navigation/InputTabsSwitch";
import HotelSearch from "../../components/HotelSearch";
import ActivitesSearch from "../../components/ActivitesSearch";
import { GlobalAppContext } from "../../App";

function InputTabs() {
	const { indexState, setIndexState, statePlanOption } =
		useContext(GlobalAppContext);
	return (
		<div
			className={`bg-cold absolute ${
				indexState === statePlanOption.FlightSearchState
					? "sm:-bottom-64 -bottom-[15rem]"
					: ""
			}${
				indexState === statePlanOption.HotelSearchState
					? "sm:-bottom-[21rem] -bottom-[21rem] lg:-bottom-40"
					: ""
			}
			${
				indexState === statePlanOption.ActivitiesSearchState
					? "-bottom-52 lg:-bottom-52"
					: ""
			}
			py-5 px-5 rounded-md lg:max-w-none max-w-sm sm:max-w-md w-fit`}
		>
			<InputTabsSwitch
				statePlanOption={statePlanOption}
				indexState={indexState}
				setIndexState={setIndexState}
			/>
			{indexState === statePlanOption.FlightSearchState && <FlightSearch />}
			{indexState === statePlanOption.HotelSearchState && <HotelSearch />}
			{indexState === statePlanOption.ActivitiesSearchState && (
				<ActivitesSearch />
			)}
		</div>
	);
}

export default InputTabs;
