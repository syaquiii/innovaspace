import React from "react";

const Hero = () => {
  return (
    <div className="bg-mentor h-screen">
      <div className="w-full h-screen flex  pb-24 lg:pb-32   items-end mycontainer ">
        <div className="lg:w-2/3">
          <h2 className="lg:text-7xl text-3xl font-bold">Cari Mentor</h2>
          <p className="font-semibold text-xs lg:text-xl text-justify leading-4 ">
            Butuh bimbingan langsung dari ahlinya? Temukan mentor terbaik di
            Innova Space yang siap membantumu mengembangkan ide, meningkatkan
            keterampilan, dan mencapai tujuanmu. Jelajahi berbagai bidang, pilih
            mentor sesuai kebutuhan, dan mulai perjalanan belajarmu hari ini!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
