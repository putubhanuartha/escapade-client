import { useState, useEffect, createContext } from "react";
import Header from "./components/navigation/Header";
import Sidebar from "./components/navigation/Sidebar";
import MainPage from "./pages/main_pages/MainPage";
export const GlobalAppContext = createContext();
function App() {
	const [isSideBarActive, setIsSidebarActive] = useState(false);
	const [toggleTopBar, setToggleTopBar] = useState(false);
	const [isScrollUp, setIsScrollUp] = useState(true);
	const [isOnTop, setIsOnTop] = useState(true);

	useEffect(() => {
		let prevValueScrollY = null;
		const scroll = window.addEventListener("scroll", () => {
			setIsOnTop(checkIsOnTop(window.scrollY));
			setIsScrollUp(checkIsScrollUp(prevValueScrollY, window.scrollY, 670));
			prevValueScrollY = window.scrollY;
		});
		return () => {
			removeEventListener("scroll", scroll);
		};
	}, []);
	function checkIsScrollUp(prev, recent, windowScroll) {
		if (recent > windowScroll && recent > prev) {
			return false;
		}
		return true;
	}
	function checkIsOnTop(windowScroll) {
		return windowScroll == 0 ? true : false;
	}
	return (
		<div className="h-[500vh]">
			<GlobalAppContext.Provider
				value={{
					isSideBarActive,
					setIsSidebarActive,
					toggleTopBar,
					setToggleTopBar,
					isScrollUp,
					isOnTop,
				}}
			>
				<Header/>
				<Sidebar/>
				<MainPage/>
			</GlobalAppContext.Provider>
		</div>
	);
}

export default App;
