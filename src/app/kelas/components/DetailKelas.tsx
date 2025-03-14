import { enrollUser } from "@/api/services/course";
import { Button } from "@/components/ui/Button";
import { Course } from "@/type/Tkelas";
import Image from "next/image";
import React, { FC, useContext, useState } from "react";
import { UserContext } from "@/context/UserContext";

interface ApiError extends Error {
  response?: {
    data?: {
      errors?: string;
    };
  };
}

type DetailKelas = {
  data: Course;
};

const DetailKelas: FC<DetailKelas> = ({ data }) => {
  const { isUserEnrolled, userProfile } = useContext(UserContext);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [enrolled, setEnrolled] = useState<boolean>(
    isUserEnrolled(data.kelas_id)
  );

  const handleEnroll = async () => {
    if (!userProfile) return;

    try {
      const enrollRequest = {
        kelas_id: data.kelas_id,
      };
      const response = await enrollUser(enrollRequest);
      console.log("Enroll response:", response.message); // Debugging log
      setSuccess(response.message);
      setEnrolled(true); // Update enrollment status to true
      setError(null); // Clear any previous errors
    } catch (err) {
      const error = err as ApiError;
      console.error(
        "Error enrolling user:",
        error.response ? error.response.data : error.message
      );
      if (error.response && error.response.data && error.response.data.errors) {
        setError(error.response.data.errors);
      } else {
        setError("An unexpected error occurred.");
      }
      setSuccess(null); // Clear any previous success message
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
          <div className="flex text-xs lg:text-sm gap-4 mt-4">
            <span className="bg-normal-default px-2 py-1 text-white rounded-lg">
              {data.kategori}
            </span>
            <span className="bg-normal-default px-2 py-1 text-white rounded-lg">
              {data.durasi} hours
            </span>
            <span className="bg-normal-default px-2 py-1 text-white rounded-lg">
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
          {enrolled ? (
            <Button className="w-full" size={"normal"} disabled>
              Sudah Terdaftar
            </Button>
          ) : (
            <>
              <Button className="w-full" size={"normal"} onClick={handleEnroll}>
                Enroll
              </Button>
              {success && <div className="text-green-500 mt-2">{success}</div>}
              {error && (
                <div className="text-red-500 mt-2">
                  {error ===
                  "user must be a premium member to enroll this class"
                    ? "You must be a premium member to enroll in this class."
                    : error}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailKelas;
