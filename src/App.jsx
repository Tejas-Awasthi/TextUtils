import { useState } from "react";
import "./App.css";
import TextArea from "./components/TextArea";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <section className="dark:text-gray-600 dark:bg-slate-900 bg-slate-300 text-gray-800 body-font relative min-h-screen">
        <div className="container px-4 sm:px-5 py-10 sm:py-16 md:py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-3 dark:text-slate-200 text-slate-800">
              TextUtils
            </h1>
            <p className="max-w-lg dark:text-slate-300 text-slate-700 mx-auto leading-relaxed text-lg sm:text-2xl">
              We do what you want.
            </p>
          </div>
          <div className="w-full sm:w-5/6 md:w-2/3 mx-auto">
            <TextArea />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;