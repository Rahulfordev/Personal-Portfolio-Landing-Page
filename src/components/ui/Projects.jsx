"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import project_one from "../../../public/images/project_1.png";
import project_two from "../../../public/images/project_2.png";
import project_three from "../../../public/images/project_3.png";
import Image from "next/image";
import Title from "../common/heading/Title";
import Description from "../common/heading/Description";
import { Container } from "../common/Container";

const projects = [
  {
    id: 1,
    category: "Web Design",
    image: project_one,
    title: "Adding Care through Voice Calls.",
  },
  {
    id: 2,
    category: "Web Design",
    image: project_two,
    title: "Business Landing Page Design",
  },
  {
    id: 3,
    category: "UI/UX",
    image: project_three,
    title: "Ecom Web Page Design",
  },
  {
    id: 4,
    category: "Graphic Design",
    image: project_one,
    title: "Business Landing Page Design",
  },
  {
    id: 5,
    category: "UI/UX",
    image: project_two,
    title: "Ecom Web Page Design",
  },
];

const categories = [
  "All",
  "UI/UX",
  "Web Design",
  "App Design",
  "Graphic Design",
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <Container>
      <Title className="pb-4 sm:pb-[22px]">My Projects</Title>
      <div className="flex items-center justify-center">
        <Description className="pb-8 sm:pb-[59px]">
          Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
          mauris est risus lectus. Phasellus consequat urna tellus
        </Description>
      </div>
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-5 py-[10px] rounded-[12px] border-background-gray border-[.4px] font-semibold transition-all duration-300 ${
              activeCategory === category
                ? "bg-orange-500 text-white"
                : "bg-background-lighter text-text-black"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className=""
          >
            <Image
              src={project.image}
              alt={project.title}
              height={480}
              width={445}
              className="rounded-lg mb-4"
            />
            <h3 className="text-lg text-left font-normal text-text-orange">
              {project.category}
            </h3>
            <p className="text-text-black text-left dark:text-text-white font-bold">
              {project.title}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
}
