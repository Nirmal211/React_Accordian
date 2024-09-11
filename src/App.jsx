import React from "react";
import Accordian from "./components/Accordian";

const App = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1 className="text-3xl sm:text-6xl font-bold mt-20">
        React FAQ - Accordian
      </h1>
      <Accordian />
    </div>
  );
};

export default App;
