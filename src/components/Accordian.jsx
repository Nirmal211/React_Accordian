import React, { useState } from "react";
import data from "../utils/data.json";
import { Qna } from "./Qna";

const Accordian = () => {
  const [showIndex, setShowIndex] = useState(-1);

  const handleClick = (index) => {
    setShowIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="w-[80vw] mt-20">
      {data.map((data, index) => {
        return (
          <Qna
            data={data}
            key={index}
            showIndex={index === showIndex}
            handleClick={() => handleClick(index)}
          />
        );
      })}
    </div>
  );
};

export default Accordian;
