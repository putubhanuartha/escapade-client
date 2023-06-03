import React from "react";
import "./OTPVerificationPops.css";
const OTPVerificationPops = () => {
	return (
		<form
			id="OTPForm"
			className="flex flex-col bg-slate-100 px-10 pt-16 pb-6 font-poppins items-center gap-y-6 w-full rounded-md"
		>
			<p className="font-semibold mb-5 text-center">Verification OTP</p>
			<p className="text-center">
				Masukkan kode yang telah dikirimkan ke Email
			</p>
			<div className="flex gap-x-3">
				<input
					type="number"
					name="first_input"
					id="first_input"
					className="w-12 h-12 px-3"
				/>
				<input
					type="number"
					name="second_input"
					id="second_input"
					className="w-12 h-12 px-3"
				/>
				<input
					type="number"
					name="third_input"
					id="third_input"
					className="w-12 h-12 px-3"
				/>
				<input
					type="number"
					name="fourth_input"
					id="fourth_input"
					className="w-12 h-12 px-3"
				/>
			</div>
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

export default OTPVerificationPops;
