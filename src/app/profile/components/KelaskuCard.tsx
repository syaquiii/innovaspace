import React from "react";
import { TUserProfile } from "@/type/TDummyUser";
import { Button } from "@/components/ui/Button";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
type KelaskuCardProps = {
  kelas: TUserProfile["kelasku"][number];
};
{
  //     <CircularProgressbar
  //     className="w-24 h-24 "
  //     value={kelas.progressPercentage}
  //     maxValue={100}
  //     text={`${kelas.progressPercentage}%`}
  //     styles={buildStyles({ pathColor: `#3484fb`, textColor: "#000000" })}
  //   />
  /* <h3 className="text-lg font-semibold">{kelas.title}</h3>
<p>Progress: {kelas.progressPercentage}%</p>
Add any other relevant details and styles here */
}

const KelaskuCard: React.FC<KelaskuCardProps> = ({ kelas }) => {
  return (
    <div className="p-4 w-full flex-col lg:flex-row flex  gap-4 bg-light-default rounded-xl border  shadow-md">
      <div className="lg:w-80 lg:h-32 h-fit w-full  aspect-video rounded-3xl bg-normal-default"></div>
      <div className=" w-full  py-4">
        <h1 className="text-xl font-bold">{kelas.title}</h1>
        <div className="flex  justify-between gap-4 items-center mt-6 md:mt-4 lg:-mt-4">
          <Button size={"normal"} className="w-2/3 lg:w-1/4 text-sm h-fit">
            Lanjutkan
          </Button>
          <div className="w-1/3  ">
            <CircularProgressbar
              className="w-16 h-16  lg:h-24 lg:w-24 "
              value={kelas.progressPercentage}
              maxValue={100}
              text={`${kelas.progressPercentage}%`}
              styles={buildStyles({
                pathColor: `#3484fb`,
                textColor: "#000000",
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KelaskuCard;
