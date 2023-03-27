import React, { useContext } from "react";
import Header from "../../components/navigation/Header";
import Hero from "./Hero";
import TravelContainer from "./TravelContainer";
import BenefitCard from "./BenefitCard";
import AttractionsContainer from "./AttractionsContainer";
import StoryDropdownList from "./StoryDropdownList";
import OurPartners from "./OurPartners";
import { airlineData } from "../../model/airlineData";
import { travelPartnerData } from "../../model/travelPartnersData";
import Footer from "./Footer";
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
			<StoryDropdownList />
			<OurPartners
				title={"Popular Airlines"}
				subtitle={"Book cheap flights on your favourite airlines"}
				data={airlineData}
			/>
			<OurPartners
				title={"Our Travel Partners"}
				subtitle={"Wego searches for the best deals on these sites & many more"}
				data={travelPartnerData}
			/>
			<Footer/>
		</>
	);
}
