import React from "react";
import Link from "next/link";

const ServiceMain = () => {
  return (
    <section className="bg-white py-20 lg:py-[140px] w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-[80px] lg:gap-y-[140px]">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-x-[100px]">
            {/*1 video section  */}
            <div className=" lg:order-last">
              <div
                data-poster-url="https://cdn.prod.website-files.com/643f7373d3f6653157617339%2F6668300f8153fb0cebe89898_original-f5a59757281cd6c08380310769a6222c-poster-00001.jpg"
                data-video-urls="https://cdn.prod.website-files.com/643f7373d3f6653157617339%2F6668300f8153fb0cebe89898_original-f5a59757281cd6c08380310769a6222c-transcode.mp4,https://cdn.prod.website-files.com/643f7373d3f6653157617339%2F6668300f8153fb0cebe89898_original-f5a59757281cd6c08380310769a6222c-transcode.webm"
                data-autoplay="true"
                data-loop="true"
                data-wf-ignore="true"
                className="service-background-video w-background-video w-background-video-atom"
              >
                <video
                  id="a242c009-1f43-d427-4b99-203fe19c2c5e-video"
                  autoPlay
                  loop
                  style={{
                    backgroundImage:
                      'url("https://cdn.prod.website-files.com/643f7373d3f6653157617339%2F6668300f8153fb0cebe89898_original-f5a59757281cd6c08380310769a6222c-poster-00001.jpg")',
                  }}
                  muted
                  playsInline
                  data-wf-ignore="true"
                  data-object-fit="cover"
                >
                  <source
                    src="https://cdn.prod.website-files.com/643f7373d3f6653157617339%2F6668300f8153fb0cebe89898_original-f5a59757281cd6c08380310769a6222c-transcode.mp4"
                    data-wf-ignore="true"
                  />
                  <source
                    src="https://cdn.prod.website-files.com/643f7373d3f6653157617339%2F6668300f8153fb0cebe89898_original-f5a59757281cd6c08380310769a6222c-transcode.webm"
                    data-wf-ignore="true"
                  />
                </video>
                <noscript>
                  &lt;style&gt; [data-wf-bgvideo-fallback-img] {"{"}
                  display: none;
                  {"}"}
                  @media (prefers-reduced-motion: reduce) {"{"}
                  [data-wf-bgvideo-fallback-img] {"{"}
                  position: absolute; z-index: -100; display: inline-block;
                  height: 100%; width: 100%; object-fit: cover;
                  {"}"}
                  {"}"}&lt;
                </noscript>
                <div aria-live="polite">
                  <button
                    type="button"
                    data-w-bg-video-control="true"
                    aria-controls="a242c009-1f43-d427-4b99-203fe19c2c5e-video"
                    className="w-backgroundvideo-backgroundvideoplaypausebutton w-background-video--control"
                  >
                    <span className="play-state" />
                  </button>
                </div>
              </div>
            </div>
            {/* 1 content section start  */}
            <div className="flex flex-col gap-4">
              <h1 className="text-primary leading-[1.3em] font-bold text-[36px] lg:text-[48px]">
                Branding
              </h1>
              <p className="text-[#5f5f5d] font-normal text-[20px] leading-[1.5em] mb-4">
                Our approach connects brand and user experience closely. We
                specialize in creating and presenting digital brand identities
                on all platforms. We also provide strategy help and guidelines
                to keep everything consistent.
              </p>
              {/* option section  */}
              <div className="grid grid-cols-2">
                <div className="flex flex-col gap-[10px]">
                  <div className="flex items-center gap-[10px]">
                    <p
                      className="h-[2px] w-[12px] bg-fourth
                  "
                    ></p>
                    <Link
                      href={"#"}
                      className="text-[#02ca5f] font-semibold text-[18px] leading-[28px] lg:font-bold underline"
                    >
                      Branding
                    </Link>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <p
                      className="h-[2px] w-[12px] bg-fourth
                  "
                    ></p>
                    <Link
                      href={"#"}
                      className="text-[#02ca5f] font-semibold text-[18px] leading-[28px] lg:font-bold underline"
                    >
                      brand identity
                    </Link>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <p
                      className="h-[2px] w-[12px] bg-fourth
                  "
                    ></p>
                    <Link
                      href={"#"}
                      className="text-[#02ca5f] font-semibold text-[18px] leading-[28px] lg:font-bold underline"
                    >
                      corporate identity
                    </Link>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <p
                      className="h-[2px] w-[12px] bg-fourth
                  "
                    ></p>
                    <Link
                      href={"#"}
                      className="text-[#02ca5f] font-semibold text-[18px] leading-[28px] lg:font-bold underline"
                    >
                      brand strategy
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex items-center gap-[10px]">
                    <p
                      className="h-[2px] w-[12px] bg-fourth
                  "
                    ></p>
                    <Link
                      href={"#"}
                      className="text-black font-semibold lg:font-bold text-[18px] leading-[28px] "
                    >
                      Motion Graphics
                    </Link>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <p
                      className="h-[2px] w-[12px] bg-fourth
                  "
                    ></p>
                    <Link
                      href={"#"}
                      className="text-black font-semibold lg:font-bold text-[18px] leading-[28px] "
                    >
                      {" "}
                      Graphics Design
                    </Link>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <p
                      className="h-[2px] w-[12px] bg-fourth
                  "
                    ></p>
                    <Link
                      href={"#"}
                      className="text-black font-semibold lg:font-bold text-[18px] leading-[28px] "
                    >
                      Startup Branding
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* content section end  */}
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-x-[100px]">
            {/*2 video section  */}
            <div className="">
              <div
                data-poster-url="https://cdn.prod.website-files.com/643f7373d3f6653157617339%2F666843c0eabac350c24b1d83_original-85ec2676929df38bb97571384c1f3b02-poster-00001.jpg"
                data-video-urls="https://cdn.prod.website-files.com/643f7373d3f6653157617339%2F666843c0eabac350c24b1d83_original-85ec2676929df38bb97571384c1f3b02-transcode.mp4,https://cdn.prod.website-files.com/643f7373d3f6653157617339%2F666843c0eabac350c24b1d83_original-85ec2676929df38bb97571384c1f3b02-transcode.webm"
                data-autoplay="true"
                data-loop="true"
                data-wf-ignore="true"
                className="service-background-video w-background-video w-background-video-atom"
              >
                <video
                  id="f9da8833-3997-6b13-3c48-8f5569405b13-video"
                  autoPlay
                  loop
                  style={{
                    backgroundImage:
                      'url("https://cdn.prod.website-files.com/643f7373d3f6653157617339%2F666843c0eabac350c24b1d83_original-85ec2676929df38bb97571384c1f3b02-poster-00001.jpg")',
                  }}
                  muted
                  playsInline
                  data-wf-ignore="true"
                  data-object-fit="cover"
                >
                  <source
                    src="https://cdn.prod.website-files.com/643f7373d3f6653157617339%2F666843c0eabac350c24b1d83_original-85ec2676929df38bb97571384c1f3b02-transcode.mp4"
                    data-wf-ignore="true"
                  />
                  <source
                    src="https://cdn.prod.website-files.com/643f7373d3f6653157617339%2F666843c0eabac350c24b1d83_original-85ec2676929df38bb97571384c1f3b02-transcode.webm"
                    data-wf-ignore="true"
                  />
                </video>
                <noscript>
                  &lt;style&gt; [data-wf-bgvideo-fallback-img] {"{"}
                  display: none;
                  {"}"}
                  @media (prefers-reduced-motion: reduce) {"{"}
                  [data-wf-bgvideo-fallback-img] {"{"}
                  position: absolute; z-index: -100; display: inline-block;
                  height: 100%; width: 100%; object-fit: cover;
                  {"}"}
                  {"}"}&lt;/style&gt;
                </noscript>
                <div aria-live="polite">
                  <button
                    type="button"
                    data-w-bg-video-control="true"
                    aria-controls="f9da8833-3997-6b13-3c48-8f5569405b13-video"
                    className="w-backgroundvideo-backgroundvideoplaypausebutton w-background-video--control"
                  ></button>
                </div>
              </div>
            </div>
            {/* 2 content section start  */}
            <div className="flex flex-col gap-4">
              <h1 className="text-primary leading-[1.3em] font-bold text-[36px] lg:text-[48px]">
                UX UI DESIGN
              </h1>
              <p className="text-[#5f5f5d] font-normal text-[20px] leading-[1.5em] mb-4">
                At Musemind, we believe everyone should have a great user
                experience, whether at work or in their free time. We create
                memorable products for businesses and consumers, and we provide
                easy-to-use design systems for smooth product updates.
              </p>
              {/* option section  */}
              <div className="grid grid-cols-2">
                <div className="flex flex-col gap-[10px]">
                  <div className="flex items-center gap-[10px]">
                    <p
                      className="h-[2px] w-[12px] bg-fourth
                  "
                    ></p>
                    <Link
                      href={"#"}
                      className="text-[#02ca5f] font-semibold text-[18px] lg:font-bold leading-[28px] underline"
                    >
                      UX UI Design
                    </Link>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <p
                      className="h-[2px] w-[12px] bg-fourth
                  "
                    ></p>
                    <Link
                      href={"#"}
                      className="text-[#02ca5f] font-semibold text-[18px] leading-[28px] lg:font-bold underline"
                    >
                      UX UI Consulting
                    </Link>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <p
                      className="h-[2px] w-[12px] bg-fourth
                  "
                    ></p>
                    <Link
                      href={"#"}
                      className="text-[#02ca5f] font-semibold text-[18px] leading-[28px] lg:font-bold underline"
                    >
                      UX Audit
                    </Link>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <p
                      className="h-[2px] w-[12px] bg-fourth
                  "
                    ></p>
                    <Link
                      href={"#"}
                      className="text-[#02ca5f] font-semibold text-[18px] leading-[28px] lg:font-bold underline"
                    >
                      UX Research
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex items-center gap-[10px]">
                    <p
                      className="h-[2px] w-[12px] bg-fourth
                  "
                    ></p>
                    <Link
                      href={"#"}
                      className="text-[#02ca5f] font-semibold text-[18px] leading-[28px] lg:font-bold underline"
                    >
                      Usability Testing
                    </Link>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <p
                      className="h-[2px] w-[12px] bg-fourth
                  "
                    ></p>
                    <Link
                      href={"#"}
                      className="text-[#02ca5f] font-semibold text-[18px] leading-[28px] lg:font-bold underline"
                    >
                      Wireframe & UI Protoyping
                    </Link>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <p
                      className="h-[2px] w-[12px] bg-fourth
                  "
                    ></p>
                    <Link
                      href={"#"}
                      className="text-[#02ca5f] font-semibold text-[18px] leading-[28px] lg:font-bold underline"
                    >
                      Design System
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* content section end  */}
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-x-[100px]">
            {/*3 video section  */}
            <div className=" lg:order-last">
              <div
                data-poster-url="https://cdn.prod.website-files.com/643f7373d3f6653157617339%2F6668411a74e956e4faf96c90_App%20Promo_medicare-poster-00001.jpg"
                data-video-urls="https://cdn.prod.website-files.com/643f7373d3f6653157617339%2F6668411a74e956e4faf96c90_App%20Promo_medicare-transcode.mp4,https://cdn.prod.website-files.com/643f7373d3f6653157617339%2F6668411a74e956e4faf96c90_App%20Promo_medicare-transcode.webm"
                data-autoplay="true"
                data-loop="true"
                data-wf-ignore="true"
                className="service-background-video w-background-video w-background-video-atom"
              >
                <video
                  id="b75d75d0-0e0c-dbbc-9d76-21ce4719b878-video"
                  autoPlay
                  loop
                  style={{
                    backgroundImage:
                      'url("https://cdn.prod.website-files.com/643f7373d3f6653157617339%2F6668411a74e956e4faf96c90_App%20Promo_medicare-poster-00001.jpg")',
                  }}
                  muted
                  playsInline
                  data-wf-ignore="true"
                  data-object-fit="cover"
                >
                  <source
                    src="https://cdn.prod.website-files.com/643f7373d3f6653157617339%2F6668411a74e956e4faf96c90_App%20Promo_medicare-transcode.mp4"
                    data-wf-ignore="true"
                  />
                  <source
                    src="https://cdn.prod.website-files.com/643f7373d3f6653157617339%2F6668411a74e956e4faf96c90_App%20Promo_medicare-transcode.webm"
                    data-wf-ignore="true"
                  />
                </video>
                <noscript>
                  &lt;style&gt; [data-wf-bgvideo-fallback-img] {"{"}
                  display: none;
                  {"}"}
                  @media (prefers-reduced-motion: reduce) {"{"}
                  [data-wf-bgvideo-fallback-img] {"{"}
                  position: absolute; z-index: -100; display: inline-block;
                  height: 100%; width: 100%; object-fit: cover;
                  {"}"}
                  {"}"}&lt;/style&gt;&lt;
                </noscript>
                <div aria-live="polite">
                  <button
                    type="button"
                    data-w-bg-video-control="true"
                    aria-controls="b75d75d0-0e0c-dbbc-9d76-21ce4719b878-video"
                    className="w-backgroundvideo-backgroundvideoplaypausebutton w-background-video--control"
                  >
                    <span className="play-state-2" />
                  </button>
                </div>
              </div>
            </div>
            {/* 3 content section start  */}
            <div className="flex flex-col gap-4">
              <h1 className="text-primary leading-[1.3em] font-bold text-[36px] lg:text-[48px]">
                Web Design
              </h1>
              <p className="text-[#5f5f5d] font-normal text-[20px] leading-[1.5em] mb-4">
                A website is the most important way to show your brand to
                customers. Our portfolio includes functional websites that are
                designed and developed to give users the best experience
                possible while also helping you achieve your business goals.
              </p>
              {/* option section  */}
              <div className="grid grid-cols-2">
                <div className="flex flex-col gap-[10px]">
                  <div className="flex items-center gap-[10px]">
                    <p
                      className="h-[2px] w-[12px] bg-fourth
                  "
                    ></p>
                    <Link
                      href={"#"}
                      className="text-[#02ca5f] font-semibold text-[18px] leading-[28px] lg:font-bold underline"
                    >
                      Web Design
                    </Link>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <p
                      className="h-[2px] w-[12px] bg-fourth
                  "
                    ></p>
                    <Link
                      href={"#"}
                      className="text-[#02ca5f] font-semibold text-[18px] leading-[28px] lg:font-bold underline"
                    >
                      Corporate Website
                    </Link>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <p
                      className="h-[2px] w-[12px] bg-fourth
                  "
                    ></p>
                    <Link
                      href={"#"}
                      className="text-[#02ca5f] font-semibold text-[18px] leading-[28px] lg:font-bold underline"
                    >
                      Web App Design
                    </Link>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <p
                      className="h-[2px] w-[12px] bg-fourth
                  "
                    ></p>
                    <Link
                      href={"#"}
                      className="text-[#02ca5f] font-semibold text-[18px] leading-[28px] lg:font-bold underline"
                    >
                      Ecommerce Design
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex items-center gap-[10px]">
                    <p
                      className="h-[2px] w-[12px] bg-fourth
                  "
                    ></p>
                    <Link
                      href={"#"}
                      className="text-black font-semibold lg:font-bold text-[18px] leading-[28px] "
                    >
                      Web Redesign
                    </Link>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <p
                      className="h-[2px] w-[12px] bg-fourth
                  "
                    ></p>
                    <Link
                      href={"#"}
                      className="text-black font-semibold lg:font-bold text-[18px] leading-[28px] "
                    >
                      {" "}
                      Responsive Web Design
                    </Link>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <p
                      className="h-[2px] w-[12px] bg-fourth
                  "
                    ></p>
                    <Link
                      href={"#"}
                      className="text-black font-semibold lg:font-bold text-[18px] leading-[28px] "
                    >
                      Startup Web Design
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* content section end  */}
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-x-[100px]">
            {/*3 video section  */}
            <div className="">
              <div
                data-poster-url="https://cdn.prod.website-files.com/643f7373d3f6653157617339%2F66683f331e324d92368ac632_Gromuse_promo-poster-00001.jpg"
                data-video-urls="https://cdn.prod.website-files.com/643f7373d3f6653157617339%2F66683f331e324d92368ac632_Gromuse_promo-transcode.mp4,https://cdn.prod.website-files.com/643f7373d3f6653157617339%2F66683f331e324d92368ac632_Gromuse_promo-transcode.webm"
                data-autoplay="true"
                data-loop="true"
                data-wf-ignore="true"
                className="service-background-video w-background-video w-background-video-atom"
              >
                <video
                  id="5c73afe4-2c5b-eabd-270c-70b6613b882e-video"
                  autoPlay
                  loop
                  style={{
                    backgroundImage:
                      'url("https://cdn.prod.website-files.com/643f7373d3f6653157617339%2F66683f331e324d92368ac632_Gromuse_promo-poster-00001.jpg")',
                  }}
                  muted
                  playsInline
                  data-wf-ignore="true"
                  data-object-fit="cover"
                >
                  <source
                    src="https://cdn.prod.website-files.com/643f7373d3f6653157617339%2F66683f331e324d92368ac632_Gromuse_promo-transcode.mp4"
                    data-wf-ignore="true"
                  />
                  <source
                    src="https://cdn.prod.website-files.com/643f7373d3f6653157617339%2F66683f331e324d92368ac632_Gromuse_promo-transcode.webm"
                    data-wf-ignore="true"
                  />
                </video>
                <noscript>
                  &lt;style&gt; [data-wf-bgvideo-fallback-img] {"{"}
                  display: none;
                  {"}"}
                  @media (prefers-reduced-motion: reduce) {"{"}
                  [data-wf-bgvideo-fallback-img] {"{"}
                  position: absolute; z-index: -100; display: inline-block;
                  height: 100%; width: 100%; object-fit: cover;
                  {"}"}
                  {"}"}&lt;/style&gt;&lt;
                </noscript>
                <div aria-live="polite">
                  <button
                    type="button"
                    data-w-bg-video-control="true"
                    aria-controls="5c73afe4-2c5b-eabd-270c-70b6613b882e-video"
                    className="w-backgroundvideo-backgroundvideoplaypausebutton w-background-video--control"
                  ></button>
                </div>
              </div>
            </div>
            {/* 3 content section start  */}
            <div className="flex flex-col gap-4">
              <h1 className="text-primary leading-[1.3em] font-bold text-[36px] lg:text-[48px]">
                Mobile app design
              </h1>
              <p className="text-[#5f5f5d] font-normal text-[20px] leading-[1.5em] mb-4">
                We focus on enhancing user interest by creating User friendly
                interfaces. By building a strong brand identity within the app,
                we ensure that users recognize and trust your brand. Our expert
                design team also works on optimizing the functionality of the
                app, making sure it runs smoothly and efficiently.
              </p>
              {/* option section  */}
              <div className="grid grid-cols-2">
                <div className="flex flex-col gap-[10px]">
                  <div className="flex items-center gap-[10px]">
                    <p
                      className="h-[2px] w-[12px] bg-fourth
                  "
                    ></p>
                    <Link
                      href={"#"}
                      className="text-[#02ca5f] font-semibold text-[18px] leading-[28px] lg:font-bold underline"
                    >
                      Mobile App
                    </Link>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <p
                      className="h-[2px] w-[12px] bg-fourth
                  "
                    ></p>
                    <Link
                      href={"#"}
                      className="text-black font-semibold lg:font-bold text-[18px] leading-[28px] "
                    >
                      IOS App
                    </Link>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <p
                      className="h-[2px] w-[12px] bg-fourth
                  "
                    ></p>
                    <Link
                      href={"#"}
                      className="text-black font-semibold lg:font-bold text-[18px] leading-[28px] "
                    >
                      App Prototyping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* content section end  */}
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-x-[100px]">
            {/*3 video section  */}
            <div className=" lg:order-last">
              <div
                data-poster-url="https://cdn.prod.website-files.com/643f7373d3f6653157617339%2F6668411a74e956e4faf96c90_App%20Promo_medicare-poster-00001.jpg"
                data-video-urls="https://cdn.prod.website-files.com/643f7373d3f6653157617339%2F6668411a74e956e4faf96c90_App%20Promo_medicare-transcode.mp4,https://cdn.prod.website-files.com/643f7373d3f6653157617339%2F6668411a74e956e4faf96c90_App%20Promo_medicare-transcode.webm"
                data-autoplay="true"
                data-loop="true"
                data-wf-ignore="true"
                className="service-background-video w-background-video w-background-video-atom"
              >
                <video
                  id="b75d75d0-0e0c-dbbc-9d76-21ce4719b878-video"
                  autoPlay
                  loop
                  style={{
                    backgroundImage:
                      'url("https://cdn.prod.website-files.com/643f7373d3f6653157617339%2F6668411a74e956e4faf96c90_App%20Promo_medicare-poster-00001.jpg")',
                  }}
                  muted
                  playsInline
                  data-wf-ignore="true"
                  data-object-fit="cover"
                >
                  <source
                    src="https://cdn.prod.website-files.com/643f7373d3f6653157617339%2F6668411a74e956e4faf96c90_App%20Promo_medicare-transcode.mp4"
                    data-wf-ignore="true"
                  />
                  <source
                    src="https://cdn.prod.website-files.com/643f7373d3f6653157617339%2F6668411a74e956e4faf96c90_App%20Promo_medicare-transcode.webm"
                    data-wf-ignore="true"
                  />
                </video>
                <noscript>
                  &lt;style&gt; [data-wf-bgvideo-fallback-img] {"{"}
                  display: none;
                  {"}"}
                  @media (prefers-reduced-motion: reduce) {"{"}
                  [data-wf-bgvideo-fallback-img] {"{"}
                  position: absolute; z-index: -100; display: inline-block;
                  height: 100%; width: 100%; object-fit: cover;
                  {"}"}
                  {"}"}&lt;/style&gt;&lt;
                </noscript>
                <div aria-live="polite">
                  <button
                    type="button"
                    data-w-bg-video-control="true"
                    aria-controls="b75d75d0-0e0c-dbbc-9d76-21ce4719b878-video"
                    className="w-backgroundvideo-backgroundvideoplaypausebutton w-background-video--control"
                  >
                    <span className="play-state-2" />
                  </button>
                </div>
              </div>
            </div>
            {/* 3 content section start  */}
            <div className="flex flex-col gap-4">
              <h1 className="text-primary leading-[1.3em] font-bold text-[36px] lg:text-[48px]">
                MVP Development
              </h1>
              <p className="text-[#5f5f5d] font-normal text-[20px] leading-[1.5em] mb-4">
                Our Professional developers designers work together to build
                world class MVP that offer great user experiences. We focus on
                MVP development, making sure your product is easy to find and
                ready for market testing. After launching an MVP, you can
                gradually add features until it becomes a complete app.
              </p>
              {/* option section  */}
              <div className="grid grid-cols-2">
                <div className="flex flex-col gap-[10px]">
                  <div className="flex items-center gap-[10px]">
                    <p
                      className="h-[2px] w-[12px] bg-fourth
                  "
                    ></p>
                    <Link
                      href={"#"}
                      className="text-[#02ca5f] font-semibold text-[18px] leading-[28px] lg:font-bold underline"
                    >
                      MVP Development
                    </Link>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <p
                      className="h-[2px] w-[12px] bg-fourth
                  "
                    ></p>
                    <Link
                      href={"#"}
                      className="text-[#02ca5f] font-semibold text-[18px] leading-[28px] lg:font-bold underline"
                    >
                      MVP For Sartups
                    </Link>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <p
                      className="h-[2px] w-[12px] bg-fourth
                  "
                    ></p>
                    <Link
                      href={"#"}
                      className="text-[#02ca5f] font-semibold text-[18px] leading-[28px] lg:font-bold underline"
                    >
                      MVP App
                    </Link>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <p
                      className="h-[2px] w-[12px] bg-fourth
                  "
                    ></p>
                    <Link
                      href={"#"}
                      className="text-[#02ca5f] font-semibold text-[18px] leading-[28px] lg:font-bold underline"
                    >
                      MVP Web
                    </Link>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <p
                      className="h-[2px] w-[12px] bg-fourth
                  "
                    ></p>
                    <Link
                      href={"#"}
                      className="text-black font-semibold lg:font-bold text-[18px] leading-[28px] "
                    >
                      SaaS MVP
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* content section end  */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMain;
