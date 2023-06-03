import React, { useEffect, useState } from "react";
import {
	AiOutlineCloseCircle,
	AiOutlineStar,
	AiFillStar,
} from "react-icons/ai";
import "./ReviewPage.css";
export const ReviewPage = ({ showReview, setshowReview }) => {
	const [reviewList, setreviewList] = useState([]);
	useEffect(() => {
		console.log(reviewList);
	}, [reviewList]);
	function handleButtonReview(el) {
		if (reviewList.includes(el.target.innerHTML.toString())) {
			const updatedList = reviewList.filter(
				(item) => item !== el.target.innerHTML.toString()
			);
			setreviewList(updatedList);
		} else {
			const updatedList = reviewList.concat(el.target.innerHTML.toString());
			setreviewList(updatedList);
		}
	}
	return (
		<div className="fixed flex w-screen h-screen top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.3)] z-50">
			<div className="m-auto px-7 max-w-4xl w-full py-10 bg-gray-50  rounded-md">
				<div className="flex justify-between items-center">
					<p className="font-semibold text-2xl">We Value Your Feedback</p>
					<button
						onClick={() => {
							setshowReview(!showReview);
						}}
					>
						<AiOutlineCloseCircle size={30} />
					</button>
				</div>
				<div className="flex gap-x-5">
					<div className="flex flex-col justify-between basis-72">
						<div className="flex flex-col">
							<label
								htmlFor="name"
								className="font-semibold text-lg"
							>
								Nama
							</label>
							<input
								type="text"
								defaultValue={"Putu Gde Arya"}
								name="name"
								id="name"
								className="border-[1px] border-cyan-700 rounded-sm px-1.5 py-1"
							/>
						</div>
						<div>
							<p className="font-semibold text-lg">Beri rating:</p>
							<span className="flex items-center">
								<AiOutlineStar
									className="cursor-pointer"
									color="gold"
									size={40}
								/>
								<AiFillStar
									color="gold"
									size={40}
								/>
								<AiOutlineStar
									className="cursor-pointer"
									color="gold"
									size={40}
								/>
								<AiOutlineStar
									className="cursor-pointer"
									color="gold"
									size={40}
								/>
								<AiOutlineStar
									className="cursor-pointer"
									color="gold"
									size={40}
								/>
								<AiOutlineStar
									className="cursor-pointer"
									color="white"
									size={40}
								/>
							</span>
						</div>
						<div className="grid grid-cols-2 button_grid gap-3">
							<button
								onClick={handleButtonReview}
								className={`${
									reviewList.includes("Price")
										? "bg-cyan-800 !text-white"
										: null
								}`}
							>
								Price
							</button>
							<button
								className={`${
									reviewList.includes("Service")
										? "bg-cyan-800 !text-white"
										: null
								}`}
								onClick={handleButtonReview}
							>
								Service
							</button>
							<button
								className={`${
									reviewList.includes("Comfortable")
										? "bg-cyan-800 !text-white"
										: null
								}`}
								onClick={handleButtonReview}
							>
								Comfortable
							</button>
							<button
								className={`${
									reviewList.includes("Cleanliness")
										? "bg-cyan-800 !text-white"
										: null
								}`}
								onClick={handleButtonReview}
							>
								Cleanliness
							</button>
							<button
								className={`${
									reviewList.includes("Responsive")
										? "bg-cyan-800 !text-white"
										: null
								}`}
								onClick={handleButtonReview}
							>
								Responsive
							</button>
							<button
								className={`${
									reviewList.includes("Communicative")
										? "bg-cyan-800 !text-white"
										: null
								}`}
								onClick={handleButtonReview}
							>
								Communicative
							</button>
						</div>
					</div>
					<div className="flex flex-col grow">
						<label htmlFor="review_text">Tambahkan ulasan anda:</label>
						<textarea
							name="review_text"
							id="review_text"
							cols="30"
							rows="10"
							className="p-2 border-[1px] border-cyan-700"
						></textarea>
					</div>
				</div>
				<button className="rounded-full w-fit block bg-purple-800 text-white px-7 py-1 mt-4 ml-auto">
					Save
				</button>
			</div>
		</div>
	);
};
