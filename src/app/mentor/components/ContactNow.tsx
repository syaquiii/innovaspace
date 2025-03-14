import React, { useState, useEffect } from "react";
import ContactImg from "@/assets/img/contactnow.png";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { setMentor } from "@/api/services/mentor";
import { AxiosError } from "axios";
import { Lock, CheckCircle } from "lucide-react";

interface ContactNowProps {
  mentorId: string;
}

const ContactNow: React.FC<ContactNowProps> = ({ mentorId }) => {
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSetMentor = async () => {
    try {
      setIsError(false);
      setIsSuccess(false);
      setErrorMessage(null);
      setSuccessMessage(null);
      const response = await setMentor(mentorId);
      console.log("Mentor set successfully:", response);
      setIsSuccess(true);
      setSuccessMessage("Mentor berhasil ditambahkan!");
      setTimeout(() => {
        setIsSuccess(false);
        setSuccessMessage(null);
      }, 2000); // Reset success state and message after 2 seconds
    } catch (error: unknown) {
      console.error("Error setting mentor:", error);

      if (error instanceof AxiosError) {
        if (error.response && error.response.status === 409) {
          setIsError(true);
          setErrorMessage(error.response.data.message || "Conflict error");
        } else {
          setErrorMessage(error.message);
        }
      } else {
        setErrorMessage("An unexpected error occurred");
      }
    }
  };

  useEffect(() => {}, [isError, errorMessage, isSuccess, successMessage]);

  return (
    <div className="flex justify-center mt-8 lg:mt-20">
      <div className="min-h-60 gap-x-10 py-10 lg:py-0 items-center px-28 mycontainer lg:rounded-[6rem] lg:w-2/3 bg-light-default flex flex-col lg:flex-row justify-between">
        <div className="lg:w-1/3 flex justify-center w-full">
          <Image
            className="w-40 lg:w-40 h-fit aspect-square"
            src={ContactImg}
            alt="Contact Image"
          />
        </div>

        <div className="lg:w-1/3 text-center text-2xl lg:text-4xl font-bold">
          <h4 className="text-normal-default">Hubungi</h4>
          <h4>Sekarang!</h4>
        </div>
        <div className="lg:w-1/3 mt-2">
          <Button
            className={`w-full flex justify-center ${
              isError
                ? "bg-red-500 hover:bg-red-600 "
                : isSuccess
                ? "bg-green-500"
                : "bg-blue-500"
            }`}
            onClick={handleSetMentor}
            disabled={isError}
          >
            {isError ? (
              <span>
                <Lock />
              </span>
            ) : isSuccess ? (
              <span>
                <CheckCircle />
              </span>
            ) : (
              "Hubungi Sekarang"
            )}
          </Button>
          {isError && errorMessage && (
            <p className="text-red-500 text-xs mt-2 text-center">
              {errorMessage}
            </p>
          )}
          {isSuccess && successMessage && (
            <p className="text-green-500 text-xs mt-2 text-center">
              {successMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactNow;
