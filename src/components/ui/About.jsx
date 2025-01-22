"use client";
import React, { useState } from "react";
import { Container } from "../common/Container";
import about_image from "../../../public/images/about_image.png";
import Image from "next/image";
import Title from "../common/heading/Title";
import Description from "../common/heading/Description";
import ProgressBar from "../common/ProgressBar";
const skills = [
  { name: "HTML", level: 80 },
  { name: "CSS", level: 70 },
  { name: "JavaScript", level: 90 },
  { name: "React.js", level: 85 },
];

export default function About() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <Container>
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Section - Profile Image */}
        <div className="flex-1">
          <Image src={about_image} alt="Profile" />
        </div>

        {/* Right Section - Skills */}
        <div className="flex-1 ml-0 md:ml-8 mt-6 md:mt-0">
          <Title className="pb-2 sm:pb-[15px] text-left">About Me</Title>
          <div className="flex items-center justify-center">
            <Description className="pb-2 sm:pb-[15px] text-left">
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium.
              Turpis tempus pharetra
            </Description>
          </div>
          <div>
            {skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-base sm:text-2xl text-text-black dark:text-text-white">
                    {skill.name}
                  </span>
                </div>
                <ProgressBar value={skill.level} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
