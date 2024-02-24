// import myimage from "./assets/Logo.png";
import cyberpunk from "./assets/CYBERPUNK.png";
import Typing from "./Typing";
import myimage from "./assets/Logo.png";

import "../src/App.css";

// import tables from "./assets/Insta post Backgrond.png";
const Hero = () => {
  return (
    <>
      <div className="custom flex items-center w-[100%] h-[80%] justify-between heroSection">
        <div className="w-[64%] h-full flex items-center justify-center ">
          <div className=" h-[70%] w-[95%] flex flex-col relative justify-end items-end overflow-hidden mr-0">
            <div className=" w-full h-[60%] m-1 p-1 flex justify-center items-end flex-col">
              <h1 className="text-white text-right text-6xl commonFontLight">
                CISCO X LPU iGEN's
              </h1>

              <img src={myimage} alt="Logo" className="  w-auto h-44 mr-2" />
            </div>
            <div className="  w-full h-[20%] m-1 p-1 ">
              <h1 className="text-right text-xl typingText mr-3 w-[100%]">
                <Typing></Typing>
              </h1>
            </div>
            <button className="errorBox">
              <h1>ERROR 404</h1>
            </button>
          </div>
        </div>
        <div className=" w-[36%] h-[100%] overflow-hidden relative object-cover">
          <img
            className=" scale-[3.2] absolute  bottom-0 right-0 object-cover "
            src={cyberpunk}
            alt="ai_img"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Hero;
