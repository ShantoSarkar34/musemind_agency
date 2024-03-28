import React from "react";
import Link from "next/link";

const Weare = () => {
  return (
    <section className="bg-[#B6BFCC] py-20 w-full relative z-[98]">
      <div className=" container mx-auto px-4 ">
        <div className=" ">
          <div className="center-video w-[350px] md:w-[750px] lg:w-[910px]">
            <div className="w-embed flex justify-center">
              <video
                wb-embed="video"
                autoPlay="autoplay"
                loop="loop"
                muted="muted"
                playsInline="playsinline"
                data-wf-ignore="true"
                className=" align-baseline inline-block w-[100%] h-[100%] md:w-[80%]   lg:w-full lg:h-full "
              >
                <source
                  src="https://dl.dropboxusercontent.com/scl/fi/j5cxd5b9vn6lzbezamspd/animated.mov?rlkey=khouhq6opjlmju1vzpal6fqu6&dl=0"
                  type="video/webm"
                />
              </video>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="ml-6 lg:ml-16 text-[65px] md:text-[80px] text-white lg:text-[200px] font-bold leading-[100%] z-[-1]">
            We are{" "}
          </h1>
          <div className="-mt-4 lg:-mt-6 grid grid-cols-2 md:grid-cols-5 gap-x-2 gap-y-3 lg:grid-cols-5 lg:gap-6">
            <div className="bg-white p-4 lg:p-[2.083vw] counter-single-item hover:bg-black text-black hover:text-white transition-all duration-300 flex flex-col gap-12">
              <p className="text-[16px] laeding-[24px] font-medium lg:mb-[6.896vw]">
                001
              </p>
              <p className=" text-[16px] laeding-[24px] lg:text-[24px] lg:leading-[130%] font-normal lg:font-medium">
                Total Awards
              </p>
              <h2 className=" pt-4 text-[48px] leading-[100%] lg:text-[3.75vw] lg:leading-[105%] border-t border-[#ececec] font-medium">
                7
              </h2>
            </div>
            <div className="bg-white p-4 lg:p-[2.083vw] counter-single-item hover:bg-black text-black hover:text-white transition-all duration-300 flex flex-col gap-8 lg:gap-12">
              <p className="text-[16px] laeding-[24px] font-medium lg:mb-[6.896vw]">
                002
              </p>
              <p className="pt-3 lg:pt-0  text-[16px] laeding-[24px] lg:text-[24px] lg:leading-[130%] font-normal lg:font-medium">
                Years of Services
              </p>
              <h2 className=" pt-4 text-[48px] leading-[100%] lg:text-[3.75vw] lg:leading-[105%] border-t border-[#ececec] font-medium">
                4+
              </h2>
            </div>
            <div className="bg-white p-4 lg:p-[2.083vw] counter-single-item hover:bg-black text-black hover:text-white transition-all duration-300 flex flex-col gap-12">
              <p className="text-[16px] laeding-[24px] font-medium lg:mb-[6.896vw]">
                003
              </p>
              <p className=" text-[16px] laeding-[24px] lg:text-[24px] lg:leading-[130%] font-normal lg:font-medium">
                Location
              </p>
              <h2 className=" pt-4 text-[48px] leading-[100%] lg:text-[3.75vw] lg:leading-[105%] border-t border-[#ececec] font-medium">
                3
              </h2>
            </div>
            <div className="bg-white p-4 lg:p-[2.083vw] counter-single-item hover:bg-black text-black hover:text-white transition-all duration-300 flex flex-col gap-8 lg:gap-12">
              <p className="text-[16px] laeding-[24px] font-medium lg:mb-[6.896vw]">
                004
              </p>
              <p className="pt-3 lg:pt-0  text-[16px] laeding-[24px] lg:text-[24px] lg:leading-[130%] font-normal lg:font-medium">
                Team members
              </p>
              <h2 className=" pt-4 text-[48px] leading-[100%] lg:text-[3.75vw] lg:leading-[105%] border-t border-[#ececec] font-medium">
                40+
              </h2>
            </div>
            <div className="bg-white p-4 lg:p-[2.083vw] counter-single-item hover:bg-black text-black hover:text-white transition-all duration-300 flex flex-col gap-12">
              <p className="text-[16px] laeding-[24px] font-medium lg:mb-[6.896vw]">
                005
              </p>
              <p className=" text-[16px] laeding-[24px] lg:text-[24px] lg:leading-[130%] font-normal lg:font-medium">
                Happy Clients
              </p>
              <h2 className=" pt-4 text-[48px] leading-[100%] lg:text-[3.75vw] lg:leading-[105%] border-t border-[#ececec] font-medium">
                250+
              </h2>
            </div>
          </div>
          <h1 className="-mt-8 md:ml-6 lg:-mt-14 text-[55px] md:text-[80px] text-white lg:text-[200px] font-bold leading-[100%] z-[-1]">
            Musemind{" "}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Weare;
