import React from "react";
import Link from "next/link";
import Image from "next/image";
import icon from "../app/img/icon.svg";
import star_icon from "../app/img/star_icon.svg";
import { GoArrowRight } from "react-icons/go";

const Hero = () => {
  return (
    <section className="bg-[#D6DCE1] w-full pb-20 relative ">
      <div className=" absolute  max-w-[740px] text-right top-[0%] bottom-auto left-auto right-[0%] z-[1]">
        <video
          rel="preload"
          width="100%"
          height="100%"
          autoPlay="autoplay"
          loop="loop"
          muted="muted"
          playsInline="playsinline"
          className=" inline-block"
        >
          <source
            src="https://dl.dropboxusercontent.com/scl/fi/a69viihvame63zwynb439/banner-animation.mov?rlkey=sv6x2wqpttun0jya9zk33rae3&dl=0"
            type="video/webm"
          />
        </video>
      </div>
      <div className="bg-[#D6DCE1] w-full">
        <div className="z-[2] relative container mx-auto px-4">
          <div className="  pt-[183px] flex flex-col gap-6 lg:gap-[60px]">
            <h1 class=" max-w-[1000px] text-[50px] leading-[64px] md:text-[60px] lg:text-[100px] lg:leading-[106%] md:leading-[74px] text-primary font-bold">
              Digital Product & UX Design Agency
            </h1>

            <p class="text-[22px] max-w-[650px] lg:max-w-[750px] text-primary font-medium lg:font-normal leading-[150%]">
              Musemind is a global UX Design and Web Design Agency. Helping
              Brands redefine experiences and empower business growth.
            </p>
            <div className="pt-10 lg:pt-0 flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-10">
              <Link href={"#"} className="flex items-center all_btn_main">
                <h5 className="text-[17px] bg-secondery leading-[24px] font-semibold text-primary  py-4 px-10 lg:px-7 rounded-[100px] tracking-[0.005em] transition-all duration-300 all_btn_content ">
                  Contact us
                </h5>
                <div className="bg-secondery p-[16px] rounded-[100px] all_icon z-[-5] transition-all duration-200">
                  <GoArrowRight className="rotate-[-45deg] text-xl" />
                </div>
              </Link>
              <div className="flex items-center gap-2">
                <div className="bg-white rounded-full p-2">
                  <Image src={icon} alt="icon" />
                </div>
                <div className="">
                  <div className="flex items-center gap-[9px]">
                    <h4 className="text-[24px] font-semibold leading-[130%]">
                      5.0
                    </h4>
                    <div className="flex items-center">
                      <Image src={star_icon} alt="star_icon" />
                      <Image src={star_icon} alt="star_icon" />
                      <Image src={star_icon} alt="star_icon" />
                      <Image src={star_icon} alt="star_icon" />
                      <Image src={star_icon} alt="star_icon" />
                    </div>
                  </div>
                  <p className="text-third text-[16px] leading-[] tracking-[-.5px]">
                    Based on 24 Clutch reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
