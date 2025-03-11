import React from "react";
import { Button } from "@/components/ui/Button";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Link from "next/link";
import { useKelasContext } from "@/hooks/useKelasContext";

type Course = {
  id_progress: number;
  id_user: number;
  id_materi: number;
  id_course: number;
  status: string;
  jawaban: string;
  courseName: string;
  contentId: number;
  percentage: number;
};

type KelaskuCardProps = {
  kelas: Course;
};

const KelaskuCard: React.FC<KelaskuCardProps> = ({ kelas }) => {
  const { getProgressPercentage } = useKelasContext();
  const progressPercentage = getProgressPercentage(kelas.id_course);
  const basePath = "/kelas";

  return (
    <div className="p-4 w-full flex-col lg:flex-row flex gap-4 bg-light-default rounded-xl border shadow-md">
      <div className="lg:w-80 lg:h-32 h-fit w-full aspect-video rounded-3xl bg-normal-default"></div>
      <div className="w-full py-4">
        <h1 className="text-xl font-bold">{kelas.courseName}</h1>
        <div className="flex justify-between gap-4 items-center mt-6 md:mt-4 lg:-mt-4">
          <Link
            className="w-2/3 lg:w-1/4 text-sm h-fit"
            href={`${basePath}/${kelas.id_course}`}
          >
            <Button className="w-full" size={"normal"}>
              Lanjutkan
            </Button>
          </Link>

          <div className="w-1/3">
            <CircularProgressbar
              className="w-10 h-10 lg:h-24 lg:w-24"
              value={progressPercentage}
              maxValue={100}
              text={`${progressPercentage}%`}
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
