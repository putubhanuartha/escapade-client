import React from "react";
import "../hotel_search_page/styles/color.css";
import { Route, Routes } from "react-router-dom";
import ProductComponent from "./ProductComponent";
import PlacesDetails from "./PlacesDetails";
import BookTourDetails from "../../components/BookTourDetails";
import BookActivitesDetails from "../../components/BookActivitesDetails";

function CitySearchPage() {
	return (
		<div className="cucumbar-water">
			<div className="spacer h-36 w-full relative">
				<form
					action="/"
					className="gap-y-3 flex mx-auto gap-x-1 sm:gap-x-2 md:gap-x-3 px-2 absolute bottom-0 left-[50%] -translate-x-[50%] w-full justify-center"
				>
					<div className="flex max-w-lg flex-col border-[0.2px] bg-white w-full border-gray-300 px-3 pt-1 rounded-md">
						<label
							htmlFor="destinasi"
							className="text-gray-500 w-fit"
						>
							Destinasi atau nama properti
						</label>
						<input
							type="text"
							name="destinasi"
							id="destinasi"
							placeholder="kota, bandara, stasiun, area"
							className="outline-none border-b-[3px] bg-white box-border border-transparent focus:border-cyan-500 max-w-xl w-full"
						/>
					</div>

					<button
						type="submit"
						className="px-7 rounded-md bg-cyan-800 text-white py-2 hover:-translate-y-0.5 hover:shadow-[0px_0px_3px_2px_rgba(0,0,0,0.2)] active:translate-y-0 active:shadow-none transition-all duration-200"
					>
						CARI
					</button>
				</form>
			</div>
			<div className="bg-white">
				<Routes>
					<Route
						path=""
						element={<ProductComponent />}
					/>
					<Route
						path=":placeId"
						element={<PlacesDetails />}
					/>
				</Routes>
			</div>
		</div>
	);
}

export default CitySearchPage;
