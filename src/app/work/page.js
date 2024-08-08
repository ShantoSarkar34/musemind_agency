"use client";
import React from "react";
import WorkeHero from "@/components/Work/WorkHero";
import Header from "@/components/Header";
import ServiceHeader from "@/components/Services/ServiceHeader";
import Work from "@/components/Work/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <>
      <ServiceHeader />
      <WorkeHero />
      <Work />
      <Contact />
      <Footer />
    </>
  );
};

export default Page;
