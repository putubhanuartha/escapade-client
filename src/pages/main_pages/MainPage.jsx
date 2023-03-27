import React, { useContext } from "react";
import Header from "../../components/navigation/Header";
import Hero from "./Hero";
import { GlobalAppContext } from "../../App";
import TravelContainer from "./TravelContainer";
import BenefitCard from "./BenefitCard";
import AttractionsContainer from "./AttractionsContainer";
import StoryDropdownList from "./StoryDropdownList";

export default function MainPage() {
	// const { setToggleTopBar, toggleTopBar } = useContext(GlobalAppContext);
	return (
		<>
			<div className="h-screen relative">
				<img
					loading="eager"
					decoding="async"
					src="/hero.webp"
					alt="hero image"
					className="absolute w-screen h-full -z-30 object-cover"
				/>
				<div className="container mx-auto flex h-full">
					<Hero />
				</div>
			</div>

			<TravelContainer />
			<BenefitCard />
			<AttractionsContainer />
			<StoryDropdownList/>
		</>
	);
}
