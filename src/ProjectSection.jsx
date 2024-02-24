import { useState, useRef } from "react";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Palvinder Singh",
    description: "Founder & CEO - Secuneus Tech. | Ethical Hacking Trainer",
    image:
      "https://media.licdn.com/dms/image/C5103AQGGuaQxQwuW4g/profile-displayphoto-shrink_800_800/0/1545386932124?e=1701907200&v=beta&t=ZfrYZgJe5UjMfCR-Pks_J9dLU3PwlK_GZLlMGX0ufdY",
    tag: ["All", "Cyber"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Dr.Gulshan Kumar",
    description:
      "ostdoctoral Researcher at Università degli Studi di Padova | Cisco NetAcad Trainer",
    image:
      "https://media.licdn.com/dms/image/C4D03AQECXg-qJgMNdg/profile-displayphoto-shrink_800_800/0/1618688651266?e=1701907200&v=beta&t=U215XIsRbwwcD6ITMd8dhZm709G4nOrRaW4l5C33UkI",
    tag: ["All", "Cyber"],
    gitUrl: "/",
    previewUrl: "/",
  },
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div id="border border-white projects ml-3 ">
      <div className="text-4xl font-bold text-[#13FBD3] text-center mt-10 mb-10 ">
        SPEAKERS
      </div>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Cyber"
          isSelected={tag === "Cyber"}
        />
      </div>
      <div
        ref={ref}
        className="  flex items-center justify-center h-[28rem] relative"
      >
        <div className="  h-[26rem] flex">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <div className="p-2 h-[18rem] ">
                <div className="border border-black border-x-2  p-5 h-96 bg-white  flex flex-col justify-center items-center rounded-lg shadow-lg">
                  <div className="border border-black m-3 object-fit relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-fit mb-2 rounded-t-lg relative "
                    />
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm">{project.description}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <img
                      src="/path/to/logo.png" // Add the path to your logo image
                      alt="Logo"
                      className="w-8 h-8"
                    />
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
