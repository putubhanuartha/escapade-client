import React, { useContext, useState } from "react";
import { GlobalAppContext } from "../App";
function AuthenticationPops() {
	const { isDisplayAuthBox, setIsDisplayAuthBox } =
		useContext(GlobalAppContext);
	return (
		<div
			className={`fixed h-screen w-screen bg-[rgba(0,0,0,0.6)] z-50 ${
				isDisplayAuthBox ? "flex" : "hidden"
			}`}
			onClick={() => {
				setIsDisplayAuthBox(false);
			}}
		>
			<div
				className="m-auto w-full max-w-xs md:max-w-sm lg:max-w-md"
				onClick={(event) => {
					event.stopPropagation();
				}}
			>
				<form
					action="/"
					className="flex flex-col bg-slate-100 px-6 pt-16 pb-6 font-poppins items-center gap-y-4 w-full rounded-md"
				>
					<p className="font-semibold mb-5">Log in to your account</p>
					<input
						placeholder="Email"
						type="email"
						name="email"
						id="email"
						className="px-2 py-1.5 w-full"
					/>
					<input
						placeholder="Password"
						type="password"
						name="password"
						id="password"
						className="px-2 py-1.5 w-full"
					/>

					<div className="lg:flex">
						<div className="flex items-center gap-x-1">
							<input
								type="checkbox"
								name="remember"
								id="remember"
							/>
							<label htmlFor="remember">Remember Me</label>
						</div>
					</div>
					<button
						type="submit"
						className="bg-purple-700 text-white px-5 py-1.5 rounded-md mt-3"
					>
						Log in
					</button>
					<div className="flex flex-col">
						<button>Forgot Password ?</button>
						<button>Create Account</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default AuthenticationPops;
