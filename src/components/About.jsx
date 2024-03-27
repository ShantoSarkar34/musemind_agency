import React from "react";

const About = () => {
  return (
    <section className="bg-white  w-full py-20">
      <div className="container mx-auto px-4">
        <div className="showreel-sticky">
          <div className="about-title-content">
            <h1 className="style_1 text-center text-[20px] md:text-[34px] lg:text-[72px] text-black font-bold  leading-[48px] lg:leading-[84px]">
              Elevating UX, Empowering
            </h1>
            <div className="py-1 lg:py-3 flex items-center gap-2 lg:gap-8  justify-center">
              <h1 className="text-center text-[20px] md:text-[34px] lg:text-[72px] text-third font-bold  leading-[48px] lg:leading-[84px]">
                Businesses,
              </h1>
              {/* video  start  */}
              <div className="video_section">
                <div className=" video-area lg:w-60 lg:h-20 skew-x-12 rotate-[5deg]">
                  <div className="video-embed w-embed">
                    <video
                      className="wb-video-styles-controller w-60 h-12 md:h-16 lg:h-20"
                      wb-embed="video"
                      poster="https://dl.dropboxusercontent.com/scl/fi/yz2cfjb1o83hnqy2eii4j/MM-reel.gif?rlkey=503tb1a2tqitpwhtcs28v6n6g&dl=0"
                      autoPlay="autoplay"
                      loop="loop"
                      muted="muted"
                      playsInline="playsinline"
                      data-wf-ignore="true"
                    >
                      <source
                        src="https://dl.dropboxusercontent.com/scl/fi/r4eg9op6gp4ukg01maqjb/main_showreel.mp4?rlkey=kwhglvzllwvbt6t6f2xq60acn&dl=0"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
                {/* video  end  */}
              </div>
              <h1 className="text-center text-[20px] md:text-[34px] lg:text-[72px] text-third font-bold  leading-[48px] lg:leading-[84px]">
                Redefining
              </h1>
            </div>
            <h1 className="text-center text-[20px] md:text-[34px] lg:text-[72px] text-black font-bold  leading-[48px] lg:leading-[84px]">
              Experiences...
            </h1>
            <div className="pt-10 lg:pt-20 space-y-[25px] lg:space-y-[50px] lg:px-40">
              <p className="text-fourth font-normal text-[18px] md:text-[22px] lg:text-[24px] leading-[32px]">
                Welcome to Musemind: Where UX Dreams Soar! As your dedicated UX
                design agency, we transforms user insights into dynamic
                strategies, collaborating with diverse industries and expertise.{" "}
              </p>

              <p className="text-fourth font-normal text-[18px] md:text-[22px] lg:text-[24px] leading-[32px]">
                Our experts utilize tech trends, shaping designs that surpass
                expectations with innovation. Our meticulous process guarantees
                pixel-perfect results for apps and websites. We are partners,
                offering end-to-end excellence. Join Musemind and see how
                extraordinary UX design can transform your business. ‘‘Elevating
                UX’’ is more than just a tagline; it’s our commitment to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
