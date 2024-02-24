import { useState } from "react";
import Category from "./Category";

const Faq = () => {
  const [showitems, setshowitems] = useState(false);
  const [getindex, setgetindex] = useState(null);
  const datas = [
    {
      question: "WHAT IS CISCO IGEN",
      answer:
        "hfref reyfguyrfyuergfuxynyerf rfufryfgyuerfre frye fre fgefuyr fregf ufeyf gyug fyerg feryf gerygf",
    },
    {
      question: "WHAT IS CISCO IGEN",
      answer:
        "hfref reyfguyrfyuergfuxynyerf rfufryfgyuerfre frye fre fgefuyr fregf ufeyf gyug fyerg feryf gerygf",
    },
    {
      question: "WHAT IS CISCO IGEN",
      answer:
        "hfref reyfguyrfyuergfuxynyerf rfufryfgyuerfre frye fre fgefuyr fregf ufeyf gyug fyerg feryf gerygf",
    },
    {
      question: "WHAT IS CISCO IGEN",
      answer:
        "hfref reyfguyrfyuergfuxynyerf rfufryfgyuerfre frye fre fgefuyr fregf ufeyf gyug fyerg feryf gerygf",
    },
    {
      question: "WHAT IS CISCO IGEN",
      answer:
        "hfref reyfguyrfyuergfuxynyerf rfufryfgyuerfre frye fre fgefuyr fregf ufeyf gyug fyerg feryf gerygf",
    },
  ];

  return (
    <>
      <div className="text-4xl font-bold text-[#13FBD3] text-center mt-10 mb-10 ">
        FAQ
      </div>
      <div className="flex ">
        <div className=" w-6/12 mx-auto my-4 bg-[#161f2a] shadow-lg p-4 ">
          {datas.map((element, index) => (
            <Category
              showitems={index === getindex ? true : false}
              setgetindex={() => setgetindex(index)}
              key={index}
              data={element}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;
