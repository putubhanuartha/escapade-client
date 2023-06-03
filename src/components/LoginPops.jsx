import React from "react";
import { authStateList } from "./AuthenticationPops";
export const LoginPops = ({ authState, setauthState }) => {
	return (
		<form className="flex flex-col bg-slate-200 px-6 pt-16 pb-6 font-poppins items-center gap-y-4 w-full rounded-md">
			<p className="font-semibold mb-5">Log in to your account</p>
			<input
				placeholder="Email"
				type="email"
				name="email"
				id="email"
				className="px-2 py-1.5 w-full border-[1px] border-gray-300"
			/>
			<input
				placeholder="Password"
				type="password"
				name="password"
				id="password"
				className="px-2 py-1.5 w-full border-[1px] border-gray-300"
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
				<button
					onClick={() => {
						setauthState(authStateList.ForgotPasswordState);
					}}
				>
					Forgot Password ?
				</button>
				<button
					onClick={() => {
						setauthState(authStateList.SignupState);
					}}
				>
					Create Account
				</button>
			</div>
		</form>
	);
};
