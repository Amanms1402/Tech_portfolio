"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Full Stack Skills",
    id: "full-stack-skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>Tailwind CSS</li>
        <li>NextJS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>NodeJS</li>
        <li>ExpressJS</li>
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>Django</li>
      </ul>
    ),
  },
  {
    title: "ML Skills",
    id: "ml-skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Pandas</li>
        <li>Python</li>
        <li>TensorFlow</li>
        <li>Scikit-learn</li>
        <li>PyTorch</li>
        <li>Scikit-learn</li>
        <li>NumPy</li>
        <li>Googlle Cloud Platform</li>
       
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Vellore Institute Of Technology, Bhopal | B.Tech (CSE) | C.G.P.A = 8.02</li>
        <li>The Aditya Birla Public School, Renukoot | Class (XII) | Percentage = 86.6%</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li><a href="https://drive.google.com/file/d/1DFBKdMpSiPcSBpXo2AtEvefrHvicTKXt/view?usp=sharing">HackerRank Certified Python Coder | HackerRank</a></li>
        <li><a href="https://drive.google.com/file/d/1iOzb_kBySDKagO5yBAkd44sOCXN3zo6x/view?usp=sharing">Google Cloud Computing Foundation | Google Cloud</a></li>
        <li><a href="https://drive.google.com/file/d/1Xv8rZJZNk3kk_qymTpKR_9WQ6HvbuPcW/view?usp=sharing">The Bits and Bytes Of Computer Networking | Coursera</a></li>
      </ul>
    ),
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("full-stack-skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/avento.gif" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            An enthusiastic expert in computer science with a strong background in machine learning and front-end development. Independently oversees full-stack projects and writes accurate, well-tested code. Promotes creativity, encourages teamwork, and exchanges new ideas, all of which improve team relations. Efficient at fostering creativity and harmony in group settings.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("full-stack-skills")}
              active={tab === "full-stack-skills"}
            >
              Web Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("ml-skills")}
              active={tab === "ml-skills"}
              style={{ marginRight: "1rem" }} 
            >
              ML Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
              style={{ marginRight: "1rem" }} 
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
              style={{ marginRight: "1rem" }} 
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

