import { FaRegPaperPlane } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import { MdOutlineLocalActivity } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
export const sidebarList = [
	{
		id: "t1",
		text: "Flights",
		icon: { FaRegPaperPlane },
		transitionAnimation: { delay: "delay-600", reverseDelay: "delay-700" },
		link: "/",
	},
	{
		id: "t2",
		text: "Hotels",
		icon: { FaHotel },
		transitionAnimation: { delay: "delay-800", reverseDelay: "delay-500" },
		link: "/",
	},
	{
		id: "t3",
		text: "Activites",
		icon: { MdOutlineLocalActivity },
		transitionAnimation: { delay: "delay-1000", reverseDelay: "delay-300" },
		link: "/",
	},
	{
		id: "t4",
		text: "About Us",
		icon: { FcAbout },
		transitionAnimation: { delay: "delay-1200", reverseDelay: "delay-100" },
		link: "/about-us",
	},
	{
		id: "t5",
		text: "FAQ",
		icon: { AiOutlineQuestionCircle },
		transitionAnimation: { delay: "delay-1400" },
		link: "/faq",
	},
];
