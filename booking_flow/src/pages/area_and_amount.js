import { useState, useContext, useEffect } from "react";
import { BookingInformation } from "./_app";
import ChooseAmount from "@/components/ChooseAmount";
import { ChooseArea } from "../components/ChooseArea";
import Button from "@mui/material/Button";
export default function AreaAndAmount() {
  // States

  /* creates state for our useContext "BookingInformation" that wraps around the hole app */
  const [bookingDetails, setBookingDetails] = useContext(BookingInformation);

  return (
    <main>
      <h1>Køb billet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
        sapien.
      </p>

      {/* component, that lets user choose amount of tickets */}
      <ChooseAmount />

      {/* Component, that lets user choose area, based on amount of tickets */}
      <ChooseArea />

      {/* button for testing, just logs bookingDetails */}
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
      <Button className="rounded-none border-2 border-solid place-self-center border-color-yellow h-10 px-10 text-color-yellow hover:bg-color-yellow hover:text-color-black">
        KØB BILLET
      </Button>
    </main>
  );
}
