import { enrollUser } from "@/api/services/course";
import { Button } from "@/components/ui/Button";
import { Course } from "@/type/Tkelas";
import Image from "next/image";
import React, { FC } from "react";

type DetailKelas = {
  data: Course;
};

const DetailKelas: FC<DetailKelas> = ({ data }) => {
  const handleEnroll = async () => {
    try {
      const enrollRequest = {
        kelas_id: data.kelas_id,
      };
      const response = await enrollUser(enrollRequest);
      console.log("Enroll response:", response);
    } catch (error) {
      console.error("Error enrolling user:", error);
    }
  };

  return (
    <div>
      <h3 className="text-4xl font-bold text-center mb-10">💻 {data.nama}</h3>
      <div className="flex lg:flex-row flex-col gap-4 min-h-[20rem]">
        <div className="lg:w-1/2">
          <div className="w-full h-48 lg:h-[80%] overflow-hidden bg-normal-default rounded-3xl">
            <Image
              src={data.cover_course}
              className="w-[200%] "
              alt="a"
              width={100}
              height={100}
            />
          </div>
          <div className="flex lg:justify-between text-xs lg:text-sm gap-4 mt-4">
            <span className="bg-normal-default  px-2 py-1 text-white rounded-lg">
              {data.kategori}
            </span>
            <span className="bg-normal-default  px-2 py-1 text-white rounded-lg">
              {data.durasi} hours
            </span>
            <span className="bg-normal-default  px-2 py-1 text-white rounded-lg">
              {data.tingkat_kesulitan}
            </span>
          </div>
        </div>
        <div className="lg:w-1/2 lg:h-fit flex flex-col gap-4 justify-between bg-light-default rounded-2xl p-4">
          <div>
            <span className="font-bold lg:text-2xl">Overview</span>
            <p className="lg:text-lg text-xs mt-2 lg:mt-0 text-justify">
              {data.deskripsi}
            </p>
          </div>
          <Button
            disabled
            className="w-full"
            size={"normal"}
            onClick={handleEnroll}
          >
            Enroll
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DetailKelas;
