import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Image from "next/image";
import Logo_1 from "../../app/img/footer_logo.svg";
// import footer_logo from "../app/img/footer_logo.svg";
// import { Link } from "react-scroll";
import Link from "next/link";
import { GiCrossedSwords } from "react-icons/gi";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { GoArrowRight } from "react-icons/go";

export default function ServiceHeader() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      setScroll(scrollHeight);

      if (scrollHeight >= 140) {
        setScroll(true);
      } else {
        setScroll(false);
      }

      // You can perform additional actions with the scroll height here
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resdize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul
      className="mb-4 mt-2 flex flex-col gap-5 lg:mb-0
     lg:mt-0 lg:flex-row lg:items-center lg:gap-6 "
    >
      <Link
        href={"/services"}
        className=" text-white text-[22px]  lg:text-[16px] leading-[24px] font-medium tracking-[0.01em] lg:tracking-[0em] cursor-pointer hover:text-third transition-all duration-200 flex items-center gap-2 justify-center"
      >
        <p>Service</p>
        <div className="bg-white rounded-full ">
          <GoArrowRight className="rotate-[90deg] text-lg text-black" />
        </div>
      </Link>
      <Link
        href={"/"}
        className=" text-white text-[22px]  lg:text-[16px] leading-[24px] font-medium tracking-[0.01em] lg:tracking-[0em] cursor-pointer hover:text-third transition-all duration-200"
      >
        <p>About us</p>
      </Link>
      <Link
        href={"/work"}
        className=" text-white text-[22px]  lg:text-[16px] leading-[24px] font-medium tracking-[0.01em] lg:tracking-[0em] cursor-pointer hover:text-third transition-all duration-200"
      >
        <p>Work</p>
      </Link>
      <Link
        href={"/"}
        className=" text-white text-[22px]  lg:text-[16px] leading-[24px] font-medium tracking-[0.01em] lg:tracking-[0em] cursor-pointer hover:text-third transition-all duration-200"
      >
        <p>Our Process</p>
      </Link>
      <Link
        href={"/"}
        className=" text-white text-[22px]  lg:text-[16px] leading-[24px] font-medium tracking-[0.01em] lg:tracking-[0em] cursor-pointer hover:text-third transition-all duration-200"
      >
        <p>Career</p>
      </Link>
      <Link
        href={"/"}
        className=" text-white text-[22px]  lg:text-[16px] leading-[24px] font-medium tracking-[0.01em] lg:tracking-[0em] cursor-pointer hover:text-third transition-all duration-200"
      >
        <p>Blog</p>
      </Link>
    </ul>
  );

  return (
    <Navbar
      id="header"
      className={`bg- w-full py-3 lg:py-5 border-none transition-all duration-300 fixed shadow-none  z-50 max-w-full rounded-none${
        scroll ? " bg-primary shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="flex items-center container mx-auto px-4  justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer py-1.5 font-medium transition-all duration-200 flex items-center gap-10"
        >
          <Image src={Logo_1} alt="logo" className="w-full" />
        </Typography>
        <div className="flex items-center gap-10">
          <div className="mr-4 hidden lg:block  ">{navList}</div>

          <button
            variant="text"
            className=" bg-secondery py-2 px-5 rounded-full lg:hidden "
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <div className="flex items-center gap-2 text-primary">
                <RxCross2 className="text-xl " />
                <p>Close</p>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-primary">
                <RiMenu3Fill className="text-xl " />
                <p>Menu</p>
              </div>
            )}
          </button>
        </div>
        <div className="hidden lg:block">
          <Link href="/contact" className="flex items-center btn_main">
            <h5 className="text-[16px] bg-secondery leading-[24px] font-semibold text-primary  py-[10px] px-6 rounded-[100px] tracking-[0.005em] transition-all duration-300 btn_content z-[5]">
              Contact us
            </h5>
            <div className="bg-secondery p-3 rounded-full icon z-[-5] transition-all duration-200">
              <GoArrowRight className="rotate-[-45deg] text-primary" />
            </div>
          </Link>
        </div>
      </div>

      <MobileNav
        open={openNav}
        className=" z-50 bg- transition-all duration-100"
      >
        <div className="flex flex-col text-center justify-center py-10  md:hidden ">
          {navList}
          <div className="block md:hidden pt-4">
            <Link
              href="#"
              className="flex items-center justify-center btn_main"
            >
              <h5 className="text-[16px] bg-secondery leading-[24px] font-semibold text-primary  py-[10px] px-6 rounded-[100px] tracking-[0.005em] transition-all duration-300 btn_content z-[5]">
                Contact us
              </h5>
              <div className="bg-secondery p-3 rounded-full icon z-[-5] transition-all duration-200">
                <GoArrowRight className="rotate-[-45deg] text-primary" />
              </div>
            </Link>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}
