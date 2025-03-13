"use client";
import { useMentorContext } from "@/hooks/useMentorContext";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import ContactNow from "../components/ContactNow";
import { Mail } from "lucide-react";
import Image from "next/image";
import { Mentor } from "@/type/Tmentor";

const Page = () => {
  const pathname = usePathname();
  const currenPath = pathname.split("/");
  const mentorId = currenPath.length > 2 ? currenPath[2] : null;

  const { fetchMentorDetails } = useMentorContext();
  const [mentorDetails, setMentorDetails] = useState<Mentor | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      if (mentorId) {
        const details = await fetchMentorDetails(mentorId);
        setMentorDetails(details);
      }
    };

    fetchDetails();
  }, [mentorId, fetchMentorDetails]);

  if (!mentorId || !mentorDetails) {
    return <div>Loading...</div>;
  }

  const pengalamanKerja: string[] = mentorDetails.pengalaman_kerja
    ? JSON.parse(mentorDetails.pengalaman_kerja)
    : [];
  const pencapaian: string[] = mentorDetails.pencapaian
    ? JSON.parse(mentorDetails.pencapaian)
    : [];
  const topikAjar: string[] = mentorDetails.topik_ajar
    ? JSON.parse(mentorDetails.topik_ajar)
    : [];
  const keahlian: string[] = mentorDetails.keahlian
    ? JSON.parse(mentorDetails.keahlian)
    : [];

  return (
    <div className="min-h-screen bg-langganan">
      <div className="mycontainer py-24 lg:py-52">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-4 items-center h-full">
          <div className="lg:w-1/5 w-2/3 h-fit aspect-square rounded-full bg-normal-default">
            <Image
              width={200}
              height={200}
              src={mentorDetails.profil_mentor}
              alt={`${mentorDetails.nama}`}
              className="w-full h-full object-cover object-top rounded-full"
            />
          </div>
          <div className="lg:w-4/5 flex flex-col gap-4">
            <h4 className="lg:text-4xl text-center lg:text-start font-bold">
              {mentorDetails.nama}
            </h4>
            <p className="text-xs lg:text-sm text-justify">
              {mentorDetails.deskripsi}
            </p>
            <h5 className="bg-normal-default text-center text-sm px-2 py-1 lg:w-fit rounded-lg text-white">
              {mentorDetails.spesialisasi}
            </h5>
          </div>
        </div>
        <div className="w-full h-full flex flex-col lg:flex-row lg:gap-20 mt-9 lg:mt-20">
          <div className="lg:w-1/2  w-full flex flex-col gap-4">
            <div className="w-full">
              <h4 className="font-bold  text-xl">Insitusi</h4>
              <div className="bg-light-default p-4 text-sm rounded-lg shadow-sm">
                <p>{mentorDetails.pendidikan}</p>
              </div>
            </div>
            <div className="w-full">
              <h4 className="font-bold  text-xl">Pencapaian</h4>
              <div className="bg-light-default  p-4 text-sm rounded-lg shadow-sm">
                <ul className="list-disc list-inside">
                  {pencapaian.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full">
              <h4 className="font-bold  text-xl">Pengalaman Kerja</h4>
              <div className="bg-light-default  p-4 text-sm rounded-lg shadow-sm">
                <ul className="list-disc list-inside">
                  {pengalamanKerja.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full">
              <h4 className="font-bold  text-xl">Contact</h4>
              <div className="bg-light-default  p-4 text-sm rounded-lg shadow-sm">
                <p className="flex items-center gap-2">
                  <Mail />
                  {mentorDetails.email}
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mt-4">
            <div className="w-full">
              <h4 className="font-bold  text-xl">Keahlian</h4>
              <div className="bg-light-default  p-4 text-sm rounded-lg shadow-sm">
                <ul className="list-disc list-inside">
                  {keahlian.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="w-full mt-4">
                <h4 className="font-bold  text-xl">Topik yang di ajarkan</h4>
                <div className="bg-light-default  p-4 text-sm rounded-lg shadow-sm">
                  <ul className="list-disc list-inside">
                    {topikAjar.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactNow />
      </div>
    </div>
  );
};

export default Page;
