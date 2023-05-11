import React from "react";
import "../../colors.css";
import ListFaq from "./ListFaq";
function FAQ() {
	return (
		<div className="cucumber-water=">
			<div className="h-20"></div>
			<div className="container mx-auto py-9">
                <p className="text-center">Escapade common FAQS</p>
				<h2 className="text-3xl font-semibold text-center py-3">Frequently Asked Questions</h2>
				<div className="flex flex-col gap-y-4 gap-x-9 mt-10 max-w-3xl mx-auto">
					<ListFaq />
					<ListFaq />
					<ListFaq />
					<ListFaq />
					<ListFaq />
					<ListFaq />
					<ListFaq />
					<ListFaq />
				</div>
			</div>
		</div>
	);
}

export default FAQ;
