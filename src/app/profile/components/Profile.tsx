import { handleLogout } from "@/action/handleLogout";
import { Button } from "@/components/ui/Button";
import { useUserContext } from "@/hooks/useUserContext";
import { DoorOpen } from "lucide-react";
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
        <div className="flex  items-center gap-2  ">
          <Link
            className="w-full"
            href={hasbuttonToProfile ? "/profile" : "editprofile"}
          >
            <Button
              className=" w-full text-xs lg:text-sm"
              variant="normal"
              size={"normal"}
            >
              {hasbuttonToProfile ? "Profile" : "Edit"}
            </Button>
          </Link>

          <DoorOpen
            onClick={handleLogout}
            className="w-10 h-10 text-red-600 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
