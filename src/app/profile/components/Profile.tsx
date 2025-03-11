import { Button } from "@/components/ui/Button";
import { useUserContext } from "@/hooks/useUserContext";
import Link from "next/link";
import React from "react";

const Profile = ({ hasbuttonToProfile }: { hasbuttonToProfile: boolean }) => {
  const { userProfile, loading, error } = useUserContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userProfile) {
    return <div>No user profile found.</div>;
  }

  const profile = userProfile;

  return (
    <div className="flex mt-4 lg:mt-0  gap-4 justify-center lg:justify-start   items-center">
      <div className="w-1/3 sm:w-1/4  lg:w-24 aspect-square rounded-full bg-darker-default" />
      <div className="flex flex-col gap-2 lg:gap-4">
        <span className=" text-sm  lg:text-4xl font-bold">
          {profile.username}
        </span>
        <div className="flex flex-col gap-4  justify-between ">
          <Link
            className="flex-grow"
            href={hasbuttonToProfile ? "/profile" : "editprofile"}
          >
            <Button
              className=" w-full text-xs lg:text-lg"
              variant="normal"
              size={"normal"}
            >
              {hasbuttonToProfile ? "Profile" : "edit Profile"}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
