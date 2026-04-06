import { useState } from "react";

const Navbar = () => {
	const [btnText, setBtnText] = useState(() => {
		return localStorage.getItem("darkMode") === "true" ? "Light Mode" : "Dark Mode";
	});

	const html = document.documentElement;
	if (localStorage.getItem("darkMode") === "true") {
		html.classList.add("dark");
	} else {
		html.classList.remove("dark");
	}

	const toggleDark = () => {
		const isDark = html.classList.contains("dark");
		if (isDark) {
			html.classList.remove("dark");
			setBtnText("Dark Mode");
			localStorage.setItem("darkMode", false);
		} else {
			html.classList.add("dark");
			setBtnText("Light Mode");
			localStorage.setItem("darkMode", true);
		}
	};

	return (
		<header className="text-gray-600 font-inter border-b border-b-slate-400 dark:border-b-slate-600 bg-slate-200 dark:text-gray-400 dark:bg-gray-900 body-font">
			<div className="container mx-auto flex flex-row items-center justify-between px-4 py-3 sm:px-5 sm:py-4">
				<a className="flex title-font font-semibold items-center dark:text-white text-gray-900 text-lg sm:text-xl select-none">TextUtils</a>

				<button className="inline-flex cursor-pointer items-center gap-1.5 bg-white dark:bg-gray-800 border border-slate-300 dark:border-slate-600 py-1.5 px-3 focus:outline-none hover:bg-slate-100 dark:hover:bg-gray-700 rounded text-sm sm:text-base transition-colors duration-150 whitespace-nowrap" id="darkBtn" onClick={toggleDark}>
					{btnText === "Light Mode" ? (
						<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
							<circle cx="12" cy="12" r="5" />
							<path strokeLinecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
						</svg>
					) : (
						<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
						</svg>
					)}
					{btnText}
				</button>
			</div>
		</header>
	);
};

export default Navbar;
