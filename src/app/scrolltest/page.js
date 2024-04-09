import React from "react";
import "../../components/scroll/gsapscroll"

const Page = () => {
  return (
    <>
      <section className="py-96 w-full bg-bg ">
        <div className="container mx-auto px-4">
          <div className="smooth-wrapper">
            <div className="smooth-content">
              <h1 className="text-2xl font-semibold text-center mb-40">ScrollSmoother</h1>

              <div className="boxes flex items-center justify-center gap-40">
                <div className="box box-a bg-purple-500 h-20 w-20 flex items-center justify-center text-2xl text-white">a</div>
                <div className="box box-a bg-purple-600 h-20 w-20 flex items-center justify-center text-2xl text-white">b</div>
                <div className="box box-a bg-purple-700 h-20 w-20 flex items-center justify-center text-2xl text-white">c</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
