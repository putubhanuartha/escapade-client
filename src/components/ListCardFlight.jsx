import React from "react";

function ListCardFlight({flight}) {
	console.log(flight)
	return (
		<div className="flex w-full max-w-3xl py-5 bg-slate-200 rounded-md justify-between px-5">
			<div className="flex flex-col gap-y-3 lg:flex-row lg:w-full lg:justify-around">
				<div className="flex items-center gap-x-3">
					<img
						src={flight.airline.path}
						alt=""
						className="w-8 h-8 object-cover"
					/>
					<p className="font-semibold text-lg">{flight.airline.name}</p>
				</div>
				<div className="flex gap-x-3 items-center">
					<div>
						<p className="text-sm md:text-lg">{flight.departure.time}</p>
						<p className="text-sm md:text-lg">{flight.departure.airport}</p>
					</div>
					<div className="flex flex-col gap-y-1">
						<div className="bg-gray-400 flex max-w-[8rem] w-full h-1 items-center justify-between after:h-2 before:h-2 after:w-2 before:w-2 after:bg-inherit before:bg-inherit">
							<div className="bg-slate-500 h-2 w-2"></div>
							<div className="bg-slate-500 h-2 w-2"></div>
						</div>
						<p className="max-w-[8rem] text-xs text-center text-gray-400">
							{flight.transits.length} pemberhentian di {flight.transits.map((transit) => transit.city).join(', ')}
						</p>
					</div>
					<div>
						<p className="text-sm md:text-lg">{flight.arrival.time}</p>
						<p className="text-sm md:text-lg">{flight.arrival.airport}</p>
					</div>
				</div>
			</div>
			<div className="flex gap-x-3 flex-col items-center justify-center gap-y-2 lg:flex-row">
				<p className="font-semibold text-xl md:text-2xl">{flight.price}</p>
				<button
					type="button"
					className="bg-cyan-800 text-white px-5 h-fit py-1 rounded-md md:text-lg"
				>
					Pilih
				</button>
			</div>
		</div>
	);
}

export default ListCardFlight;
