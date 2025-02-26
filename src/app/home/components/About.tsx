import React from "react";

const About = () => {
  return (
    <div className="bg-ourblack -mt-2">
      <div className=" min-h-[20rem] lg:min-h-[30rem] text-white items-center gap-6 flex flex-col py-20 justify center mycontainer">
        <h2 className="text-5xl  lg:text-6xl  font-bold  w-full text-center">
          Tentang Kami
        </h2>
        <p className="text-xs lg:text-sm text-center lg:w-[80%]">
          Innova Space hadir sebagai ruang kolaborasi dan belajar bagi para
          inovator, kreator, dan wirausahawan untuk mengembangkan ide menjadi
          solusi nyata. Kami percaya bahwa setiap individu punya potensi besar
          yang bisa diwujudkan dengan bimbingan yang tepat dan akses ke sumber
          daya berkualitas. Melalui berbagai kelas interaktif, mentoring
          eksklusif, dan komunitas yang suportif, Innova Space menjadi jembatan
          bagi mereka yang ingin tumbuh dan berinovasi. Bersama kami,
          perjalananmu menuju kesuksesan bukan lagi sekadar mimpi. ✨
        </p>
      </div>
    </div>
  );
};

export default About;
