import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
function ListFaq() {
	const [isDropdownActive, setIsDropdownActive] = useState(false);
	return (
		<div className="overflow-hidden shadow-md">
			<div className="flex bg-slate-100 rounded-md py-5 px-7 items-center justify-between">
				<p
					className="text-base cursor-pointer"
					onClick={() => {
						setIsDropdownActive(!isDropdownActive);
					}}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quas ?
				</p>
				<button
					onClick={() => {
						setIsDropdownActive(!isDropdownActive);
					}}
				>
					{isDropdownActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</div>
			<div
				className={`bg-white px-7 ${
					isDropdownActive ? "h-full py-3" : "h-0 py-0 hidden"
				} max-h-64 overflow-hidden`}
			>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quis
				doloremque soluta harum a voluptatem voluptate dolore provident.
				Praesentium ex neque unde nam ea explicabo distinctio velit iure quam
				laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
				illum.
			</div>
		</div>
	);
}

export default ListFaq;
