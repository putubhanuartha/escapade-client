import React from "react";

function WideCard(props) {
	return (
		<div className="h-80 md:h-96 lg:h-[28rem] mx-auto rounded-lg relative">
			<img
				src={props.url}
				alt={props.title}
				className="h-80 md:h-96 lg:h-[28rem] w-full object-cover absolute rounded-lg -z-40"
			/>
            <div className="fixed top-0 bottom-0 w-full bg-[rgba(0,0,0,0.6)] rounded-lg"></div>
			<h3 className="absolute text-center capitalize text-cold left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-poppins z-50">{props.title}</h3>
		</div>
	);
}

export default WideCard;
