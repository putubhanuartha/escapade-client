import React, { useEffect, useState } from "react";
import { GlobalAppContext } from "../../App";
import { RxCross1 } from "react-icons/rx";
import { sidebarList } from "../../contents/sidebarList";

import SidebarList from "./SidebarList";
export default function Sidebar() {
	const {
		isSideBarActive,
		setIsSidebarActive,
		isDisplayAuthBox,
		setIsDisplayAuthBox,
	} = React.useContext(GlobalAppContext);
	const [isClosed, setIsClosed] = useState(false);
	useEffect(() => {
		if (!isSideBarActive) {
			setTimeout(() => {
				setIsClosed(true);
			}, 1800);
		} else {
			setIsClosed(false);
		}
	}, [isSideBarActive]);
	return (
		<div
			className={`fixed  px-4 w-screen h-screen bg-cyan-900 py-4 flex flex-col justify-between ${
				isSideBarActive
					? "translate-x-0 z-50"
					: `-translate-x-full delay-1200 ${isClosed ? "-z-20" : "z-50"}`
			} transition-transform duration-700`}
		>
			<div className="flex items-center justify-between">
				<div
					className={`flex w-fit h-7 ${
						isSideBarActive
							? "translate-x-0 delay-500"
							: "-translate-x-72 delay-1000"
					} duration-700`}
				>
					<h1 className="logo-font capitalize self-end text-green-100 text-3xl">
						escapade
					</h1>
					<img
						src="/logo.png"
						alt="logo escapade"
						className="w-6   self-start"
					/>
				</div>
				<button
					className={`${
						isSideBarActive
							? "opacity-1 delay-1400 duration-500"
							: "opacity-0 delay-75 duration-75"
					} `}
					onClick={() => {
						setIsSidebarActive(false);
					}}
				>
					<RxCross1
						color="#91D8E4"
						size={30}
					/>
				</button>
			</div>
			<ul className="h-96 flex flex-col justify-between">
				{sidebarList.map((el) => {
					return (
						<SidebarList
							isSideBarActive={isSideBarActive}
							transitionAnimation={el.transitionAnimation}
							id={el.id}
							text={el.text}
							icon={el.icon}
						/>
					);
				})}
			</ul>

			<div className="flex flex-col gap-4">
				<button
					onClick={() => {
						setIsDisplayAuthBox(!isDisplayAuthBox);
						setIsSidebarActive(!isSideBarActive);
					}}
					className={`text-green-100 font-raleway font-semibold text-2xl rounded-lg py-1 bg-cyan-600 ${
						isSideBarActive
							? "translate-y-0 opacity-1 delay-1600"
							: "-translate-y-8 opacity-0 delay-75"
					} duration-500 ease-[cubic-bezier(0,-0.67,.9,1.58)]`}
				>
					Login
				</button>
				<button
					className={`text-green-100 font-raleway font-semibold text-2xl rounded-lg py-1 bg-cyan-600 ${
						isSideBarActive
							? "translate-y-0 opacity-1 delay-1700"
							: "translate-y-8 opacity-0 delay-75"
					} duration-500 ease-[cubic-bezier(0,-0.67,.9,1.58)]`}
				>
					Sign Up
				</button>
			</div>
		</div>
	);
}
