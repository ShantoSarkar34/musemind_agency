"use client";
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Weare from "@/components/Weare";
import Footer from "@/components/Footer";
import WeOffer from "@/components/WeOffer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Weare/>
      <WeOffer/>
      <Footer/>
    </>
  );
}
