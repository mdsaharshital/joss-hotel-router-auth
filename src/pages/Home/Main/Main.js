import React from "react";
import mainimg from "../../../images/main-cover.jpg";

const Main = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 container mx-auto h-screen">
        <div className="text-center md:text-left flex items-center">
          <h2 className="text-3xl font-bold ">
            Welcome to <span className="text-red-400">Joss Hotel !</span>
          </h2>
        </div>
        <div className="flex items-center h-full">
          <img className="" src={mainimg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Main;
