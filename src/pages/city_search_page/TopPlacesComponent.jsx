import React from "react";
import ListCardPlaces from "../../components/ListCardPlaces";

function TopPlacesComponent() {
	return (
		<>
			<div>
				<h2 className="font-semibold text-lg sm:text-xl lg:text-start font-poppins text-center md:text-2xl">
					Top Places to Visit 
				</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-y-3 py-4 md:py-6">
                    <ListCardPlaces/>
                    <ListCardPlaces/>
                    <ListCardPlaces/>
                    <ListCardPlaces/>
                    <ListCardPlaces/>
                    <ListCardPlaces/>
                    <ListCardPlaces/>
                </div>
			</div>
		</>
	);
}

export default TopPlacesComponent;
