import React, { useContext } from "react";
import { GlobalAppContext } from "../../App";

export default function TopbarList(props) {
	const { isOnTop } = useContext(GlobalAppContext);
	return (
		<li>
			<a
				href="#"
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