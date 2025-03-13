import React from "react";

const EmptyCard = () => {
  return (
    <div className="p-8 bg-gray-100 rounded-lg min-h-40">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-blue-400"></div>
        <div></div>
      </div>
      <p className="font-light mt-4"></p>
    </div>
  );
};

export default EmptyCard;
