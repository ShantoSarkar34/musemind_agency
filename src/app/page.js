"use client";
import React from "react";
// import "@/components/scroll/smothscroll"
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Weare from "@/components/Weare";
import Footer from "@/components/Footer";
import WeOffer from "@/components/WeOffer";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Weare />
      <WeOffer />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
