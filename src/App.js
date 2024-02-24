import "./App.css";
import Faq from "./Faq";
import Hero from "./Hero";
import ImageSlider from "./ImageSlider";
import Information from "./Information";
import Navbar from "./Navbar";
import ProjectsSection from "./ProjectSection";
import Tickets from "./Tickets";
// import Sliding from "./Sliding";

function App() {
  return (
    <>
      <div className="bg-[#161f2a]  h-[115vh]">
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
      <div className="bg-[#161f2a]">
        <Information></Information>
        <ImageSlider></ImageSlider>
        <ProjectsSection></ProjectsSection>
        <Tickets></Tickets>
        <Faq></Faq>
      </div>
    </>
  );
}

export default App;
