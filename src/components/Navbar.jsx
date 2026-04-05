import { useState } from "react";

const Navbar = () => {
	const [btnText, setBtnText] = useState("Turn on Dark Mode")
	const toggleDark = () => {
		const html = document.querySelector('html')
		html.classList.toggle("dark");
		html.classList.contains("dark") ? setBtnText("Turn On Light Mode") : setBtnText("Turn on Dark Mode")
	};
	return (
		<header className="text-gray-600 border-b border-b-slate-400 dark:border-b-slate-600 bg-slate-200 dark:text-gray-400 dark:bg-gray-900 body-font">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<a className="flex title-font font-medium items-center dark:text-white text-gray-900 mb-4 md:mb-0">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
						<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
					</svg>
					<span className="ml-3 text-xl">Tailblocks</span>
				</a>
				<nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 dark:md:border-gray-700 flex flex-wrap items-center text-base justify-center">
					<a className="mr-5 hover:text-gray-900 dark:hover:text-white cursor-pointer">First Link</a>
					<a className="mr-5 hover:text-gray-900 dark:hover:text-white cursor-pointer">Second Link</a>
					<a className="mr-5 hover:text-gray-900 dark:hover:text-white cursor-pointer">Third Link</a>
					<a className="mr-5 hover:text-gray-900 dark:hover:text-white cursor-pointer">Fourth Link</a>
				</nav>
				<button className="inline-flex cursor-pointer items-center bg-white dark:bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-slate-100 dark:hover:bg-gray-700 rounded text-base mt-4 md:mt-0" id="darkBtn" onClick={toggleDark}>
					{btnText}
					<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
						<path d="M5 12h14M12 5l7 7-7 7"></path>
					</svg>
				</button>
			</div>
		</header>
	);
};

export default Navbar;
