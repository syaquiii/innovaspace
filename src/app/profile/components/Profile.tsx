import { handleLogout } from "@/action/handleLogout";
import { Button } from "@/components/ui/Button";
import { useUserContext } from "@/hooks/useUserContext";
import Link from "next/link";
import React from "react";

const Profile = () => {
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
    <div className="flex flex-col lg:flex-row mt-4 lg:mt-0  gap-4 justify-center lg:justify-start   items-center">
      <div className="w-24 sm:w-1/4  lg:w-40 aspect-square rounded-full bg-darker-default" />
      <div className="flex flex-col gap-2 lg:gap-4">
        <div className="flex flex-col text-center lg:text-left">
          <span className=" text-2xl  lg:text-4xl font-bold">
            {profile.nama}
          </span>
          <span className=" text-sm lg:text-lg font-normal">
            @{profile.username}
          </span>
        </div>
        <div className="flex lg:w-72 w-full  items-center gap-2  ">
          <Link className="w-full" href={"editprofile"}>
            <Button
              className=" w-full text-sm  lg:text-lg"
              variant="normal"
              size={"normal"}
            >
              {"Edit"}
            </Button>
          </Link>
          <Button
            className=" w-full text-sm lg:text-lg"
            variant="danger"
            size={"normal"}
            onClick={() => handleLogout()}
          >
            {"Keluar"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
