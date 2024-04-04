import React from "react";
import Link from "next/link";
import Image from "next/image";
import contact_bg from "../app/img/blog/contact_img.webp";

const Contact = () => {
  return (
    <section className="bg-[#B5C0C9] py-20 lg:py-32 w-full relative ">
      <div className=" bottom-0 left-0 absolute bg-transparent max-w-[810px] hidden md:block">
        <Image
          src={contact_bg}
          alt="contact_img"
          className="z-[-2] md:brightness-75 lg:brightness-100"
        />
      </div>
      <div className="container mx-auto px-4 ">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-0">
          {/* contact text start  */}
          <div className="contact_text_section">
            <h1 className="text-white text-[42px] leading-[50px] font-bold lg:text-[72px] lg:leading-[80px] ">
              Have a Project Idea?
            </h1>
          </div>

          {/* contact input start  */}
          <div className="grid gap-2 lg:gap-y-8">
            <div className="flex flex-col gap-2 lg:gap-4 mb-8">
              <p className="text-black text-[16px] leading-[24px] lg:text-[20px] font-semibold">
                Full Name
              </p>
              <input
                type="name"
                name="name"
                placeholder="Jane Cooper"
                className=" bg-transparent focus:outline-none border-b-[3px]  border-black focus:border-white h-11 text-[24px] lg:text-[26px] leading-[32px] placeholder:text-fourth"
              />
            </div>
            <div className="grid gap-2 lg:grid-cols-2 lg:gap-x-[50px]">
              <div className="flex flex-col gap-2 lg:gap-4 mb-8">
                <p className="text-black text-[16px] leading-[24px] lg:text-[20px] font-semibold">
                  Company name
                </p>
                <input
                  type="name"
                  name="name"
                  placeholder="Ex. Tesla Inc
                "
                  className=" bg-transparent focus:outline-none border-b-[3px]  border-black focus:border-white h-11 text-[24px] lg:text-[26px] leading-[32px] placeholder:text-fourth"
                />
              </div>
              <div className="flex flex-col gap-2 lg:gap-4 mb-8">
                <p className="text-black text-[16px] leading-[24px] lg:text-[20px] font-semibold">
                  Email<span className="text-red-600">*</span>
                </p>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com
                "
                  className=" bg-transparent focus:outline-none border-b-[3px]  border-black focus:border-white h-11 text-[24px] lg:text-[26px] leading-[32px] placeholder:text-fourth"
                />
              </div>
            </div>
            <div className="grid gap-2 lg:grid-cols-2 lg:gap-x-[50px]">
              <div className="flex flex-col gap-2 lg:gap-4 mb-8">
                <p className="text-black text-[16px] leading-[24px] lg:text-[20px] font-semibold">
                  Service required<span className="text-red-600">*</span>
                </p>
                <select
                  name="select"
                  className=" bg-transparent focus:outline-none border-b-[3px]  border-black focus:border-white h-11 text-[24px] lg:text-[26px] leading-[32px] placeholder:text-fourth"
                >
                  <option value="1">Select Your Service</option>
                  <option value="2">UI/UX Design</option>
                  <option value="3">SaaS Design</option>
                  <option value="4">Brand Identity</option>
                  <option value="5">webflow</option>
                  <option value="6">Web Design</option>
                  <option value="7">MVP Development</option>
                  <option value="8">Design System</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 lg:gap-4 mb-8  z-[5]">
                <p className="text-black text-[16px] leading-[24px] lg:text-[20px] font-semibold">
                  Project budget<span className="text-red-600">*</span>
                </p>
                <select
                  name="select"
                  className=" bg-transparent focus:outline-none border-b-[3px]  border-black focus:border-white h-11 text-[24px] lg:text-[26px] leading-[32px] placeholder:text-fourth"
                >
                  <option value="1">Select Your Range</option>
                  <option value="2">$5K - $10K</option>
                  <option value="3">$10K - $20K</option>
                  <option value="4">$20K - $50K</option>
                  <option value="5">$50K - $100K</option>
                  <option value="6">$100k and up</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-3 lg:gap-4 mb-8 z-[5]">
              <p className="text-black text-[16px] leading-[24px] lg:text-[20px] font-semibold">
                Project details<span className="text-red-600">*</span>
              </p>
              <textarea
                name="text"
                rows="4"
                placeholder="Tell us more about your idea
                "
                className=" bg-transparent focus:outline-none border-b-[3px]  border-black focus:border-white  text-[24px] lg:text-[26px] leading-[32px] placeholder:text-[#57595A]"
              />
            </div>
            <div className="flex pt-5 ">
              <Link href="#" className="flex items-center ">
                <h5 className="text-[18px] bg-primary leading-[24px] font-semibold text-white  py-[12px] px-5 rounded-[100px] tracking-[0.005em] transition-all duration-300 z-[5]">
                  Send inquiry
                </h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
