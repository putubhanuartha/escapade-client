import React, { useEffect, useState } from "react";

export const WaitPayment = () => {
	const [time, settime] = useState(60 * 60 * 24);
	useEffect(() => {
		const sto = setInterval(() => {
			settime((val) => {
				if (val == 0) {
					clearInterval(sto);
					return 0;
				} else {
					return val - 1;
				}
			});
		}, 1000);
		return () => {
			clearInterval(sto);
		};
	}, []);
	function timerFormatter() {
		const hour = Math.floor(time / (60 * 60));
		const minute = Math.floor((time % (60 * 60)) / 60);
		const seconds = (time % (60 * 60)) % 60;

		return {
			hour: hour.toString().padStart(2, "0"),
			minute: minute.toString().padStart(2, "0"),
			seconds: seconds.toString().padStart(2, "0"),
		};
	}
	return (
		<div className="fixed w-screen h-screen bg-white flex">
			<div className="m-auto shadow-[0px_0px_4px_5px_rgba(0,0,0,0.2)] px-12 py-5 w-full max-w-md flex flex-col gap-y-4 rounded-md">
				<p className="text-center font-bold text-2xl">Waiting for payment</p>
				<img
					src="/clock.png"
					alt="clock"
					className="w-28 h-28 object-cover mx-auto"
				/>
				<p className="text-center bg-slate-200 py-1 w-fit mx-auto px-6 rounded-lg font-semibold text-lg">
					{timerFormatter().hour}hr : {timerFormatter().minute}m :{" "}
					{timerFormatter().seconds}s
				</p>
				<p className="text-center">
					Please proceed to your payment application to complete the purchase
					before the timeout
				</p>
				<button className="text-center bg-emerald-600 hover:bg-emerald-500 rounded-sm px-6 py-1.5 w-fit mx-auto text-white">
					Check payment
				</button>
			</div>
		</div>
	);
};
