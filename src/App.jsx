import { useState, useEffect, createContext } from "react";
import Header from "./components/navigation/Header";
import Sidebar from "./components/navigation/Sidebar";
import MainPage from "./pages/main_pages/MainPage";
import AuthenticationPops from "./components/AuthenticationPops";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HotelSearchPage from "./pages/hotel_search_page/HotelSearchPage";
import Footer from "./pages/main_pages/Footer";
import FlightSearchPage from "./pages/flight_search_page/FlightSearchPage";
import CitySearchPage from "./pages/city_search_page/CitySearchPage";
import BookingComponent from "./components/BookingComponent";
export const GlobalAppContext = createContext();
function App() {
	const [isDisplayAuthBox, setIsDisplayAuthBox] = useState(false);
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
		<GlobalAppContext.Provider
			value={{
				isDisplayAuthBox,
				setIsDisplayAuthBox,
				isSideBarActive,
				setIsSidebarActive,
				toggleTopBar,
				setToggleTopBar,
				isScrollUp,
				isOnTop,
			}}
		>
			<AuthenticationPops />
			<Header />
			<Sidebar />
			<RouterProvider
				router={createBrowserRouter([
					{ path: "/", element: <MainPage /> },
					{ path: "/search-hotel", element: <HotelSearchPage /> },
					{ path: "/search-flight", element: <FlightSearchPage /> },
					{
						path: "/search-city/*",
						element: <CitySearchPage />,
					},
					{ path: "/booking/*", element: <BookingComponent /> },
				])}
			/>
			<Footer />
		</GlobalAppContext.Provider>
	);
}

export default App;
