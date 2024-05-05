"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import Image from 'next/image'; // Import the Image component from next/image

const projectsData = [
  {
    id: 1,
    title: "SHOPPY (ecommerce-website )",
    description: "Unleash a new era of shopping! Powered by Next 13, Sanity & Stripe, our app elevates your journey. Browse stunning galleries, filter with ease, manage carts like a pro, checkout securely, & enjoy flawless design on any device",
    image: "/images/projects/S.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Amanms1402/SHOPPY-an-ecommerce-website-",
    previewUrl: "https://shoppy-an-ecommerce-website-r2za.vercel.app/",
  },
  {
    id: 2,
    title: "Figma Clone",
    description: "Introducing a feature-rich Figma clone that transforms design collaboration. Experience real-time magic with live cursor chat, comments, reactions, and dynamic canvas editing powered by Fabric.js and Liveblocks. Elevate your team's creativity with this innovative tool, fostering seamless communication and efficiency in the world of design",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Amanms1402/figma-clone",
    previewUrl: "https://figma-clone-nu.vercel.app/",
  },
  {
    id: 3,
    title: "Smart Attendance System",
    description: "Step into the future with my Smart Attendance System—crafted with Python, machine learning, and OpenCV. Seamlessly blending innovation and efficiency, it redefines attendance tracking, harnessing the power of technology for streamlined education or workplace management",
    image: "/images/projects/3.png",
    tag: ["All", "Machine Learning"],
    gitUrl: "https://github.com/Amanms1402/Smart-Attendance-System",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "AI Mouse",
    description: "Revolutionized human-computer interaction with my AI mouse project, utilizing hand gestures through machine learning and OpenCV. Created independently in just 9 days, showcasing innovation and a passion for pushing tech boundaries. 🚀🖐️🐭",
    image: "/images/projects/4.jpg",
    tag: ["All", "Machine Learning"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Animation Simulator",
    description: "Embark on a whimsical journey with my Fox Animation Simulator—a captivating fusion of React, HTML, CSS, and JavaScript. Witness the virtual fox gracefully run and stroll, a testament to the enchanting world where code and creativity converge, bringing a delightful creature to life",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Amanms1402/Animation-Simulator",
    previewUrl: "https://animation-simulator.vercel.app/",
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
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Machine Learning"
          isSelected={tag === "Machine Learning"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
