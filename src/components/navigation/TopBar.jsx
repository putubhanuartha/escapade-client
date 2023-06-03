import React from "react";
import { sidebarList } from "../../contents/sidebarList.js";
import TopbarList from "./TopbarList";
import { GlobalAppContext } from "../../App.jsx";
export default function TopBar() {
	
	return (
		<div>
			<ul className="flex xl:gap-5 gap-3 items-center">
				{sidebarList.map((el,index) => {
					return (
						<TopbarList
							text={el.text}
							id={el.id}
							link={el.link}
							index={index}
						/>
					);
				})}
			</ul>
		</div>
	);
}