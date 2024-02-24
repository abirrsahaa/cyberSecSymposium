import { TypeAnimation } from "react-type-animation";
import "./App.css";

const Typing = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "HACK OR GET HACKED",
        2500, // wait 1s before replacing "Mice" with "Hamsters"
      ]}
      wrapper="span"
      speed={50}
      style={{
        fontSize: "2em",
        display: "inline-block",
        fontFamily: "bender-light",
      }}
      repeat={Infinity}
    />
  );
};

export default Typing;
