import CountdownTimer from "./Countdown";
import "../src/App.css";

const Information = () => {
  return (
    <>
      <div className="w-[100vw] h-[130vh] commonBG">
        {/* countdown */}
        <div className=" h-[20%] w-[100%] flex flex-col items-center justify-center">
          {/* d day */}
          <div>
            <h1 className="w-[100%] h-[100%] text-6xl text-white commonFontLight">
              COUNTDOWN TO D-DAY
            </h1>
          </div>
          {/* timer */}
          <div>
            <CountdownTimer></CountdownTimer>
          </div>
        </div>

        {/* information */}
        <div className=" h-[80%] w-[100%] flex p-8">
          {/* left */}
          <div className="   h-[100%] w-[50%] p-1 m-1 ">
            <div className="  m-1 p-1 h-[100%] w-[100%] ">
              <div className="   text-left p-5">
                <h1 className="font-bold joinAssembly text-10xl mb-10 text-[#12f8d0]">
                  Join The <br></br>ASSEMBLY
                </h1>
                <div className="  welcomeText text-[#12e2bf] text-xl">
                  <p className="text-left">
                    We welcome you all to the greatest workshop in Lovely
                    Professional University, Cisco x LPlJiGen CyberSec Symposium
                    1.0 2Ø23.
                  </p>
                </div>
                <br></br>
                <div className="  text-white commonFontLight text-xl ">
                  <p>
                    As Cisco is known for its expertise in networking and
                    security solutions, this event is primarily centered around
                    tutorials related to cybersecurity trends, technologies, and
                    best practices of it.
                    <br></br>
                    <br></br>
                    This event focuses on instilling new skills in our
                    participants through a 14-day long boot camp where experts
                    and professionals will guide them and help them to explore
                    the latest trends in cybersecurity. Focusing on creativity,
                    innovation, and collaboration, this event is a boon for all
                    the aspiring coders out there.
                  </p>
                </div>
                <button className="text-white p-5 rounded-md  focus:outline-none bookTicket mt-10">
                  Book Tickets
                </button>
              </div>
            </div>
          </div>

          {/* right */}
          <div className=" p-1 m-1 h-[100%] w-[50%]">
            {/* top */}
            <div className="flex justify-between commonFontLight p-10">
              {/* right */}
              <div className="p-1">
                <h3 className="text-[#13d1b2] text-2xl">Date</h3>
                <h1 className="text-6xl text-[#13d1b2] ">
                  OCT 30 - <br></br>NOV 25
                </h1>
              </div>
              {/*left  */}
              <div className="p-2">
                <h3 className="text-[#13d1b2] text-2xl">Location</h3>
                <h1 className="text-6xl text-[#13d1b2]">
                  Lovely<br></br> Proffessional<br></br> University
                </h1>
              </div>
            </div>
            {/* bottom video embedded youtube */}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Information;
