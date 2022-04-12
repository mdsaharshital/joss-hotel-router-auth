import React from "react";

import img1 from "../../../images/hotel-room1.jpg";
import img2 from "../../../images/hotel-room2.jpg";
import img3 from "../../../images/hotel-room3.jpg";
import BookingRoom from "../BookinRoom/BookingRoom";

const Booking = () => {
  const packages = [
    { id: 1, name: "Single room", price: 200, img: img1 },
    { id: 2, name: "Couple room", price: 300, img: img3 },
    { id: 3, name: "Presidential room", price: 500, img: img2 },
  ];
  return (
    <div className="my-5 container mx-auto">
      <h1 className="text-center text-4xl font-bold text-red-400">Book Now</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto g-4">
        {packages.map((pack) => (
          <BookingRoom key={pack.id} pack={pack} />
        ))}
      </div>
    </div>
  );
};

export default Booking;
