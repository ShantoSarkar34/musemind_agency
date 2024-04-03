import React from "react";
import Link from "next/link";
import Image from "next/image";
import blog_1 from "../app/img/blog/blog_1.webp";
import blog_2 from "../app/img/blog/blog_2.jpg";
import blog_3 from "../app/img/blog/blog_3.png";

const Blog = () => {
  return (
    <section className="bg-bg w-full py-20 lg:py-28 ">
      <div className="container mx-auto px-4">
        <h1 className="text-[#40403f] text-[42px] leading-[50px] md:text-[48px] md:leading-[56px] lg:text-[72px] lg:leading-[80px] font-bold text-center">
          Latest Design trends
        </h1>
        <div className="pt-10 lg:pt-20 grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-11">
          {/* blog 1 start  */}
          <div className="flex flex-col">
            <div className=" overflow-hidden bg-cover relative">
              <Image
                src={blog_1}
                alt="image"
                className=" w-full bg-cover ease-in-out hover:scale-110 transition-all duration-300 cursor-pointer"
              />
            </div>
            <div className="bg-[#FFFFFF] py-10 px-6">
              <div className="mb-[30px] lg:mb-[65px]">
                <Link
                  href={"#"}
                  className="  text-[24px] leading-[34px] lg:text-[24px] lg:leading-[32px] font-bold text-black hover:underline "
                >
                  Rebranding with Purpose: Embracing
                </Link>
              </div>
              <div className="content-body">
                <p className="text-[#97979b] text-[16px] leading-[24px]">
                  4 min
                </p>
                <h4 className="text-[18px] font-bold leading-[28px] ">
                  Branding
                </h4>
              </div>
            </div>
          </div>
          {/* blog 2 start  */}
          <div className="flex flex-col">
            <div className=" overflow-hidden bg-cover relative">
              <Image
                src={blog_2}
                alt="image"
                className=" w-full bg-cover ease-in-out hover:scale-110 transition-all duration-300 cursor-pointer"
              />
            </div>
            <div className="bg-[#FFFFFF] py-10 px-6">
              <div className="mb-[30px] lg:mb-[65px]">
                <Link
                  href={"#"}
                  className="  text-[24px] leading-[34px] lg:text-[24px] lg:leading-[30px] font-bold text-black hover:underline "
                >
                  Why Should Give Your Design Agency
                </Link>
              </div>
              <div className="content-body">
                <p className="text-[#97979b] text-[16px] leading-[24px]">
                  4 min
                </p>
                <h4 className="text-[18px] font-bold leading-[28px] ">
                  Business
                </h4>
              </div>
            </div>
          </div>
          {/* blog 3 start  */}
          <div className="flex flex-col">
            <div className=" overflow-hidden bg-cover relative">
              <Image
                src={blog_3}
                alt="image"
                className=" w-full bg-cover ease-in-out hover:scale-110 transition-all duration-300 cursor-pointer"
              />
            </div>
            <div className="bg-[#FFFFFF] py-10 px-6">
              <div className="mb-[30px] lg:mb-[65px]">
                <Link
                  href={"#"}
                  className="  text-[24px] leading-[34px] lg:text-[24px] lg:leading-[30px] font-bold text-black hover:underline "
                >
                  Rebranding with Purpose: Embracing
                </Link>
              </div>
              <div className="content-body">
                <p className="text-[#97979b] text-[16px] leading-[24px]">
                  4 min
                </p>
                <h4 className="text-[18px] font-bold leading-[28px] ">
                  Business
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
