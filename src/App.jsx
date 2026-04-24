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
	return (
		<>
			<Navbar />
			{/* ALERT */}
			<div className="container font-inter relative h-20 mx-auto">{message && <Alert opacity={opacity} message={message} showModalProp1={displayModal} />}</div>
			<section className="dark:text-gray-600 dark:bg-slate-900 bg-slate-300 text-gray-800 font-inter body-font relative min-h-screen">
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
