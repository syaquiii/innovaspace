import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Layanan from "./components/Layanan";
import Langganan from "./components/Langganan";

const page = () => {
  return (
    <section className="">
      <Hero />
      <About />
      <Layanan />
      <Langganan />
    </section>
  );
};

export default page;
