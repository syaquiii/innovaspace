import { Button } from "@/components/ui/Button";
import { dummyData } from "@/data/DummyData";
import { Tuser } from "@/type/TDummyData";
import Link from "next/link";
import React from "react";

const Profile = ({ hasbuttonToProfile }: { hasbuttonToProfile: boolean }) => {
  const profile: Tuser = dummyData.user[0];
  return (
    <div className="flex mt-4 lg:mt-0  gap-4 justify-center lg:justify-start   items-center">
      <div className="w-1/3  lg:w-24 aspect-square rounded-full bg-darker-default" />
      <div className="flex flex-col justify-center lg:gap-4">
        <span className=" text-xl lg:text-4xl font-bold">{profile.nama}</span>
        <Link href={hasbuttonToProfile ? "/profile" : "/editprofile"}>
          <Button
            className="lg:w-2/3 w-full text-sm"
            variant="normal"
            size={"normal"}
          >
            {hasbuttonToProfile ? "Profile" : "edit Profile"}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
