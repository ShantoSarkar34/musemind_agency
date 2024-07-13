import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

const ServiceHero = () => {
  return (
    <section className="service_bg_main pt-40 pb-20 w-full lg:px-32">
      <div className="container mx-auto px-4">
        <h1 className="mb-7 lg:mb-12 text-[44px] md:text-[48px] lg:text-[64px] lg:pr-40 text-white font-bold lg:leading-[1.3em]">
          Digital Product Design & Consulting Services
        </h1>
        <p className="text-[#727271] text-[19px] lg:text-[24px] leading-[1.5em] font-normal mb-[20px] lg:pr-40">
          Our Global digital product design agency helps brands to make
          top-quality SaaS, MVP, software, mobile apps, and websites. We focus
          on user-friendly designs that look great and work smoothly. Let us
          help your business grow with our expert digital product solutions.
        </p>
        <div className="pt-5 flex justify-start">
          <Link href={"#"} className="flex items-center all_btn_main">
            <h5 className=" md:text-[17px] bg-secondery leading-[24px] font-semibold text-black  py-4 px-10 lg:px-7 rounded-[100px] tracking-[0.005em] transition-all duration-300 all_btn_content  z-[2]">
              Design My Product Now
            </h5>
            <div className="bg-secondery p-[16px] rounded-[100px] all_icon transition-all duration-200">
              <GoArrowRight className="rotate-[-45deg] text-xl" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
