import React from "react";
import "../../colors.css";
import ListFaq from "./ListFaq";
function FAQ() {
	return (
		<div className="cucumber-water=">
			<div className="h-20"></div>
			<div className="container mx-auto py-9">
				<p className="text-center">Escapade common FAQS</p>
				<h2 className="text-3xl font-semibold text-center">
					Frequently Asked Questions
				</h2>
				<form className="max-w-xl flex gap-x-2 mx-auto mt-4">
					<input
						type="text"
						id="search_faq"
						name="search_faq"
						placeholder="Search your questions ..."
						className="bg-slate-200 px-3 rounded-md py-2 outline-indigo-600 focus:shadow-xl flex-1"
					/>
                    <button type="submit" className="py-2 bg-slate-500 rounded-md px-4 text-white hover:bg-slate-600">Search</button>
				</form>
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
