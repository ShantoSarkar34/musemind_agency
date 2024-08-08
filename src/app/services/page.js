"use client";
import React from "react";
import ServiceHero from "@/components/Services/ServiceHero";
import ServiceHeader from "@/components/Services/ServiceHeader";
import ServiceMain from "@/components/Services/ServiceMain";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const Page = () => {
  return (
    <>
      <ServiceHeader />
      <ServiceHero />
      <ServiceMain />
      <Contact />
      <Footer />
    </>
  );
};

export default Page;
