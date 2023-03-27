import React from "react";
import { benefitData } from "../../model/benefitData";
function BenefitCard() {
	return (
		<div className="bg-slate-50">
			<div className="container mx-auto py-6 grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-items-center gap-8">
				{benefitData.map((el) => {
					return (
						<CardLogo
							url={el.url}
							title={el.title}
							subtitle={el.subtitle}
						/>
					);
				})}
			</div>
		</div>
	);
}
function CardLogo(props) {
	return (
		<div className="w-full max-w-xs flex flex-col items-center">
			<img
				src={props.url}
				alt={props.title}
				className="w-32 h-32 object-cover"
			/>
			<div className="w-72 mt-3 flex flex-col gap-1">
				<p className="text-center font-poppins text-base font-semibold">{props.title}</p>
				<p className="text-center font-poppins text-sm">{props.subtitle}</p>
			</div>
		</div>
	);
}
export default BenefitCard;
