import React from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import { TbCameraPlus } from "react-icons/tb";
export const Account = () => {
	return (
		<div className="flex gap-x-5 h-full">
			<div className="grow bg-[rgba(255,255,255,0.5)] px-12 py-10 rounded-lg">
				{/* <AccountProfileForm /> */}
				<ResetPasswordForm />
			</div>
			<div className="basis-80 bg-[rgba(255,255,255,0.5)] flex flex-col items-center px-6 py-10 rounded-lg">
				<div className="w-60 rounded-full h-60 relative">
					<img
						src="/profile.jpg"
						alt="profile-picture"
						className="w-60 h-60 rounded-full object-cover"
					/>
					<button className="absolute bottom-9 right-2 bg-purple-700 p-1.5 rounded-full">
						<TbCameraPlus
							size={25}
							color="white"
						/>
					</button>
				</div>
				<div className="mt-5">
					<p className="font-semibold text-xl text-center">Nama User</p>
					<p className="text-lg text-center">@username</p>
				</div>
				<div className="flex justify-center gap-x-5 mt-5">
					<div>
						<p className="text-center text-xl font-semibold">0</p>
						<p className="text-center font-semibold">Followers</p>
					</div>
					<div>
						<p className="text-center text-xl font-semibold">0</p>
						<p className="text-center font-semibold">Following</p>
					</div>
				</div>
				<button className="rounded-full mt-4 flex items-center gap-x-1 bg-purple-800 px-6 py-1.5 text-white">
					<span>
						<AiOutlineShareAlt />
					</span>
					<span>Share</span>
				</button>
			</div>
		</div>
	);
};

function InputComponent(props) {
	return (
		<div className="flex flex-col">
			<label
				htmlFor={props.htmlFor}
				className="font-semibold"
			>
				{props.label}
			</label>
			<input
				id={props.htmlFor}
				name={props.htmlFor}
				type={props.type}
				placeholder={props.placeholder}
				defaultValue={props.default}
				className="p-2 border-[1.5px] border-gray-400 rounded-md mt-2 focus:outline-none focus:shadow-[0px_0px_4px_2px_rgba(0,0,0,0.6)]"
			/>
		</div>
	);
}

function AccountProfileForm() {
	return (
		<>
			<form
				action=""
				className="flex flex-col gap-y-3"
			>
				<InputComponent
					type={"text"}
					label={"Nama Lengkap"}
					placeholder={"Masukkan nama lengkap anda"}
					default={"Putu Gde Arya Bhanuartha"}
					htmlFor={"fullname"}
				/>
				<InputComponent
					htmlFor={"username"}
					type={"text"}
					label={"Username"}
					placeholder={"Masukkan username anda"}
					default={"@username"}
				/>
				<InputComponent
					htmlFor={"email"}
					type={"email"}
					label={"Email"}
					placeholder={"Masukkan email anda"}
					default={"username123@gmail.com"}
				/>
				<InputComponent
					type={"number"}
					label={"No Telp"}
					placeholder={"Masukkan nomor telepon anda"}
					default={"081249618533"}
				/>
			</form>
			<div className="flex justify-between mt-4">
				<button className="px-8 py-1 bg-purple-700 text-white rounded-full">
					Save
				</button>
				<div className="flex items-center gap-x-4">
					<button>Delete account</button>
					<span>|</span>
					<button>Logout</button>
				</div>
			</div>
		</>
	);
}

function ResetPasswordForm() {
	return (
		<>
			<form
				action=""
				className="flex flex-col gap-y-3"
			>
				<InputComponent
					type={"email"}
					label={"Email"}
					placeholder={"Masukkan email anda"}
					default={""}
					htmlFor={"email"}
				/>
				<InputComponent
					htmlFor={"old_password"}
					type={"password"}
					label={"Old Password"}
					placeholder={"Masukkan password lama anda"}
					default={""}
				/>
				<InputComponent
					htmlFor={"new_password"}
					type={"password"}
					label={"New Password"}
					placeholder={"Masukkan password baru anda"}
					default={""}
				/>
				<InputComponent
					type={"retype_new_password"}
					label={"password"}
					placeholder={"Masukkan kembali password baru anda"}
					default={""}
				/>
			</form>
			<div className="flex justify-between mt-4">
				<button className="px-8 py-1 bg-purple-700 text-white rounded-full">
					Reset Password
				</button>
			</div>
		</>
	);
}
