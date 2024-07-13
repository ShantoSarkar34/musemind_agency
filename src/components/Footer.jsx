import React from "react";
import Link from "next/link";
import Image from "next/image";
import footer_logo from "../app/img/footer_logo.svg";
import footer_img_1 from "../app/img/footer_img/footer_img_1.webp";
import footer_img_2 from "../app/img/footer_img/footer_img_2.webp";
import footer_img_3 from "../app/img/footer_img/footer_img_3.webp";
import footer_img_4 from "../app/img/footer_img/footer_img_4.webp";
import footer_img_5 from "../app/img/footer_img/footer_img_5.webp";
import footer_img_6 from "../app/img/footer_img/footer_img_6.webp";
import shanto_logo from "../app/img/footer_img/shanto_logo.webp";
import { GoArrowRight } from "react-icons/go";
import { LuArrowDownToLine } from "react-icons/lu";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-black w-full py-10 lg:pb-0 lg:pt-20">
      <div className="container mx-auto px-4">
        <div className="pb-[40px] grid grid-cols-3 gap-x-8 gap-y-14 md:grid-cols-5 lg:grid-cols-6">
          <div className="col-span-2 flex flex-col gap-6 md:col-span-3 lg:col-span-4">
            <Image src={footer_logo} alt="logo" className="w-[9rem]" />
            <p className="pt-2 lg:pt-0 text-[16px] leading-[24px] text-[#bbbbb9] max-w-[499.062px]">
              An Experience Design Agency focusing on building functional,
              simple, human-centered digital products for future.
            </p>
            <div className="flex lg:pt-7">
              <Link href="/contact" className="flex items-center btn_main">
                <h5 className="text-[16px] bg-secondery leading-[24px] font-semibold text-primary  py-[10px] px-6 rounded-[100px] tracking-[0.005em] transition-all duration-300 btn_content z-[5]">
                  Contact us
                </h5>
                <div className="bg-secondery p-3 rounded-full icon  transition-all duration-200">
                  <GoArrowRight className="rotate-[-45deg] text-primary" />
                </div>
              </Link>
            </div>
          </div>

          <div className="">
            <h6 className=" uppercase text-white tracking-[2px] text-[12px] leading-[12px] mb-[24px]">
              Quick Link
            </h6>
            <div className="flex flex-col gap-4 lg:gap-3">
              <Link
                href={"#"}
                className="text-[#a1a1a6] text-[16px] font-normal hover:text-white hover:underline hover:underline-offset-1 transition-all duration-200 "
              >
                {" "}
                Home
              </Link>
              <Link
                href={"#"}
                className="text-[#a1a1a6] text-[16px] font-normal hover:text-white hover:underline hover:underline-offset-1 transition-all duration-200 "
              >
                {" "}
                Work
              </Link>
              <Link
                href={"#"}
                className="text-[#a1a1a6] text-[16px] font-normal hover:text-white hover:underline hover:underline-offset-1 transition-all duration-200 "
              >
                {" "}
                Contact
              </Link>
              <Link
                href={"#"}
                className="text-[#a1a1a6] text-[16px] font-normal hover:text-white hover:underline hover:underline-offset-1 transition-all duration-200 "
              >
                {" "}
                Career
              </Link>
              <Link
                href={"#"}
                className="text-[#a1a1a6] text-[16px] font-normal hover:text-white hover:underline hover:underline-offset-1 transition-all duration-200 "
              >
                {" "}
                Blog
              </Link>
            </div>
          </div>

          <div className="">
            <h6 className=" uppercase text-white tracking-[2px] text-[12px] leading-[12px] mb-[24px]">
              SERVICES
            </h6>
            <div className="flex flex-col gap-4 lg:gap-3">
              <Link
                href={"#"}
                className="text-[#a1a1a6] text-[16px] font-normal hover:text-white hover:underline hover:underline-offset-1 transition-all duration-200 "
              >
                {" "}
                UI/UX Design
              </Link>
              <Link
                href={"#"}
                className="text-[#a1a1a6] text-[16px] font-normal hover:text-white hover:underline hover:underline-offset-1 transition-all duration-200 "
              >
                {" "}
                Web Design
              </Link>
              <Link
                href={"#"}
                className="text-[#a1a1a6] text-[16px] font-normal hover:text-white hover:underline hover:underline-offset-1 transition-all duration-200 "
              >
                {" "}
                Branding
              </Link>
              <Link
                href={"#"}
                className="text-[#a1a1a6] text-[16px] font-normal hover:text-white hover:underline hover:underline-offset-1 transition-all duration-200 "
              >
                {" "}
                Webflow
              </Link>
              <Link
                href={"#"}
                className="text-[#a1a1a6] text-[16px] font-normal hover:text-white hover:underline hover:underline-offset-1 transition-all duration-200 "
              >
                {" "}
                MVP Development
              </Link>
              <Link
                href={"#"}
                className="text-[#a1a1a6] text-[16px] font-normal hover:text-white hover:underline hover:underline-offset-1 transition-all duration-200 "
              >
                {" "}
                SaaS Design
              </Link>
              <Link
                href={"#"}
                className="text-[#a1a1a6] text-[16px] font-normal hover:text-white hover:underline hover:underline-offset-1 transition-all duration-200 "
              >
                {" "}
                Mobile App
              </Link>
              <Link
                href={"#"}
                className="text-[#a1a1a6] text-[16px] font-normal hover:text-white hover:underline hover:underline-offset-1 transition-all duration-200 "
              >
                {" "}
                Design System
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[30px] border-y border-[#232323]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 lg:grid-cols-6">
            <Image
              src={footer_img_1}
              alt="footer_img"
              className=" cursor-pointer w-[11.30rem] lg:w-[10.5rem]"
            />
            <Image
              src={footer_img_2}
              alt="footer_img"
              className=" cursor-pointer "
            />
            <Image
              src={footer_img_3}
              alt="footer_img"
              className=" cursor-pointer "
            />
            <Image
              src={footer_img_4}
              alt="footer_img"
              className=" cursor-pointer "
            />
            <Image
              src={footer_img_5}
              alt="footer_img"
              className=" cursor-pointer "
            />
            <Image
              src={footer_img_6}
              alt="footer_img"
              className=" cursor-pointer "
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="w-full flex flex-col lg:flex-row md:items-center lg:justify-between">
          <div className=" py-[25px] flex flex-col">
            <Link href={"#"} className="flex items-center gap-3">
              <div className=" bg-secondery p-[10px] rounded-full ">
                <LuArrowDownToLine className="text-[1.3rem]" />
              </div>
              <div className="">
                <h3 className="text-white text-[24px] leading-[28px] font-medium tracking-tight">
                  Company Deck
                </h3>
                <p className="text-[14px] text-third leading-[28px] font-medium">
                  PDF, 3 MB
                </p>
              </div>
            </Link>
          </div>
          <div className="py-[30px] w-full lg:w-min md:flex md:justify-center lg:justify-start border-y border-[#232323] lg:border-none lg:order-last">
            <div className="flex items-center gap-3">
              <Link
                href={"#"}
                className="flex items-center justify-center bg-[#232323] h-11 w-11 rounded-full text-white hover:text-black hover:bg-[#DCDCDC] transition-all duration-200"
              >
                <FaFacebookF className="text-xl" />
              </Link>
              <Link
                href={"#"}
                className="flex items-center justify-center bg-[#232323] h-11 w-11 rounded-full text-white hover:text-black hover:bg-[#DCDCDC] transition-all duration-200"
              >
                <FaLinkedinIn className="text-xl" />
              </Link>
              <Link
                href={"#"}
                className="flex items-center justify-center bg-[#232323] h-11 w-11 rounded-full text-white hover:text-black hover:bg-[#DCDCDC] transition-all duration-200"
              >
                <FaYoutube className="text-xl" />
              </Link>
              <Link
                href={"#"}
                className="flex items-center justify-center bg-[#232323] h-11 w-11 rounded-full text-white hover:text-black hover:bg-[#DCDCDC] transition-all duration-200"
              >
                <FaTwitter className="text-xl" />
              </Link>
              <Link
                href={"#"}
                className="flex items-center justify-center bg-[#232323] h-11 w-11 rounded-full text-white hover:text-black hover:bg-[#DCDCDC] transition-all duration-200"
              >
                <FaInstagram className="text-xl" />
              </Link>
            </div>
          </div>
          <div className="pt-8  lg:pt-0 flex flex-col items-center md:flex-row md:items-center gap-1 ">
            <p className="text-center text-third text-[15px] font-normal leading-[120%] px-2 md:px-0">
              {" "}
              Copyright © Musemind, 2024. Website Developed by{" "}
            </p>
            <div>
              <Link
                href={"https://shantosarkar9070.vercel.app/"}
                target="blank"
                className="text-[#a1a1a6] text-[15px]  leading-[100%] font-medium hover:text-secondery hover:underline hover:underline-offset-2"
              >
                Shanto9070
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
