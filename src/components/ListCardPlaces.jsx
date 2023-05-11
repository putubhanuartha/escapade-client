import React from "react";
import { AiFillStar } from "react-icons/ai";
function ListCardPlaces() {
	return (
		<div className="flex items-center rounded-md shadow-[0px_0px_3px_2px_rgba(0,0,0,0.2)] ">
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Istanbul_asv2020-02_img48_Galata_Tower.jpg/375px-Istanbul_asv2020-02_img48_Galata_Tower.jpg"
				alt="galata-tower"
                className="rounded-md w-20 h-20 object-cover"
			/>
			<div className="px-3">
				<p className="font-semibold  text-lg md:text-xl">Galata Tower</p>
				<div className="flex mt-0.5">
                    <AiFillStar color="gold"/>
                    <AiFillStar color="gold"/>
                    <AiFillStar color="gold"/>
                    <AiFillStar color="gold"/>
                    <AiFillStar color="gold"/>
                </div>
			</div>
		</div>
	);
}

export default ListCardPlaces;
