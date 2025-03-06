"use client";
import React, { useRef } from "react";
import { Materi } from "@/type/TDummyData";
import { Button } from "@/components/ui/Button";
import { ArrowDown } from "lucide-react";
import useMateriReducer from "@/hooks/useMateriReducer";

interface MateriListProps {
  dataMateri: Materi[];
}

const MateriList: React.FC<MateriListProps> = ({ dataMateri }) => {
  const materiDescRef = useRef<HTMLDivElement>(null);

  const {
    state,
    handleMateriClick,
    toggleMateri,
    handleNext,
    handlePrevious,
    materiRef,
  } = useMateriReducer(dataMateri);

  return (
    <div className="flex flex-col lg:flex-row gap-10 mt-10">
      <div className="lg:w-1/3">
        <ul className="flex flex-col gap-4">
          {dataMateri.map((materi, index) => (
            <div key={materi.id_materi} className="">
              <Button
                className="w-full justify-between relative z-10 flex "
                size={"lg"}
                onClick={() => {
                  toggleMateri(materi.id_materi);
                  handleMateriClick(materi.id_materi);
                }}
              >
                Bab {index + 1}
                <span>
                  <ArrowDown />
                </span>
              </Button>

              <div
                className={`transition-transform  -mt-2 pt-4 z-0 duration-300 ease-in-out ${
                  state.openMateriId === materi.id_materi
                    ? "opacity-100 translate-y-0  "
                    : "opacity-0 -translate-y-8 fixed z "
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
        className="w-full h-[20rem] bg-light-default rounded-xl shadow-lg p-6"
      >
        {state.materiTerpilih ? (
          <div
            ref={materiRef}
            className="flex justify-between flex-col  h-full"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4">
                {state.materiTerpilih.judul}
              </h2>
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
              {state.isFinished ? (
                <Button
                  className="flex items-center gap-2 font-semibold"
                  variant={"green"}
                >
                  Finish
                </Button>
              ) : (
                <Button
                  className="flex items-center gap-2 font-semibold"
                  variant={"outline"}
                  onClick={handleNext}
                  disabled={state.currentIndex === dataMateri.length - 1}
                >
                  Selanjutnya
                </Button>
              )}
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
