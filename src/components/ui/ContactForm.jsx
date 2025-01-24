import { Container } from "../common/Container";
import Description from "../common/heading/Description";
import Title from "../common/heading/Title";

export default function ContactForm() {
  return (
    <Container>
      <Title className="pb-[15px]">Lets Design Together</Title>
      <div className="flex items-center justify-center">
        <Description className="pb-8 sm:pb-[48px]">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </Description>
      </div>

      {/* Email Input and Button */}
      <div className="flex justify-center flex-wrap gap-y-5 items-center gap-x-[25px]">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-full max-w-md py-3 sm:py-4 md:py-5 px-4 text-sm text-[#797979] border border-[#AFAFAF] bg-background-lighter dark:bg-text-white rounded-[14px] outline-none"
        />
        <button className="bg-text-orange text-text-white px-6 py-3 md:py-4 sm:py-5 font-medium text-lg sm:text-2xl rounded-[14px] hover:bg-orange-600 transition">
          Contact Me
        </button>
      </div>
    </Container>
  );
}
