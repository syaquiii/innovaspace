import { Button } from "@/components/ui/Button";
import DummyUser from "@/data/DummyUser";
import React from "react";

const Profile = () => {
  const profile = DummyUser;
  return (
    <div className="flex gap-4 justify-center lg:justify-start  items-center">
      <div className="w-28  lg:w-32 aspect-square rounded-full bg-darker-default" />
      <div className="flex flex-col gap-2 lg:gap-4">
        <span className=" text-2xl lg:text-6xl font-bold">
          {profile.user.firstName + profile.user.lastName}
        </span>
        <Button className="w-2/3" variant="normal" size={"normal"}>
          Edit Profile
        </Button>
      </div>
    </div>
  );
};

export default Profile;
