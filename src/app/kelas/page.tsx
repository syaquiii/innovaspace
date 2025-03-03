"use client";
import { useKelasContext } from "@/hooks/useKelasContext";
import Hero from "./components/Hero";
import Content from "./components/Content";

const Page = () => {
  const { kelas } = useKelasContext();
  const dataKelas = kelas;
  console.log(dataKelas);
  return (
    <section className="h-fit ">
      <Hero />
      <div className="min-h-[50rem] lg:py-10 py-4   bg-white mycontainer">
        <div>ini search</div>
        <Content />
      </div>
    </section>
  );
};

export default Page;
