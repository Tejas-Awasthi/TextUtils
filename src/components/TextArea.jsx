import { useState } from "react";

const TextArea = (props) => {
	const [text, setText] = useState("");
	const [noWords, setNoWords] = useState(0);
	const onChange = (e) => {
		let newText = e.target.value;
		setText(newText);
		countWords(newText);
	};
	const uppercase = () => {
		setText(text.toUpperCase());
	};
	const lowercase = () => {
		setText(text.toLowerCase());
	};
	const capitalize = () => {
		let capitalized = text.split(" ").map((element) => {
			return element.charAt(0).toUpperCase() + element.slice(1);
		});
		setText(capitalized.join(" "));
	};
	const alternate = () => {
		let newText = "";
		let toggle = true;
		for (let i = 0; i < text.length; i++) {
			newText = toggle ? newText + text.charAt(i).toUpperCase() : newText + text.charAt(i).toLowerCase();
			toggle = !toggle;
		}
		setText(newText);
	};
	const inverse = () => {
		let newText = "";
		for (let i = 0; i < text.length; i++) {
			let ch = text.charAt(i);
			newText += ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase();
		}
		setText(newText);
	};
	const countWords = (newText) => {
		let words = newText.split(" ").filter((element) => {
			if (element != "") return element;
		});
		setNoWords(words.length);
	};
	const download = () => {
		const file = new Blob([text], { type: "text/plain" });
		const a = document.getElementById("dwnBtn");
		console.log(URL.createObjectURL(file));
		a.href = URL.createObjectURL(file);
		a.download = "text.txt";
	};
	const copy = () => {
		navigator.clipboard.writeText(text);

		props.showModalProp(true);
		setTimeout(() => {
			props.showModalProp(false);
		}, 2700);
	};

	const btnClass = "w-full cursor-pointer text-white bg-slate-500 border-0 py-2 px-2 focus:outline-none hover:bg-slate-600 rounded text-sm md:text-base lg:text-lg overflow-hidden transition-colors duration-150";

	return (
		<>
			<div className="flex font-inter flex-wrap flex-col gap-3">
				<div className="w-full">
					<label htmlFor="message" className="leading-7 text-center w-full block text-xl sm:text-2xl font-semibold dark:text-slate-400 text-gray-700 mb-2">
						Message
					</label>
					<textarea
						id="message"
						name="message"
						value={text}
						onChange={(e) => {
							onChange(e);
						}}
						className="w-full dark:bg-slate-800 bg-white bg-opacity-50 rounded border dark:border-slate-500 border-slate-300 dark:focus:border-slate-300 focus:border-slate-800 focus:ring-2 dark:focus:ring-slate-200 focus:ring-slate-900 h-48 sm:h-64 text-base outline-none dark:text-white text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
					></textarea>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-2">
					<button className={btnClass} onClick={uppercase}>
						Uppercase
					</button>
					<button className={btnClass} onClick={lowercase}>
						Lowercase
					</button>
					<button className={btnClass} onClick={capitalize}>
						Capitalize
					</button>
					<button className={btnClass} onClick={alternate}>
						AlTeRnAtE
					</button>
					<button className={btnClass} onClick={inverse}>
						iNVERSE
					</button>
					<a id="dwnBtn" className={`${btnClass} text-center whitespace-nowrap`} onClick={download} href="#">
						Download Text
					</a>
					<button className={`${btnClass} col-span-2 md:col-span-2`} onClick={copy}>
						Copy to Clipboard
					</button>
				</div>

				<div className="flex flex-col items-center sm:items-start text-center sm:text-left mt-4 border-t dark:border-slate-700 border-slate-300 pt-4">
					<h1 className="sm:text-4xl text-2xl text-center font-medium mb-4 dark:text-slate-200 text-slate-950">Text Summary</h1>
					<p className="lg:w-2/3 dark:text-slate-300 text-slate-800 leading-relaxed text-xl">Words: {noWords}</p>
					<p className="lg:w-2/3 dark:text-slate-300 text-slate-800 leading-relaxed text-xl">Characters: {text.length}</p>
				</div>
			</div>
		</>
	);
};

export default TextArea;
