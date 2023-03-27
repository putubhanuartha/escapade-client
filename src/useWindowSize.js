import React, { useEffect, useState } from "react";

function useWindowSize() {
	const [winSize, setWinSize] = useState();
	useEffect(() => {
		setWinSize(setWindowSize(window.innerWidth));
		const winSize = window.addEventListener("resize", () => {
			setWinSize(setWindowSize(window.innerWidth));
		});
		return () => {
			removeEventListener("resize", winSize);
		};
	}, [winSize]);
	return [winSize];
}
function setWindowSize(winSize) {
	if (winSize >= 640 && winSize < 768) {
		return "sm";
	} else if (winSize >= 768 && winSize < 1024) {
		return "md";
	} else if (winSize >= 1024 && winSize < 1280) {
		return "lg";
	} else if (winSize >= 1280 && winSize < 1536) {
		return "xl";
	} else if (winSize >= 1536) {
		return "2xl";
	} else if (winSize < 640) {
		return "xs";
	}
}
export default useWindowSize;
