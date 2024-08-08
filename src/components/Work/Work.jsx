import React from "react";
import Link from "next/link";
import Image from "next/image";
import about_img_1 from "../../app/img/about_img/about_img.webp";
import about_img_2 from "../../app/img/about_img/about_img_2.webp";
import about_img_3 from "../../app/img/about_img/about_img_3.webp";
import about_img_4 from "../../app/img/about_img/about_img_4.webp";
import about_img_5 from "../../app/img/about_img/about_img_5.webp";
import about_img_6 from "../../app/img/about_img/about_img_6.webp";
import about_img_7 from "../../app/img/about_img/about_img_7.webp";
import about_img_8 from "../../app/img/about_img/about_img_8.webp";
import about_img_9 from "../../app/img/about_img/about_img_9.webp";
import about_img_10 from "../../app/img/about_img/about_img_10.webp";
import { FaPlus } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";

const Work = () => {
  return (
    <section className="">
      {/* about image start  */}
      <div className="bg-primary py-20 w-full">
        <div className=" container mx-auto px-4">
          <div className=" grid gap-10 md:grid-cols-2 lg:gap-y-20 lg:gap-x-28">
            {/* image 1 start */}
            <div className="image_1">
              <Link href={"#"} className="flex flex-col gap-8 about_link">
                <div className="relative">
                  <div className="overflow-hidden bg-cover relative  transition-all duration-200 case-studies-thumbnail-block">
                    <Image
                      src={about_img_1}
                      alt="about_img"
                      className="bg-cover w-full ease-in-out hover:scale-110 transition-all duration-200  "
                    />
                  </div>
                  <div className=" absolute bottom-5 right-5 flex flex-col  overflow-hidden main_icon_div">
                    <div className=" flex items-center justify-center rounded-full bg-white h-10 w-10 icon_white transition-all duration-[150ms]">
                      <FaPlus className="text-xl" />
                    </div>
                    <div className=" flex items-center justify-center rounded-full bg-secondery h-10 w-10 icon_yellow transition-all duration-300">
                      <FaPlus className="text-xl" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-white max-w-[520px] text-[24px] font-medium leading-[130%] mb-1">
                    Cartiziee - On Demand Food Delivery
                  </h3>
                  <p className="text-[16px] leading-[24px] text-third">
                    Mobile App • UI/UX
                  </p>
                </div>
              </Link>
            </div>
            {/* image 2 start */}
            <div className="image_2">
              <Link href={"#"} className="flex flex-col gap-8 about_link">
                <div className="relative ">
                  <div className="overflow-hidden bg-cover relative  transition-all duration-200 case-studies-thumbnail-block">
                    <Image
                      src={about_img_2}
                      alt="about_img"
                      className="bg-cover w-full ease-in-out hover:scale-110 transition-all duration-200  "
                    />
                  </div>
                  <div className=" absolute bottom-5 right-5 flex flex-col  overflow-hidden main_icon_div">
                    <div className=" flex items-center justify-center rounded-full bg-white h-10 w-10 icon_white transition-all duration-[150ms]">
                      <FaPlus className="text-xl" />
                    </div>
                    <div className=" flex items-center justify-center rounded-full bg-secondery h-10 w-10 icon_yellow transition-all duration-300">
                      <FaPlus className="text-xl" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-white max-w-[520px] text-[24px] font-medium leading-[130%] mb-1">
                    Panther - Website Design for SIEM Platform
                  </h3>
                  <p className="text-[16px] leading-[24px] text-third">
                    Mobile App • UI/UX
                  </p>
                </div>
              </Link>
            </div>
            {/* image 3 start */}
            <div className="image_3">
              <Link href={"#"} className="flex flex-col gap-8 about_link">
                <div className="relative ">
                  <div className="overflow-hidden bg-cover relative  transition-all duration-200 case-studies-thumbnail-block">
                    <Image
                      src={about_img_3}
                      alt="about_img"
                      className="bg-cover w-full ease-in-out hover:scale-110 transition-all duration-200  "
                    />
                  </div>
                  <div className=" absolute bottom-5 right-5 flex flex-col  overflow-hidden main_icon_div">
                    <div className=" flex items-center justify-center rounded-full bg-white h-10 w-10 icon_white transition-all duration-[150ms]">
                      <FaPlus className="text-xl" />
                    </div>
                    <div className=" flex items-center justify-center rounded-full bg-secondery h-10 w-10 icon_yellow transition-all duration-300">
                      <FaPlus className="text-xl" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-white max-w-[520px] text-[24px] font-medium leading-[130%] mb-1">
                    Seliton - E-commerce store builder for business
                  </h3>
                  <p className="text-[16px] leading-[24px] text-third">
                    Mobile App • UI/UX
                  </p>
                </div>
              </Link>
            </div>
            {/* image 4 start */}
            <div className="image_4">
              <Link href={"#"} className="flex flex-col gap-8 about_link">
                <div className="relative ">
                  <div className="overflow-hidden bg-cover relative  transition-all duration-200 case-studies-thumbnail-block">
                    <Image
                      src={about_img_4}
                      alt="about_img"
                      className="bg-cover w-full ease-in-out hover:scale-110 transition-all duration-200  "
                    />
                  </div>
                  <div className=" absolute bottom-5 right-5 flex flex-col  overflow-hidden main_icon_div">
                    <div className=" flex items-center justify-center rounded-full bg-white h-10 w-10 icon_white transition-all duration-[150ms]">
                      <FaPlus className="text-xl" />
                    </div>
                    <div className=" flex items-center justify-center rounded-full bg-secondery h-10 w-10 icon_yellow transition-all duration-300">
                      <FaPlus className="text-xl" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-white max-w-[520px] text-[24px] font-medium leading-[130%] mb-1">
                    Inks - AI-based Social network for educators & students
                  </h3>
                  <p className="text-[16px] leading-[24px] text-third">
                    Mobile App • UI/UX
                  </p>
                </div>
              </Link>
            </div>
            {/* image 5 start */}
            <div className="image_5">
              <Link href={"#"} className="flex flex-col gap-8 about_link">
                <div className="relative ">
                  <div className="overflow-hidden bg-cover relative  transition-all duration-200 case-studies-thumbnail-block">
                    <Image
                      src={about_img_5}
                      alt="about_img"
                      className="bg-cover w-full ease-in-out hover:scale-110 transition-all duration-200  "
                    />
                  </div>
                  <div className=" absolute bottom-5 right-5 flex flex-col  overflow-hidden main_icon_div">
                    <div className=" flex items-center justify-center rounded-full bg-white h-10 w-10 icon_white transition-all duration-[150ms]">
                      <FaPlus className="text-xl" />
                    </div>
                    <div className=" flex items-center justify-center rounded-full bg-secondery h-10 w-10 icon_yellow transition-all duration-300">
                      <FaPlus className="text-xl" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-white max-w-[520px] text-[24px] font-medium leading-[130%] mb-1">
                    Onelink - NFT Buy & Sell Platform
                  </h3>
                  <p className="text-[16px] leading-[24px] text-third">
                    Mobile App • UI/UX
                  </p>
                </div>
              </Link>
            </div>
            {/* image 6 start */}
            <div className="image_6">
              <Link href={"#"} className="flex flex-col gap-8 about_link">
                <div className="relative ">
                  <div className="overflow-hidden bg-cover relative  transition-all duration-200 case-studies-thumbnail-block">
                    <Image
                      src={about_img_6}
                      alt="about_img"
                      className="bg-cover w-full ease-in-out hover:scale-110 transition-all duration-200  "
                    />
                  </div>
                  <div className=" absolute bottom-5 right-5 flex flex-col  overflow-hidden main_icon_div">
                    <div className=" flex items-center justify-center rounded-full bg-white h-10 w-10 icon_white transition-all duration-[150ms]">
                      <FaPlus className="text-xl" />
                    </div>
                    <div className=" flex items-center justify-center rounded-full bg-secondery h-10 w-10 icon_yellow transition-all duration-300">
                      <FaPlus className="text-xl" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-white max-w-[520px] text-[24px] font-medium leading-[130%] mb-1">
                    Avgar Pro- A Golf Coaching and Management App.
                  </h3>
                  <p className="text-[16px] leading-[24px] text-third">
                    Mobile App • UI/UX
                  </p>
                </div>
              </Link>
            </div>
            {/* image 7 start */}
            <div className="image_7">
              <Link href={"#"} className="flex flex-col gap-8 about_link">
                <div className="relative ">
                  <div className="overflow-hidden bg-cover relative  transition-all duration-200 case-studies-thumbnail-block">
                    <Image
                      src={about_img_7}
                      alt="about_img"
                      className="bg-cover w-full ease-in-out hover:scale-110 transition-all duration-200  "
                    />
                  </div>
                  <div className=" absolute bottom-5 right-5 flex flex-col  overflow-hidden main_icon_div">
                    <div className=" flex items-center justify-center rounded-full bg-white h-10 w-10 icon_white transition-all duration-[150ms]">
                      <FaPlus className="text-xl" />
                    </div>
                    <div className=" flex items-center justify-center rounded-full bg-secondery h-10 w-10 icon_yellow transition-all duration-300">
                      <FaPlus className="text-xl" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-white max-w-[520px] text-[24px] font-medium leading-[130%] mb-1">
                    Konoom - Location & Review Management
                  </h3>
                  <p className="text-[16px] leading-[24px] text-third">
                    Mobile App • UI/UX
                  </p>
                </div>
              </Link>
            </div>
            {/* image 8 start */}
            <div className="image_8">
              <Link href={"#"} className="flex flex-col gap-8 about_link">
                <div className="relative ">
                  <div className="overflow-hidden bg-cover relative  transition-all duration-200 case-studies-thumbnail-block">
                    <Image
                      src={about_img_8}
                      alt="about_img"
                      className="bg-cover w-full ease-in-out hover:scale-110 transition-all duration-200  "
                    />
                  </div>
                  <div className=" absolute bottom-5 right-5 flex flex-col  overflow-hidden main_icon_div">
                    <div className=" flex items-center justify-center rounded-full bg-white h-10 w-10 icon_white transition-all duration-[150ms]">
                      <FaPlus className="text-xl" />
                    </div>
                    <div className=" flex items-center justify-center rounded-full bg-secondery h-10 w-10 icon_yellow transition-all duration-300">
                      <FaPlus className="text-xl" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-white max-w-[520px] text-[24px] font-medium leading-[130%] mb-1">
                    GoBoos - Review & Web Traffic Management
                  </h3>
                  <p className="text-[16px] leading-[24px] text-third">
                    Mobile App • UI/UX
                  </p>
                </div>
              </Link>
            </div>
            {/* image 9 start */}
            <div className="image_9">
              <Link href={"#"} className="flex flex-col gap-8 about_link">
                <div className="relative ">
                  <div className="overflow-hidden bg-cover relative  transition-all duration-200 case-studies-thumbnail-block">
                    <Image
                      src={about_img_9}
                      alt="about_img"
                      className="bg-cover w-full ease-in-out hover:scale-110 transition-all duration-200  "
                    />
                  </div>
                  <div className=" absolute bottom-5 right-5 flex flex-col  overflow-hidden main_icon_div">
                    <div className=" flex items-center justify-center rounded-full bg-white h-10 w-10 icon_white transition-all duration-[150ms]">
                      <FaPlus className="text-xl" />
                    </div>
                    <div className=" flex items-center justify-center rounded-full bg-secondery h-10 w-10 icon_yellow transition-all duration-300">
                      <FaPlus className="text-xl" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-white max-w-[520px] text-[24px] font-medium leading-[130%] mb-1">
                    Tamara - Biggest BNPL eCommerce in Golf
                  </h3>
                  <p className="text-[16px] leading-[24px] text-third">
                    Mobile App • UI/UX
                  </p>
                </div>
              </Link>
            </div>
            {/* image 10 start */}
            <div className="image_10">
              <Link href={"#"} className="flex flex-col gap-8 about_link">
                <div className="relative ">
                  <div className="overflow-hidden bg-cover relative  transition-all duration-200 case-studies-thumbnail-block">
                    <Image
                      src={about_img_10}
                      alt="about_img"
                      className="bg-cover w-full ease-in-out hover:scale-110 transition-all duration-200  "
                    />
                  </div>
                  <div className=" absolute bottom-5 right-5 flex flex-col  overflow-hidden main_icon_div">
                    <div className=" flex items-center justify-center rounded-full bg-white h-10 w-10 icon_white transition-all duration-[150ms]">
                      <FaPlus className="text-xl" />
                    </div>
                    <div className=" flex items-center justify-center rounded-full bg-secondery h-10 w-10 icon_yellow transition-all duration-300">
                      <FaPlus className="text-xl" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-white max-w-[520px] text-[24px] font-medium leading-[130%] mb-1">
                    Morfyus - Web3 powered Freelance Job Platform
                  </h3>
                  <p className="text-[16px] leading-[24px] text-third">
                    Mobile App • UI/UX
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="pt-10 lg:pt-20 flex justify-center">
            <Link href={"#"} className="flex items-center all_btn_main">
              <h5 className=" md:text-[17px] bg-secondery leading-[24px] font-semibold text-black  py-4 px-10 lg:px-7 rounded-[100px] tracking-[0.005em] transition-all duration-300 all_btn_content  z-[2]">
                View all cases
              </h5>
              <div className="bg-secondery p-[16px] rounded-[100px] all_icon transition-all duration-200">
                <GoArrowRight className="rotate-[-45deg] text-xl" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
