import { useState } from "react";
import "./App.css";
import TextArea from "./components/TextArea";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";

function App() {
	const [opacity, setOpacity] = useState(0);
	const [timeoutId, setTimeoutId] = useState(null);
	const displayModal = (flag) => {
		if (flag) {
			if (timeoutId) clearTimeout(timeoutId);

			setTimeout(() => {
				setOpacity(100);
			}, 0);

			setTimeoutId(
				setTimeout(() => {
					displayModal(false);
				}, 1700),
			);
		} else {
			setOpacity(0);
			setTimeout(() => {
				setMessage("");
			}, 300);
		}
	};
	const [message, setMessage] = useState("");
	const defaultTheme = {
		"btnBg": "bg-white dark:bg-slate-800",
		"navBg": "dark:bg-gray-900 bg-slate-200",
		"bodyBg": "dark:bg-slate-700 bg-slate-100"
	}
	const getBgClass = (key)=>{
		if (localStorage.getItem(key) !== null) {
			return localStorage.getItem(key)
		} else {
			return defaultTheme[key]
		}
	}
	const setColor = (color) =>{
		setBtnBgClass(`bg-${color}-100 dark:bg-${color}-700 hover:bg-${color}-300 dark:hover:bg-${color}-800`);
		setNavBgClass(`dark:bg-${color}-900 bg-${color}-200`);
		setBodyColor(`dark:bg-${color}-700 bg-${color}-100`);
		localStorage.setItem("btnBg", `bg-${color}-100 dark:bg-${color}-700 hover:bg-${color}-300 dark:hover:bg-${color}-800`);
		localStorage.setItem("navBg", `dark:bg-${color}-900 bg-${color}-200`);
		localStorage.setItem("bodyBg", `dark:bg-${color}-700 bg-${color}-100`);
	}
	const [btnBgClass, setBtnBgClass] = useState(getBgClass("btnBg"));
	const [navBgClass, setNavBgClass] = useState(getBgClass("navBg"));
	const [bodyColor, setBodyColor] = useState(getBgClass("bodyBg"));
	document.body.classList = bodyColor;
	const colorSwitchClick = (e) => {
		let colorClass = Array.from(e.target.classList).find((element) => {
			return element.startsWith("bg-");
		});
		let color = colorClass.split("-")[1];
		setColor(color)
	};
	return (
		<>
			<Navbar colorSwitchClick={colorSwitchClick} btnBgClass={btnBgClass} navBgClass={navBgClass} />
			{/* ALERT */}
			<div className="container font-inter relative h-20 mx-auto">{message && <Alert opacity={opacity} message={message} showModalProp1={displayModal} />}</div>
			<section className={`dark:text-gray-600 ${bodyColor} text-gray-800 font-inter body-font relative min-h-screen`}>
				<div className="container sm:px-5 p-4 mx-auto">
					<div className="flex flex-col text-center w-full mb-6 sm:mb-8">
						<h1 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-3 dark:text-slate-200 text-slate-800">TextUtils</h1>
						<p className="max-w-lg dark:text-slate-300 text-slate-700 mx-auto leading-relaxed text-lg sm:text-2xl">We do what you want.</p>
					</div>
					<div className="w-full sm:w-5/6 md:w-2/3 mx-auto">
						<TextArea showModalProp={displayModal} setMessage={setMessage} />
					</div>
				</div>
			</section>
		</>
	);
}

export default App;
