// import { useDispatch } from "react-redux";
// import { additems } from "../utils/cartslice";

const Items = ({ datas }) => {
  return (
    <>
      <div className="flex justify-between   bg-[#161f2a] w-[100%]  shadow-sm rounded-sm mt-3 mr-0 ml-0">
        <div className="p-2">{datas.answer}</div>
      </div>
    </>
  );
};
export default Items;
