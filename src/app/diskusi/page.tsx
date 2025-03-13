import React from "react";
import CreateThread from "./components/CreateThread";
import AllThreads from "./components/AllThreads";

const page = () => {
  return (
    <div className="min-h-screen bg-langganan">
      <div className="mycontainer flex flex-col-reverse lg:flex-row py-52 gap-20">
        <div className="lg:w-3/4 ">
          <CreateThread />
          <h1 className="text-2xl font-bold my-4">All Threads</h1>

          <AllThreads />
        </div>
      </div>
    </div>
  );
};

export default page;
