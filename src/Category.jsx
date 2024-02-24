// import { useState } from "react";
import Items from "./Items";

const Category = ({ data, showitems, setgetindex }) => {
  // const [showitems, setshowitems] = useState(false);
  const handleclick = () => {
    setgetindex();
  };
  return (
    <>
      <div className=" text-white   w-[65%] mx-auto my-4 bg-[#09131d]  shadow-lg p-4 rounded-md">
        <div
          className="w-[100%] flex justify-between cursor-pointer"
          onClick={handleclick}
        >
          <span>
            {console.log(data)}
            {data.question} ?
          </span>
          <span>{"⏬"}</span>
        </div>
        <div className="w-[100%]">{showitems && <Items datas={data} />}</div>
      </div>
    </>
  );
};

export default Category;
