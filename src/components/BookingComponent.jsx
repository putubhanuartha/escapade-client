import React from "react";
import { Route, Routes } from "react-router-dom";
import BookTourDetails from "./BookTourDetails";
import BookActivitesDetails from "./BookActivitesDetails";
import "../pages/hotel_search_page/styles/color.css";
function BookingComponent() {
	return (
		<>
			<div className="h-20  cucumbar-water"></div>
			<div className="container mx-auto py-5">
				<Routes>
					<Route path="tour">
						<Route
							path=":tourId"
							element={<BookTourDetails />}
						/>
					</Route>
					<Route path="activites">
						<Route
							path=":activitesId"
							element={<BookActivitesDetails />}
						/>
					</Route>
					<Route path="flight"></Route>
					<Route path="hotel"></Route>
				</Routes>
			</div>
		</>
	);
}

export default BookingComponent;
