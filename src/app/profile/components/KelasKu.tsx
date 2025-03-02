import DummyUser from "@/data/DummyUser";
import React from "react";
import KelaskuCard from "./KelaskuCard";

const KelasKu = () => {
  const dataKelasKu = DummyUser.user.userProfile.kelasku;
  return (
    <div className="">
      <div className="flex flex-col gap-10">
        {dataKelasKu.map((item, index) => (
          <KelaskuCard kelas={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default KelasKu;
