import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
import service_img_1 from "../app/img/service/we_service_1.webp";
import service_img_2 from "../app/img/service/service_img_2.webp";
import service_img_3 from "../app/img/service/service_img_3.webp";
import service_img_4 from "../app/img/service/service_img_4.webp";
import service_img_5 from "../app/img/service/service_img_5.webp";

const WeOffer = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className="bg-black w-full py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-white text-[18px] leading-[24px] lg:text-[24px] lg:leading-[130%]">
          Service we offer
        </h1>
        {/* Acording start  */}
        <div className="pt-10">
          <Accordion
            open={open === 1}
            className=" border-y border-[#ffffff1a] p-4 lg:py-7"
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className={"border-none acording_header relative"}
            >
              <div className="flex items-center gap-8 lg:gap-[96px]">
                <p
                  className="text-[18px] leading-[26px] lg:text-[22px] text-secondery font-normal number_text transition-all
                 duration-200"
                >
                  01
                </p>
                <h2
                  className="text-third text-[30px] md:text-[40px] leading-[50px] font-bold lg:text-[64px] lg:leading-[76px]
                 main_text transition-all duration-200"
                >
                  UX Design
                </h2>
              </div>
              <div className=" hidden lg:block top-[12%] right-0 absolute">
                <div className="image_div transition-all duration-200 h-32 w-32">
                  <Image
                    src={service_img_1}
                    alt="image"
                    className="w-full rounded-xl image transition-all duration-300"
                  />
                </div>
              </div>
            </AccordionHeader>

            <AccordionBody className="md:pl-14 lg:pl-[124px]">
              <p className=" max-w-[560px] text-[16px] md:text-[18px] leading-[24px] text-[#97979b]">
                Exceptional UX isn&apos;t just design; it&apos;s a journey that
                builds trust, forges loyalty, and makes your brand unforgettable
                and this is our commitment to you from our UX design agency.
              </p>
              <div className="flex pt-5">
                <Link href="#" className="flex items-center ">
                  <h5
                    className="text-[16px] bg-secondery leading-[24px] font-semibold text-primary 
                   py-[10px] px-6 rounded-[100px] tracking-[0.005em] transition-all duration-300 z-[5]"
                  >
                    Learn more
                  </h5>
                </Link>
              </div>
            </AccordionBody>
          </Accordion>

          <Accordion
            open={open === 2}
            className=" border-b border-[#ffffff1a] p-4 lg:py-7"
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className={"border-none acording_header relative"}
            >
              <div className="flex items-center gap-8 lg:gap-[96px]">
                <p
                  className="text-[18px] leading-[26px] lg:text-[22px] text-secondery font-normal
                 number_text transition-all duration-200"
                >
                  02
                </p>
                <h2
                  className="text-third text-[30px] md:text-[40px] leading-[50px] font-bold
                 lg:text-[64px] lg:leading-[76px] main_text transition-all duration-200"
                >
                  Branding
                </h2>
              </div>
              <div className=" hidden lg:block top-[5%] right-0 absolute">
                <div className="image_div transition-all duration-200 h-32 w-32">
                  <Image
                    src={service_img_2}
                    alt="image"
                    className="w-full rounded-xl image transition-all duration-300"
                  />
                </div>
              </div>
            </AccordionHeader>

            <AccordionBody className="md:pl-14 lg:pl-[124px]">
              <p className=" max-w-[560px] text-[16px] md:text-[18px] leading-[24px] text-[#97979b]">
                Exceptional UX isn&apos;t just design; it&apos;s a journey that
                builds trust, forges loyalty, and makes your brand unforgettable
                and this is our commitment to you from our UX design agency.
              </p>
              <div className="flex pt-5">
                <Link href="#" className="flex items-center ">
                  <h5
                    className="text-[16px] bg-secondery leading-[24px] font-semibold text-primary  
                  py-[10px] px-6 rounded-[100px] tracking-[0.005em] transition-all duration-300 z-[5]"
                  >
                    Learn more
                  </h5>
                </Link>
              </div>
            </AccordionBody>
          </Accordion>

          <Accordion
            open={open === 3}
            className=" border-b border-[#ffffff1a] p-4 lg:py-7"
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className={"border-none acording_header relative"}
            >
              <div className="flex items-center gap-8 lg:gap-[96px]">
                <p
                  className="text-[18px] leading-[26px] lg:text-[22px] text-secondery font-normal
                 number_text transition-all duration-200"
                >
                  03
                </p>
                <h2
                  className="text-third text-[30px] md:text-[40px] leading-[50px] font-bold
                 lg:text-[64px] lg:leading-[76px] main_text transition-all duration-200"
                >
                  Webflow
                </h2>
              </div>
              <div className=" hidden lg:block top-[9%] right-0 absolute">
                <div className="image_div transition-all duration-200 h-32 w-32">
                  <Image
                    src={service_img_3}
                    alt="image"
                    className="w-full rounded-xl image transition-all duration-300"
                  />
                </div>
              </div>
            </AccordionHeader>

            <AccordionBody className="md:pl-14 lg:pl-[124px]">
              <p className=" max-w-[560px] text-[16px] md:text-[18px] leading-[24px] text-[#97979b]">
                Exceptional UX isn&apos;t just design; it&apos;s a journey that
                builds trust, forges loyalty, and makes your brand unforgettable
                and this is our commitment to you from our UX design agency.
              </p>
              <div className="flex pt-5">
                <Link href="#" className="flex items-center ">
                  <h5
                    className="text-[16px] bg-secondery leading-[24px] font-semibold
                   text-primary  py-[10px] px-6 rounded-[100px] tracking-[0.005em] transition-all duration-300 z-[5]"
                  >
                    Learn more
                  </h5>
                </Link>
              </div>
            </AccordionBody>
          </Accordion>

          <Accordion
            open={open === 4}
            className=" border-b border-[#ffffff1a] p-4 lg:py-7"
          >
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className={"border-none acording_header relative"}
            >
              <div className="flex items-center gap-8 lg:gap-[96px]">
                <p
                  className="text-[18px] leading-[26px] lg:text-[22px] text-secondery
                 font-normal number_text transition-all duration-200"
                >
                  04
                </p>
                <h2
                  className="text-third text-[30px] md:text-[40px] leading-[50px]
                 font-bold lg:text-[64px] lg:leading-[76px] main_text transition-all duration-200"
                >
                  SaaS Design
                </h2>
              </div>
              <div className=" hidden lg:block top-[6%] right-0 absolute">
                <div className="image_div transition-all duration-200 h-32 w-32">
                  <Image
                    src={service_img_4}
                    alt="image"
                    className="w-full rounded-xl image transition-all duration-300"
                  />
                </div>
              </div>
            </AccordionHeader>

            <AccordionBody className="md:pl-14 lg:pl-[124px]">
              <p className=" max-w-[560px] text-[16px] md:text-[18px] leading-[24px] text-[#97979b]">
                Exceptional UX isn&apos;t just design; it&apos;s a journey that
                builds trust, forges loyalty, and makes your brand unforgettable
                and this is our commitment to you from our UX design agency.
              </p>
              <div className="flex pt-5">
                <Link href="#" className="flex items-center ">
                  <h5
                    className="text-[16px] bg-secondery leading-[24px] font-semibold
                   text-primary  py-[10px] px-6 rounded-[100px] tracking-[0.005em] transition-all duration-300 z-[5]"
                  >
                    Learn more
                  </h5>
                </Link>
              </div>
            </AccordionBody>
          </Accordion>

          <Accordion
            open={open === 5}
            className=" border-b border-[#ffffff1a] p-4 lg:py-7"
          >
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className={"border-none acording_header relative"}
            >
              <div className="flex items-center gap-8 lg:gap-[96px]">
                <p
                  className="text-[18px] leading-[26px] lg:text-[22px] text-secondery
                 font-normal number_text transition-all duration-200"
                >
                  05
                </p>
                <h2
                  className="text-third text-[30px] md:text-[40px] leading-[50px] 
                font-bold lg:text-[64px] lg:leading-[76px] main_text transition-all duration-200"
                >
                  Web Design
                </h2>
              </div>
              <div className=" hidden lg:block top-[6%] right-0 absolute">
                <div className="image_div transition-all duration-200 h-32 w-32">
                  <Image
                    src={service_img_5}
                    alt="image"
                    className="w-full rounded-xl image transition-all duration-300"
                  />
                </div>
              </div>
            </AccordionHeader>

            <AccordionBody className="md:pl-14 lg:pl-[124px]">
              <p className=" max-w-[560px] text-[16px] md:text-[16px] leading-[24px] text-[#97979b]">
                Exceptional UX isn&apos;t just design; it&apos;s a journey that
                builds trust, forges loyalty, and makes your brand unforgettable
                and this is our commitment to you from our UX design agency.
              </p>
              <div className="flex pt-5">
                <Link href="#" className="flex items-center ">
                  <h5
                    className="text-[16px] bg-secondery leading-[24px] font-semibold
                   text-primary  py-[10px] px-6 rounded-[100px] tracking-[0.005em] transition-all duration-300 z-[5]"
                  >
                    Learn more
                  </h5>
                </Link>
              </div>
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default WeOffer;
