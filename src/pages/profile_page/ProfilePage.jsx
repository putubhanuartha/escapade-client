import React, { useState } from "react";
import "./styles/ProfilePage.css";
import { Account } from "./components/Account";
import { RiwayatPemesanan } from "./components/RiwayatPemesanan/RiwayatPemesanan";
export const ProfilePage = () => {
	const [indexPage, setindexPage] = useState(0);
	return (
		<div
			id="profile_page"
			className="h-screen bg-heroImage bg-cover bg-bottom"
		>
			<div className="container mx-auto flex relative top-24 gap-x-5 h-[36rem]">
				<nav className="bg-[rgba(255,255,255,0.5)] p-6 rounded-lg basis-[19rem]">
					<p className="font-bold text-3xl">Settings</p>
					<ul className="mt-3 flex flex-col gap-y-3">
						<li>akun</li>
						<li>riwayat pemesanan</li>
						<li>reset password</li>
					</ul>
				</nav>
				<div className="grow h-full">
					{/* <Account /> */}
					<RiwayatPemesanan/>
				</div>
			</div>
		</div>
	);
};
