import React from "react";
import CityListComponent from "./CityListComponent";
import TopPlacesComponent from "./TopPlacesComponent";
function ProductComponent() {
	return (
		<>
			<div className="relative h-64 md:h-72 lg:h-96 mt-4">
				<div className="absolute z-20 left-[50%] min-w-max -translate-x-[50%] top-[50%] -translate-y-[50%] flex flex-col gap-y-1 lg:gap-y-4 items-center bg-[rgba(0,0,0,0.4)] rounded-md p-5">
					<p className="text-white text-center lg:text-lg">
						Explore Things To Do
					</p>
					<h1 className="font-semibold text-white text-xl md:text-2xl lg:text-3xl text-center">
						Istanbul, Turkey
					</h1>
				</div>
				<img
					src="https://www.celebritycruises.com/blog/content/uploads/2022/12/best-time-to-visit-istanbul-hero-cta.jpg"
					alt="istanbul"
					className="absolute w-screen h-full object-cover object-top rounded-b-[20%] sm:rounded-b-[30%] md:rounded-b-[35%]"
				/>
			</div>
			<div className="mx-auto container py-3 flex flex-col gap-y-3">
				<p className="mx-auto text-center text-xs bg-white py-2 md:max-w-2xl md:text-base lg:max-w-4xl lg:text-lg">
					Situated at the crossroads of East and West, Istanbul possesses a
					brilliant tapestry of culture. Once known as Constantinople and
					Byzantium, the city stood at the forefront of many historical events
					and evolved with each experience. An eclectic mix of Greek, Roman,
					Venetian and Ottoman influences still reside within the city’s
					aesthetic in plain sight, and the food is a mouthwatering feast of
					dishes both local and foreign.
				</p>
				<CityListComponent />
				<TopPlacesComponent />
				<CityListComponent />
			</div>
		</>
	);
}

export default ProductComponent;
