import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Layanan from "./components/Layanan";

const page = () => {
  return (
    <section className="">
      <Hero />
      <About />
      <Layanan />
    </section>
  );
};

export default page;
