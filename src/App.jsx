import { useState } from "react";
import "./App.css";
import TextArea from "./components/TextArea";
import Navbar from "./components/Navbar";

function App() {
	const [text, setText] = useState("Enter Text Here...");

	return (
		<>
			<Navbar />
			<section className="dark:text-gray-600 dark:bg-slate-900 bg-slate-300 text-gray-800 body-font relative">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-col text-center w-full mb-8">
						<h1 className="sm:text-5xl text-2xl font-medium mb-4 dark:text-slate-200 text-slate-800">TextUtils</h1>
						<p className="lg:w-2/3 dark:text-slate-300 text-slate-700 mx-auto leading-relaxed text-2xl">We do what you want.</p>
					</div>
					<div className="lg:w-2/3 md:w-2/3 mx-auto">
						<TextArea />
					</div>
				</div>
			</section>
		</>
	);
}

export default App;
