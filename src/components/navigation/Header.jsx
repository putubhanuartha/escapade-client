import React, { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GlobalAppContext } from "../../App";
import TopBar from "./TopBar";
import { BsPersonCircle } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";

export default function Header() {
	const [showNotification, setshowNotification] = useState(false);

	const {
		setIsSidebarActive,
		isScrollUp,
		isOnTop,
		isDisplayAuthBox,
		setIsDisplayAuthBox,
	} = useContext(GlobalAppContext);
	return (
		<div
			className={`py-3 sm:py-4 lg:py-5 fixed z-40 left-0 right-0 ${
				isScrollUp ? "translate-x-0" : "-translate-y-36"
			} duration-500 ${isOnTop ? "bg-transparent" : "bg-cyan-800"}`}
		>
			<div className="container mx-auto flex items-center justify-between">
				<div className="flex items-center gap-9">
					<div
						onClick={() => {
							location.href = "/";
						}}
						className="flex w-fit h-7 sm:h-8 md:h-9 items-center group cursor-pointer"
					>
						<h1
							className={`logo-font transition-colors duration-300  ${
								isOnTop
									? "text-cyan-800 group-hover:text-cyan-600"
									: "group-hover:text-gray-100 text-gray-300"
							} capitalize self-end text-lg sm:text-xl md:text-2xl lg:text-3xl`}
						>
							escapade
						</h1>
						<img
							src="/logo.png"
							alt="logo escapade"
							className="w-4 self-start"
						/>
					</div>
					<div className="hidden lg:inline">
						<TopBar />
					</div>
				</div>
				<div className="hidden lg:flex lg:items-center lg:gap-x-5">
					<a
						className="btn-profile"
						onClick={() => {
							setIsDisplayAuthBox(!isDisplayAuthBox);
						}}
					>
						<BsPersonCircle
							size={28}
							color={`${isOnTop ? "#155e75" : "#d1d5db"}`}
						/>
					</a>

					<span className="inline-block relative">
						<button
							onClick={() => {
								setshowNotification(!showNotification);
							}}
							className="h-full block"
						>
							<IoMdNotificationsOutline
								size={32}
								color={`${isOnTop ? "#155e75" : "#d1d5db"}`}
							/>
						</button>
						{showNotification && (
							<div className="absolute py-6 px-5 bg-[rgba(255,255,255,0.85)] w-[25rem] right-0 top-11 rounded-lg border-2 border-gray-200">
								<p className="text-2xl font-semibold">Notification</p>
								<ul className="flex flex-col gap-y-2 mt-2">
									<li className="bg-white shadow-md rounded-md p-2">
										Kode pemesanan anda telah diterima oleh pihak hotel
									</li>
									<li className="bg-white shadow-md rounded-md p-2">
										Konser coldplay sebentar lagi dimulai!
									</li>
									<li className="bg-white shadow-md rounded-md p-2">
										Kode pemesanan konser anda telah berhasil
									</li>
									<li className="bg-white shadow-md rounded-md p-2">
										Booking hotel berhasil
									</li>
									<li className="bg-white shadow-md rounded-md p-2">
										Kode pemesanan anda telah diterima oleh pihak maskapai
									</li>
								</ul>
							</div>
						)}
					</span>
				</div>

				<button
					className="lg:hidden"
					onClick={() => {
						setIsSidebarActive(true);
					}}
				>
					<GiHamburgerMenu
						size={28}
						color={`${isOnTop ? "#155e75" : "#d1d5db"}`}
					/>
				</button>
			</div>
		</div>
	);
}
