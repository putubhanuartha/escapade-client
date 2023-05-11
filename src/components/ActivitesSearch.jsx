import React from "react";
function ActivitesSearch() {
	return (
		<form
			action="/"
			className="gap-y-3 flex flex-col"
		>
			<div className="flex flex-col border-[0.2px] border-gray-300 px-3 pt-1">
				<label
					htmlFor="destinasi"
					className="text-gray-500"
				>
					Destinasi atau nama properti
				</label>
				<input
					type="text"
					name="destinasi"
					id="destinasi"
					placeholder="kota, bandara, stasiun, area"
					className="outline-none border-b-[2px] bg-slate-100 box-border border-transparent focus:border-cyan-500 w-72 sm:w-80 lg:w-96"
				/>
			</div>

			<button
				type="submit"
				className="self-end px-4 bg-cyan-800 text-white py-2 hover:-translate-y-0.5 hover:shadow-[0px_0px_3px_2px_rgba(0,0,0,0.2)] active:translate-y-0 active:shadow-none transition-all duration-200"
			>
				CARI
			</button>
		</form>
	);
}

export default ActivitesSearch;
