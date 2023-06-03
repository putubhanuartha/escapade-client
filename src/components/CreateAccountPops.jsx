import React from "react";
import { FcGoogle } from "react-icons/fc";
const CreateAccountPops = () => {
	return (
		<form
			action="/"
			className="flex flex-col bg-slate-100 px-6 pt-16 pb-6 font-poppins items-center gap-y-6 w-full rounded-md"
		>
			<p className="font-semibold mb-5 text-center">
				Sign up to take your trip planning to the next level
			</p>
			<input
				type="text"
				placeholder="Nama lengkap"
				name="name"
				id="name"
				className="px-2 py-1.5 w-full border-[1px] border-gray-300"
				required
			/>
			<input
				placeholder="Email"
				type="email"
				name="email"
				id="email"
				className="px-2 py-1.5 w-full border-[1px] border-gray-300"
				required
			/>
			<input
				type="number"
				placeholder="No telepon"
				name="phone"
				id="phone"
				className="px-2 py-1.5 w-full border-[1px] border-gray-300"
				required
			/>
			<input
				placeholder="Password"
				type="password"
				name="password"
				id="password"
				className="px-2 py-1.5 w-full border-[1px] border-gray-300"
				required
			/>
			<div className="w-full border-t-[1px] border-gray-300 pt-6">
				<button className="border-[1px] hover:bg-slate-100 flex items-center justify-start px-5 gap-x-20 border-gray-400 rounded-full w-full py-2 bg-white ">
					<FcGoogle size={30} />
					Sign up with google
				</button>
				<button
					type="submit"
					className="bg-purple-700 text-white px-5 py-2 rounded-md mt-3 w-full hover:bg-purple-800"
				>
					Signup
				</button>
			</div>
		</form>
	);
};

export default CreateAccountPops;
