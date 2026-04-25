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
		props.showModalProp(true);
		props.setMessage("Uppercase Text Style Applied!");
	};
	const lowercase = () => {
		setText(text.toLowerCase());
		props.showModalProp(true);
		props.setMessage("Lowercase Text Style Applied!");
	};
	const capitalize = () => {
		let capitalized = text.split(" ").map((element) => {
			return element.charAt(0).toUpperCase() + element.slice(1);
		});
		setText(capitalized.join(" "));
		props.showModalProp(true);
		props.setMessage("Capitalize Text Style Applied!");
	};
	const alternate = () => {
		let newText = "";
		let toggle = true;
		for (let i = 0; i < text.length; i++) {
			newText = toggle ? newText + text.charAt(i).toUpperCase() : newText + text.charAt(i).toLowerCase();
			toggle = !toggle;
		}
		setText(newText);
		props.showModalProp(true);
		props.setMessage("Alternate Text Style Applied!");
	};
	const inverse = () => {
		let newText = "";
		for (let i = 0; i < text.length; i++) {
			let ch = text.charAt(i);
			newText += ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase();
		}
		setText(newText);
		props.showModalProp(true);
		props.setMessage("Inverse Text Style Applied!");
	};
	const countWords = (newText) => {
		const words = newText.split(/\s+/).filter((word) => {
			return word.length > 0;
		});
		setNoWords(words.length);
	};
	const download = () => {
		if (!disabled) {
			const file = new Blob([text], { type: "text/plain" });
			const a = document.getElementById("dwnBtn");
			console.log(URL.createObjectURL(file));
			a.href = URL.createObjectURL(file);
			a.download = "text.txt";
			props.showModalProp(true);
			props.setMessage("Download Started!");
		}
	};
	const copy = () => {
		navigator.clipboard.writeText(text);

		props.showModalProp(true);
		props.setMessage("Copied to Clipboard!");
	};

	// <button className={`col-span-2 md:col-span-2 opacity-50 ${btnClass} cursor-not-allowed! hover:bg-slate-500! `} disabled onClick={copy}>
	let btnClass = "";
	let disabled = true;
	if (text.length > 0) {
		btnClass = `w-full cursor-pointer text-white bg-${props.color}-500 border-0 py-2 px-2 focus:outline-none hover:bg-${props.color}-600 rounded text-sm md:text-base lg:text-lg overflow-hidden transition-colors duration-150`;
		disabled = false;
	} else {
		btnClass = `w-full text-white opacity-50 cursor-not-allowed bg-${props.color}-500 border-0 py-2 px-2 focus:outline-none rounded text-sm md:text-base lg:text-lg overflow-hidden transition-colors duration-150`;
		disabled = true;
	}

	return (
		<>
			<div className="flex font-inter flex-wrap flex-col gap-3">
				<div className="w-full">
					<label htmlFor="message" className="leading-7 text-center w-full block text-xl sm:text-2xl font-semibold dark:text-slate-200 text-gray-700 mb-2">
						Message
					</label>
					<textarea
						id="message"
						name="message"
						value={text}
						onChange={(e) => {
							onChange(e);
						}}
						className={`w-full dark:bg-${props.color}-800 bg-white bg-opacity-50 rounded border dark:border-slate-500 border-slate-300 dark:focus:border-slate-300 focus:border-slate-800 focus:ring-2 dark:focus:ring-slate-200 focus:ring-slate-900 h-48 sm:h-64 text-base outline-none dark:text-white text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}
					></textarea>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-2">
					<button className={btnClass} disabled={disabled} onClick={uppercase}>
						Uppercase
					</button>
					<button className={btnClass} disabled={disabled} onClick={lowercase}>
						Lowercase
					</button>
					<button className={btnClass} disabled={disabled} onClick={capitalize}>
						Capitalize
					</button>
					<button className={btnClass} disabled={disabled} onClick={alternate}>
						AlTeRnAtE
					</button>
					<button className={btnClass} disabled={disabled} onClick={inverse}>
						iNVERSE
					</button>
					<a id="dwnBtn" className={`${btnClass} text-center whitespace-nowrap`} onClick={download}>
						Download Text
					</a>
					<button className={`col-span-2 md:col-span-2 ${btnClass}`} disabled={disabled} onClick={copy}>
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
