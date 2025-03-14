import { Button } from "@/components/ui/Button";
import { Mentor } from "@/type/Tmentor";
import React, { useState, useEffect } from "react";
import { useMentorContext } from "@/hooks/useMentorContext";
import Image from "next/image";

type MentorKuCardProps = {
  mentor: Mentor;
};

const MentorKuCard: React.FC<MentorKuCardProps> = ({ mentor }) => {
  const [mentorDetail, setMentorDetail] = useState<Mentor | null>(null);
  const { fetchMentorDetails } = useMentorContext();

  useEffect(() => {
    const fetchDetail = async () => {
      if (mentor.id) {
        const detail = await fetchMentorDetails(mentor.id);
        setMentorDetail(detail);
      }
    };

    fetchDetail();
  }, [mentor.id, fetchMentorDetails]);

  return (
    <div className="lg:w-[50%] p-8 flex flex-col justify-center bg-light-default min-h-[14rem]">
      <div className="flex flex-col lg:flex-row justify-between gap-4 items-center">
        <div className="lg:w-1/4 w-[10rem]  h-[10rem] aspect-square rounded-full">
          {mentorDetail && (
            <Image
              width={200}
              height={200}
              src={mentorDetail.profil_mentor}
              alt={mentorDetail.nama}
              className="w-full h-full object-cover object-top rounded-full"
            />
          )}
        </div>
        <div className="lg:w-3/4">
          <h4 className="text-4xl font-bold text-center lg:text-left">
            {mentorDetail ? mentorDetail.nama : "Loading..."}
          </h4>
          <p className="text-xs text-justify  p-2 rounded-lg">
            {mentorDetail ? mentorDetail.deskripsi : "Loading..."}
          </p>
        </div>
      </div>
      <Button className="mt-4">Hubungi</Button>
    </div>
  );
};

export default MentorKuCard;
