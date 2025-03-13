"user client";
import React, { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowDown } from "lucide-react";
import useMateriReducer from "@/hooks/useMateriReducer";
import { Materi } from "@/type/Tkelas";

interface MateriListProps {
  dataMateri: Materi[];
}

const MateriList: React.FC<MateriListProps> = ({ dataMateri }) => {
  const materiDescRef = useRef<HTMLDivElement>(null);

  // Sort dataMateri with "Case Study" at the end
  const sortedDataMateri = [
    ...dataMateri.filter((materi) => materi.jenis_materi !== "Study Case"),
    ...dataMateri.filter((materi) => materi.jenis_materi === "Study Case"),
  ];

  const {
    state,
    handleMateriClick,
    toggleMateri,
    handleNext,
    handlePrevious,
    handleFinish,
    materiRef,
  } = useMateriReducer(sortedDataMateri); // Pass token

  const getEmbeddedURL = (url: string) => {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10 mt-10">
      <div className="lg:w-1/3">
        <ul className="flex flex-col gap-4">
          {sortedDataMateri.map((materi, index) => (
            <div key={materi.materi_id} className="">
              <Button
                className="w-full justify-between relative z-10 flex"
                size={"lg"}
                onClick={() => {
                  toggleMateri(materi.materi_id);
                  handleMateriClick(materi.materi_id);
                }}
              >
                {index === 0
                  ? "Introduction"
                  : materi.jenis_materi === "Study Case"
                  ? "Case Study"
                  : `Bab ${index}`}
                <span>
                  <ArrowDown />
                </span>
              </Button>

              <div
                className={`transition-transform -mt-2 pt-4 z-0 duration-300 ease-in-out ${
                  state.openMateriId === materi.materi_id
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-8 fixed"
                } p-4 bg-gray-100 rounded-lg`}
              >
                <h2 className="lg:text-xl font-bold">{materi.judul}</h2>
              </div>
            </div>
          ))}
        </ul>
      </div>
      <div
        ref={materiDescRef}
        className="w-full min-h-[20rem] bg-light-default rounded-xl shadow-lg p-6"
      >
        {state.materiTerpilih ? (
          <div ref={materiRef} className="flex justify-between flex-col h-full">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                {state.materiTerpilih.judul}
              </h2>
              {state.materiTerpilih.path_file &&
                state.materiTerpilih.path_file.length > 1 && (
                  <div className="w-full h-80 rounded-xl overflow-hidden">
                    <iframe
                      src={getEmbeddedURL(state.materiTerpilih.path_file)}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              <p>{state.materiTerpilih.deskripsi}</p>
            </div>
            <div className="mt-4 w-full text-xs flex justify-center gap-4">
              <Button
                className="flex items-center gap-2 font-semibold"
                variant={"outline"}
                onClick={handlePrevious}
                disabled={state.currentIndex === 0}
              >
                Sebelumnya
              </Button>
              <Button
                className={`flex items-center gap-2 font-semibold ${
                  state.isLoading ? "loading" : ""
                }`}
                variant={
                  state.isFinished[state.materiTerpilih.materi_id] &&
                  !state.isLoading
                    ? "green"
                    : "outline"
                }
                onClick={() => {
                  if (state.materiTerpilih) {
                    handleFinish(state.materiTerpilih.materi_id);
                  }
                }}
                disabled={!state.materiTerpilih || state.isLoading}
              >
                {state.isLoading
                  ? "Loading..."
                  : state.isFinished[state.materiTerpilih.materi_id]
                  ? "Finished"
                  : "Set Finish"}
              </Button>

              <Button
                className="flex items-center gap-2 font-semibold"
                variant={"outline"}
                onClick={handleNext}
                disabled={state.currentIndex === sortedDataMateri.length - 1}
              >
                Selanjutnya
              </Button>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">Pilih materi untuk melihat detail.</p>
        )}
      </div>
    </div>
  );
};

export default MateriList;
