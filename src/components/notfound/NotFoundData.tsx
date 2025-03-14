import Image from "next/image";
import React from "react";
import NotFoundImg from "@/assets/img/notfoundcourse.png";
const NotFoundData = ({ errorDescription }: { errorDescription: string }) => {
  return (
    <div className="flex flex-col items-center w-full  h-full ">
      <Image className="lg:w-3/5" alt="notfoundcourse" src={NotFoundImg} />
      <p className="text-sm text-center lg:text-lg">{errorDescription}</p>
    </div>
  );
};

export default NotFoundData;
