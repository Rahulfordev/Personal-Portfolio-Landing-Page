import { Container } from "../common/Container";
import Description from "../common/heading/Description";
import Title from "../common/heading/Title";
import ServiceCard from "../common/ServiceCard";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPencilRuler,
  FaPalette,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "UI/UX",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },
    {
      icon: <FaPencilRuler />,
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },
    {
      icon: <FaMobileAlt />,
      title: "App Design",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },
    {
      icon: <FaPalette />,
      title: "Graphic Design",
      description:
        "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },
  ];

  return (
    <Container>
      <Title className="pb-2 sm:pb-[15px]">Services</Title>
      <div className="flex items-center justify-center">
        <Description className="pb-6 sm:pb-[49px]">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </Description>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </Container>
  );
}
