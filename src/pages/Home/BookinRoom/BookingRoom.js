import React from "react";
import { useNavigate } from "react-router-dom";

const BookingRoom = ({ pack }) => {
  const { name, price, img } = pack;
  const navigate = useNavigate();
  return (
    <>
      <div
        className="border-slate-200 border-2 mx-auto m-4 p-3 rounded-md"
        style={{ width: "320px" }}
      >
        <img src={img} className="rounded-md h-72" height="400" alt="" />
        <h2 className="text-2xl text-center">{name}</h2>
        <h1 className="text-xl text-center">${price}</h1>
        <button
          onClick={() => navigate("/checkout")}
          className="block font-bold my-2 py-1 px-3 bg-red-300 mx-auto"
        >
          Book Now
        </button>
      </div>
    </>
  );
};

export default BookingRoom;
