import { useState, useContext, useEffect } from "react";
import { BookingInformation } from "./_app";
import ChooseAmount from "@/components/ChooseAmount";
import { ChooseArea } from "../components/ChooseArea";

export default function AreaAndAmount() {
  // States
  const [bookingDetails, setBookingDetails] = useContext(BookingInformation);

  return (
    <main>
      <h1>Køb billet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
        sapien.
      </p>

      <ChooseAmount />

      {/* <ChooseArea ticketAmount={ticketAmount} /> */}

      <div className=" grid place-content-center">
        <button
          className="bg-color-white p-5 m-5"
          onClick={() => {
            console.log(`This is bookingDetails: `, bookingDetails);
          }}
        >
          Log bookingDetails
        </button>
      </div>
    </main>
  );
}
