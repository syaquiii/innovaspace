import { Mentor } from "@/type/TDummyData";
import React, { FC } from "react";

type IProps = {
  data: Mentor;
};

const ProfileMentor: FC<IProps> = (props) => {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-4 items-center h-full">
      <div className="lg:w-1/5 w-2/3 h-fit aspect-square rounded-full bg-normal-default"></div>
      <div className="lg:w-4/5 flex flex-col gap-4">
        <h4 className="lg:text-4xl text-center lg:text-start font-bold">
          {props.data.nama}
        </h4>
        <p className="text-xs lg:text-sm text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          nam rem eveniet, impedit hic pariatur asperiores velit similique odit
          voluptate deleniti dolorum itaque aliquid. Animi enim sint corrupti
          praesentium quasi autem aliquam, nihil nisi non. Consectetur doloribus
          alias consequatur dolore iure accusamus, culpa, adipisci excepturi
          deleniti, sed eaque quae labore.
        </p>
        <h5 className="bg-normal-default text-center text-sm px-2 py-1 lg:w-fit rounded-lg text-white">
          {props.data.preferensi}
        </h5>
      </div>
    </div>
  );
};

export default ProfileMentor;
