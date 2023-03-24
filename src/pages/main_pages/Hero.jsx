import React from "react";
import { heroSubtitle } from "../../contents/heroSubtitle";
import "./styles/animateSubtitle.css";
import "./styles/animateTitle.css";
import { HiOutlineMapPin } from "react-icons/hi2";
export default function Hero() {
	return (
		<div className="m-auto">
			<div className="flex flex-col items-center">
				<h2 className="text-center font-poppins font-semibold tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl  text-cyan-800">
					<div className="flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-4">
						<div
							id="animateDownward"
							className="opacity-0 text-xl sm:text-3xl md:text-4xl lg:text-5xl"
						>
							Discover and enjoy your new
						</div>
						<div
							id="animateUpward"
							className="opacity-0 text-xl sm:text-3xl md:text-4xl lg:text-5xl"
						>
							places and experiences
						</div>
					</div>
				</h2>
				<div className="flex lg:mt-7 mt-3 md:mt-4 gap-1.5 md:gap-2 lg:gap-3 text-center  justify-center">
					<div className="h-7 md:h-9">
						<p className="text-center sm:text-2xl md:text-3xl  font-medium tracking-wide font-poppins text-lg text-gray-700">
							Explore
						</p>
					</div>
					<div className="h-7 md:h-9 w-full max-w-[8rem] md:max-w-none md:w-fit  overflow-hidden">
						<div className="w-full max-w-md h-fit animateSubtitle">
							{heroSubtitle.map((el) => {
								return (
									<p
										key={el.id}
										className="text-center sm:text-2xl md:text-3xl font-medium tracking-wide font-poppins  text-lg text-gray-700"
									>
										{el.text}
									</p>
								);
							})}
						</div>
					</div>
				</div>
				<form
					action="submit"
					className="mt-3 md:mt-4 lg:mt-10 bg-cold py-1.5 px-2 rounded-full max-w-sm w-full flex items-center"
				>
					<i className="px-3">
						<HiOutlineMapPin size={22} />
					</i>
					<input
						type="text"
						className="border-0 outline-none first-letter py-1 bg-cold flex-1"
						placeholder="Where are you going"
					/>
					<button
						type="submit"
						className="bg-blue-600 text-cold px-3 py-1.5 rounded-full  hover:bg-blue-800 duration-200 transition-all"
					>
						Search
					</button>
				</form>
			</div>
		</div>
	);
}
