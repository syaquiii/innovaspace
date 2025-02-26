import React from "react";

const Layanan = () => {
  return (
    <div className="bg-ourblack -mt-10">
      <div className="mycontainer h-fit pb-32 lg:flex justify-between gap-x-10 text-white">
        <div>
          <h2 className="text-6xl font-bold ">Layanan</h2>
          <h3 className="text-4xl mt-2 font-bold">Kami</h3>
        </div>
        <div className="lg:flex mt-10 lg:mt-0  gap-4 w-full justify-between text-black">
          <div className="lg:w-3/4">
            <div className="layanan1 bg-gray-200 rounded-3xl h-32 text-xs 2xl:text-lg lg:h-44 p-4 lg:p-2 lg:text-sm xl:p-8">
              Kelas interaktif dengan pengalaman belajar yang mendorong
              eksplorasi ide, problem-solving, dan pengembangan keterampilan
              seru dan kolaboratif.
            </div>
            <div className="flex gap-4 mt-4">
              <div className="h-52 layanan2 bg-gray-200 w-full text-xs   2xl:text-lg rounded-3xl p-4 lg:p-2 lg:text-sm xl:p-8">
                Mentor berpengalaman di bidangnya yang siap membimbingmu dengan
                pendekatan interaktif dan personal.
              </div>
              <div className="h-52 layanan3 bg-gray-200 w-full rounded-3xl 2xl:text-lg text-xs p-4 lg:p-2 lg:text-sm xl:p-8">
                Ruang diskusi yang seru untuk bertukar ide, pengalaman, dan
                perspektif!
              </div>
            </div>
          </div>
          <div className="bg-gray-200 layanan4 mt-4 h-32 lg:h-full lg:mt-0 2xl:text-lg text-xs lg:w-1/4 rounded-3xl lg:p-2 lg:text-sm xl:p-8 p-4">
            Sebuah jembatan antara inovator dan investor yang siap mendukung
            ide-ide brilianmu.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layanan;
