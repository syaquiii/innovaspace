import Image from "next/image";
import React from "react";
import AuthAboutImg from "@/assets/img/authabout.png";
const AuthAbout = () => {
  return (
    <div className="mycontainer">
      <Image alt=" " src={AuthAboutImg} />
      <h4 className="mt-10 text-center">
        Innova Space – Tempat di mana belajar jadi lebih fleksibel, berkembang
        jadi lebih mudah, dan kesempatan baru selalu menanti! 🚀✨
      </h4>
    </div>
  );
};

export default AuthAbout;
