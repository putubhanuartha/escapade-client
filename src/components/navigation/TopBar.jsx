import React from "react";
import { sidebarList } from "../../contents/sidebarList.js";
import TopbarList from "./TopbarList";
export default function TopBar() {
	return (
		<div>
			<ul className="flex xl:gap-5 gap-3 items-center">
				{sidebarList.map((el) => {
					return (
						<TopbarList
							text={el.text}
							id={el.id}
						/>
					);
				})}
			</ul>
		</div>
	);
}