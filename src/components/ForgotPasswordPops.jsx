import React from "react";
import { authStateList } from "./AuthenticationPops";
const ForgotPasswordPops = ({ authState, setauthState }) => {
	return (
		<form className="flex flex-col bg-slate-100 px-10 pt-16 pb-6 font-poppins items-center gap-y-6 w-full rounded-md">
			<p className="font-semibold mb-5 text-center">Forgot your password?</p>
			<p className="text-center">
				No worries! Enter your email and we will send you instructions to reset
				your password.
			</p>
			<input
				placeholder="Email"
				type="email"
				name="email"
				id="email"
				className="px-2 py-1.5 w-full border-[1px] border-gray-300"
				required
			/>
			<button
				onClick={() => {
					setauthState(authStateList.OTPVerificationState);
				}}
				type="submit"
				className="bg-purple-700 text-white px-5 py-2 rounded-md mt-3 w-full hover:bg-purple-800"
			>
				Submit
			</button>
		</form>
	);
};

export default ForgotPasswordPops;
