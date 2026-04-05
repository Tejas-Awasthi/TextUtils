import React, { useState } from "react";

const TextArea = () => {
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
    let textArr = text.split(" ");
    let capitalized = textArr.map((element) => {
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
  const countWords = (newText) => {
    let words = newText.split(" ").filter((element) => {
      if (element != "") return element;
    });
    setNoWords(words.length);
  };
  const download = () => {
    const file = new Blob([text], { type: "text/plain" });
    const a = document.getElementById("dwnBtn")
    console.log(URL.createObjectURL(file));
    a.href = URL.createObjectURL(file);
    a.download = "text.txt"
  };
  const copy = () =>{
    navigator.clipboard.writeText(text);
    alert("COPIED TO CLIPBOARD!")
  }
  return (
    <>
      <div className="flex flex-wrap flex-col  -m-2">
        <div className="p-2 w-full">
          <div className="relative flex flex-col">
            <label htmlFor="message" className="leading-7 text-center w-full block text-2xl font-semibold dark:text-slate-400 text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={text}
              onChange={(e) => {
                onChange(e);
              }}
              className="w-full dark:bg-slate-800 bg-white bg-opacity-50 rounded border dark:border-slate-500 border-slate-300 dark:focus:border-slate-300 focus:border-slate-800 focus:ring-2 dark:focus:ring-slate-200 focus:ring-slate-900 h-64 text-base outline-none dark:text-white text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
        </div>
        <div className="btnWrapper flex flex-wrap mx-auto">
          <div className="p-2 w-1/4">
            <button className="flex mx-auto cursor-pointer text-white bg-slate-500 border-0 py-2 px-8 focus:outline-none hover:bg-slate-600 rounded text-lg" onClick={uppercase}>
              Uppercase
            </button>
          </div>
          <div className="p-2 w-1/4">
            <button className="flex mx-auto cursor-pointer text-white bg-slate-500 border-0 py-2 px-8 focus:outline-none hover:bg-slate-600 rounded text-lg" onClick={lowercase}>
              Lowercase
            </button>
          </div>
          <div className="p-2 w-1/4">
            <button className="flex mx-auto cursor-pointer text-white bg-slate-500 border-0 py-2 px-8 focus:outline-none hover:bg-slate-600 rounded text-lg" onClick={capitalize}>
              Capitalize
            </button>
          </div>
          <div className="p-2 w-1/4">
            <button className="flex mx-auto cursor-pointer text-white bg-slate-500 border-0 py-2 px-8 focus:outline-none hover:bg-slate-600 rounded text-lg" onClick={alternate}>
              AlTeRnAtE
            </button>
          </div>
          <div className="p-2 w-1/4">
            <button className="flex mx-auto cursor-pointer text-white bg-slate-500 border-0 py-2 px-8 focus:outline-none hover:bg-slate-600 rounded text-lg" onClick={alternate}>
              iNVERSE
            </button>
          </div>
          <div className="p-2 w-1/4">
            <a id="dwnBtn" className="flex mx-auto cursor-pointer text-white bg-slate-500 border-0 py-2 px-8 focus:outline-none hover:bg-slate-600 rounded text-lg w-fit" onClick={download}>
              Download Text
            </a>
          </div>
          <div className="p-2 w-1/4">
            <button className="flex mx-auto cursor-pointer text-white bg-slate-500 border-0 py-2 px-8 focus:outline-none hover:bg-slate-600 rounded text-lg" onClick={copy}>
              Copy to Clipboard
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start text-left w-fit mx-auto mt-8">
          <h1 className="sm:text-4xl text-2xl text-center font-medium mb-4 dark:text-slate-200 text-slate-950">Text Summary</h1>
          <p className="lg:w-2/3 dark:text-slate-300 text-slate-800 leading-relaxed text-xl">Words: {noWords}</p>
          <p className="lg:w-2/3 dark:text-slate-300 text-slate-800 leading-relaxed text-xl">Characters: {text.length}</p>
        </div>
      </div>
    </>
  );
};

export default TextArea;
