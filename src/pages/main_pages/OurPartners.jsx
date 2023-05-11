	import React from "react";

function OurPartners(props) {
	return (
		<div className="container mx-auto py-7">
			<div className="flex flex-col items-center lg:items-start">
				<h2 className="text-xl text-center font-poppins font-semibold md:text-2xl lg:text-3xl lg:text-start">
					{props.title}
				</h2>
				<p className="font-poppins text-base text-center max-w-sm md:text-lg md:mt-2 lg:text-start">
					{props.subtitle}
				</p>
			</div>
			<div className="grid grid-cols-2 mt-5 sm:gap-x-20 sm:gap-y-10 md:grid-cols-4 place-items-center mx-auto max-w-md md:max-w-2xl lg:max-w-none gap-y-7">
				{props.data.map((el) => {
					return (
						<a
							href={el.url}
							target="_blank"
							className="w-fit"
						>
							<img
								src={el.path}
								alt={el.url}
								className="block w-32 sm:w-40"
							/>
						</a>
					);
				})}
			</div>
		</div>
	);
}

export default OurPartners;
