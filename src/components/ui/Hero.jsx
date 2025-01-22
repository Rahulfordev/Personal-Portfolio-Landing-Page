import { Container } from "../common/Container";
import hero_image from "../../../public/images/hero_image.png";
import Image from "next/image";
import Description from "../common/heading/Description";
import Button from "../common/button/Button";

export default function Hero() {
  return (
    <Container>
      <div className="flex flex-col gap-y-10 md:gap-y-0 md:flex-row items-center md:gap-x-5 lg:gap-x-20 md:justify-between">
        <div>
          <div className="text-center md:text-left">
            <span className="text-lg sm:text-2xl font-semibold text-text-black dark:text-text-white">
              Hi I am{" "}
            </span>
            <h4 className="font-semibold text-text-orange text-2xl sm:text-[32px]">
              Muhammad Umair
            </h4>
            <div className="text-text-black dark:text-text-white font-bold text-6xl lg:text-8xl mb-7">
              <h1>UI & UX</h1>
              <h1 className="lg:text-center">Designer</h1>
            </div>

            <Description className="pb-3 sm:pb-[22px] md:text-left max-w-[690px]">
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium.
              Turpis tempus pharetra
            </Description>

            <Button variant="primary">Hire Me</Button>
          </div>
        </div>

        <div>
          <Image src={hero_image} alt="hero_image" />
        </div>
      </div>
    </Container>
  );
}
