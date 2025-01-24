"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { Container } from "../common/Container";
import Title from "../common/heading/Title";
import Description from "../common/heading/Description";
import client_image from "../../../public/images/testimonial_image.png";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO",
    quote:
      "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum.",
    image: client_image,
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "CTO",
    quote:
      "Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
    image: client_image,
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "Product Manager",
    quote:
      "In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum.",
    image: client_image,
  },
  {
    id: 4,
    name: "Robert Brown",
    role: "Designer",
    quote:
      "Lorem ipsum dolor sit amet consectetur. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
    image: client_image,
  },
];

const TestimonialSlider = () => {
  const paginationRef = useRef(null);

  useEffect(() => {
    if (paginationRef.current) {
      const swiperEl = document.querySelector(".swiper");
      if (swiperEl?.swiper) {
        swiperEl.swiper.params.pagination.el = paginationRef.current;
        swiperEl.swiper.pagination.init();
        swiperEl.swiper.pagination.render();
        swiperEl.swiper.pagination.update();
      }
    }
  }, []);

  return (
    <Container>
      <Title className="pb-4 sm:pb-[22px]">Testimonials</Title>
      <div className="flex items-center justify-center">
        <Description className="pb-8 sm:pb-[59px]">
          Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
          mauris est risus lectus. Phasellus consequat urna tellus
        </Description>
      </div>
      <div className="">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides={true}
          pagination={{
            clickable: true,
            el: paginationRef.current,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
            },
          }}
          className="relative"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              {({ isActive }) => (
                <div
                  className={`flex flex-col lg:flex-row items-center lg:items-start bg-background-lighter dark:bg-text-white rounded-[14px] p-6 md:p-8 max-w-4xl mx-auto ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={112}
                      height={112}
                      className="object-cover"
                    />
                  </div>

                  <div className="md:ml-6 mt-4 md:mt-0 text-center lg:text-left">
                    <p className="text-[#424242] text-sm md:text-xl font-normal leading-relaxed">
                      <span className="text-text-orange text-xl font-bold">
                        “
                      </span>
                      Lorem ipsum dolor sit amet consectetur. In enim cursus
                      odio accumsan. Id leo urna velit neque mattis id tellus
                      arcu condimentum. Augue dictum dolor elementum convallis
                      dignissim malesuada commodo ultrices.
                      <span className="text-orange-500 text-xl font-bold">
                        ”
                      </span>
                    </p>

                    <div className="mt-4">
                      <h3 className="font-semibold text-xl text-text-black">
                        {testimonial.name}
                      </h3>
                      <p className="text-text-black font-normal text-base">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          ref={paginationRef}
          className="mt-6 flex justify-center space-x-2"
        ></div>
      </div>
    </Container>
  );
};

export default TestimonialSlider;
