export default function SidebarList(props) {
	const isSideBarActive = props.isSideBarActive;
	const { delay, reverseDelay } = props.transitionAnimation;
	return (
		<li
			key={props.id}
			className={`${
				isSideBarActive
					? `translate-x-0 opacity-1 ${delay}`
					: `translate-x-32 opacity-0 ${reverseDelay}`
			} duration-500`}
		>
			<a className="font-poppins font-medium text-teal tracking-wide text-2xl">
				{props.text}
			</a>
		</li>
	);
}