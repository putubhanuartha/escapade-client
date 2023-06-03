import React, { useContext, useState } from "react";
import { GlobalAppContext } from "../App";
import { LoginPops } from "./LoginPops";
import ForgotPasswordPops from "./ForgotPasswordPops";
import CreateAccountPops from "./CreateAccountPops";
import OTPVerificationPops from "./OTPVerificationPops";
export const authStateList = {
	LoginState: 0,
	SignupState: 1,
	ForgotPasswordState: 2,
	OTPVerificationState: 3,
};
function AuthenticationPops() {
	const { isDisplayAuthBox, setIsDisplayAuthBox } =
		useContext(GlobalAppContext);
	const [authState, setauthState] = useState(authStateList.LoginState);
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
				{authState === authStateList.LoginState && (
					<LoginPops
						authState={authState}
						setauthState={setauthState}
					/>
				)}
				{authState === authStateList.ForgotPasswordState && (
					<ForgotPasswordPops
						authState={authState}
						setauthState={setauthState}
					/>
				)}
				{authState === authStateList.SignupState && (
					<CreateAccountPops
						authState={authState}
						setauthState={setauthState}
					/>
				)}
				{authState === authStateList.OTPVerificationState && (
					<OTPVerificationPops
						authState={authState}
						setauthState={setauthState}
					/>
				)}
			</div>
		</div>
	);
}

export default AuthenticationPops;
