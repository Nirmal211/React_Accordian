export const Qna = ({ data, showIndex, handleClick }) => {
  return (
    <div className="border border-black mb-10">
      <div className="flex justify-between items-center px-5 py-2 ">
        <h2 className="sm:text-xl text-sm">{data.Question}</h2>
        <span className="text-xl cursor-pointer" onClick={handleClick}>
          {showIndex ? "👆🏻" : "👇🏻"}
        </span>
      </div>
      {showIndex && (
        <p className="px-5 py-2 sm:text-xl text-sm ">{data.Answer}</p>
      )}
    </div>
  );
};
