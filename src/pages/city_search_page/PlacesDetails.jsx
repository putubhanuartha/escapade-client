import React from "react";
import { AiFillStar } from "react-icons/ai";
function PlacesDetails() {
	return (
		<div className="mx-auto container py-12 mt-3">
			<div className="flex shadow-[0px_0px_10px_5px_rgba(0,0,0,0.2)] rounded-md xl:flex-nowrap flex-wrap max-w-7xl">
				<img
					src="https://idsb.tmgrup.com.tr/ly/uploads/images/2022/03/25/193694.jpg"
					alt=""
					className="rounded-md xl:max-h-[50%] xl:max-w-[50%] w-full max-h-[25rem] block mx-auto xl:h-auto object-cover"
				/>
				<div className="px-7 pt-5 pb-4">
					<h2 className="font-semibold text-3xl">Galata Tower</h2>
					<p className="text-gray-500 mt-3">
						Galata tower is considered to be the most important of the places to
						visit in Istanbul. This is just one of the places in Turkey where
						most of the tourist flow and this area is really quite spectacular.
						The tower built in the 6th century BC was originally built for the
						sea lantern and later served a number of different purposes. The
						height from the ground to the tip of the roof is 69.90 meters. The
						wall thickness is 3.75 m, the inside diameter is 8.95 m and the
						outside diameter is 16.45 meters. Don't miss the restaurant inside
						the tower, It serves as a cafeteria on the day and as a restaurant
						between 20:00 – 00:30 in the evenings. If you want to go on a
						special day, make sure to make a reservation first.
					</p>
					<div className="flex mt-4 justify-around">
						<div>
							<p className="font-semibold">Average Reviews</p>
							<div className="flex items-center gap-x-1">
								<div className="flex">
									<AiFillStar color="gold" />
									<AiFillStar color="gold" />
									<AiFillStar color="gold" />
									<AiFillStar color="gold" />
								</div>
								<p>90,183 reviews</p>
							</div>
						</div>
						<div>
							<p className="font-semibold">Opening Hours</p>
							<p>Not Available</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PlacesDetails;
