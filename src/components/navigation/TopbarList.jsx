import React, { useContext } from "react";
import { GlobalAppContext } from "../../App";

export default function TopbarList(props) {
	const { isOnTop, statePlanOption, indexState, setIndexState } =
		useContext(GlobalAppContext);
	function returnStatePlanOption(currIndex) {
		switch (currIndex) {
			case 0:
				return statePlanOption.FlightSearchState;
			case 1:
				return statePlanOption.HotelSearchState;
			case 2:
				return statePlanOption.ActivitiesSearchState;
			default:
				return null;
		}
	}
	function handleClick(index, e) {
		const value = returnStatePlanOption(index);
		if (value !== null) {
			e.preventDefault();
			setIndexState(value);
		}
	}
	return (
		<li>
			<a
				onClick={(e) => {
					handleClick(props.index, e);
				}}
				href={props.link}
				className={`font-medium font-poppins ${
					isOnTop
						? "text-gray-500 hover:text-gray-800"
						: "text-gray-400 hover:text-gray-300"
				}  duration-300 transition-colors lg:text-lg tracking-normal lg:tracking-wider`}
			>
				{props.text}
			</a>
		</li>
	);
}
