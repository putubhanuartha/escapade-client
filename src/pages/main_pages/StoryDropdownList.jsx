import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import { theirStoryData } from "../../model/theirStoryData";
import useWindowSize from "../../useWindowSize";
function StoryDropdownList() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [windowSize] = useWindowSize();
	return (
		<div className="container mx-auto py-6 bg-gray-100">
			<h2 className="text-center font-poppins text-xl font-semibold md:text-start md:px-11 lg:px-0 md:text-2xl lg:text-3xl">
				Their Story
			</h2>
			<div className="mt-7">
				{theirStoryData.map((el, index) => {
					return (
						<ListStory
							windowSize={windowSize}
							title={el.title}
							url={el.url}
							text={el.text}
							index={index}
							propsState={{ activeIndex, setActiveIndex }}
						/>
					);
				})}
			</div>
		</div>
	);
}
function ListStory(props) {
	const { activeIndex, setActiveIndex } = props.propsState;

	return (
		<div
			className={`border-t-[0.5px] relative overflow-hidden ${
				props.index === activeIndex ? "h-[25rem] md:h-[30rem]" : "h-24 md:h-28"
			} border-gray-500 px-5 md:px-14 lg:px-28 py-6 cursor-pointer hover:bg-violet-100  transition-all duration-700`}
		>
			<div
				onClick={() => {
					if (props.index === activeIndex) {
						setActiveIndex(-1);
					} else {
						setActiveIndex(props.index);
					}
				}}
				className={`flex justify-between items-center group ${
					props.index === activeIndex ? "translate-y-12" : "translate-y-0"
				} transition-transform duration-400`}
			>
				<p className="font-poppins font-semibold md:text-xl lg:text-2xl">
					{props.title}
				</p>
				<button className="border-[0.8px] border-indigo-600 p-3 md:p-4 lg:p-5 group-hover:bg-indigo-400 duration-500 transition-colors">
					{props.index === activeIndex ?<SlArrowUp size={23}/> : <SlArrowDown size={23} />}
				</button>
			</div>
			<div
				className={`mt-10 flex justify-between gap-5 w-full left-0  ${
					props.index === activeIndex ? "translate-y-12" : "translate-y-0"
				} transition-transform duration-500`}
			>
				<p className="max-w-md font-poppins">{props.text}</p>
				{props.windowSize === ("xs" || "sm") ? null : (
					<img
						src={props.url}
						alt={props.title}
						className="w-64 h-60 object-cover"
					/>
				)}
			</div>
		</div>
	);
}
export default StoryDropdownList;
