const Alert = (props) => {
	// const [showModal, setShowModal] = useState(true);
	const hideModal = () => {
		props.showModalProp1(false);
	};
	return (
		<div
			role="alert"
			className={`absolute font-inter opacity-${props.opacity} transition-opacity ease-in-out duration-300 top-0 left-0 right-0 flex items-center gap-2 sm:gap-3 max-w-xl mx-3 sm:mx-auto my-4 
  dark:bg-emerald-700 bg-green-300 border border-slate-500 rounded-2xl sm:rounded-full 
  py-2 px-4 text-black dark:text-white`}
		>
			{/* Icon */}
			<span className="shrink-0 mt-0.5 sm:mt-0">
				<svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://w3.org">
					<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
					<path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			</span>

			{/* Message */}
			<div className="flex-1 text-sm sm:text-base leading-snug">{props.message}</div>

			{/* Close Button */}
			<button className="shrink-0 ml-auto cursor-pointer hover:dark:bg-emerald-800 hover:bg-green-400 rounded-full p-2" onClick={hideModal}>
				<svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 stroke-2" stroke="currentColor">
					<path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" strokeLinecap="round" />
				</svg>
			</button>
		</div>
	);
};

export default Alert;
