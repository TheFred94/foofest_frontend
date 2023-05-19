import { useState, useContext, useEffect } from "react";
import { BookingInformation } from "./_app";
import ChooseAmount from "@/components/ChooseAmount";
import { ChooseArea } from "../components/ChooseArea";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import "material-symbols";

export default function AreaAndAmount() {
  // States

  /* creates state for our useContext "BookingInformation" that wraps around the hole app */
  const [bookingDetails, setBookingDetails] = useContext(BookingInformation);
  const router = useRouter();
  async function reserveTickets() {
    const payload = { area: bookingDetails.area, amount: bookingDetails.amount };

    const response = await fetch("http://localhost:8080/reserve-spot", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const json = await response.json();
    console.log(json);
    updateBookingDetails(json.id);
    router.push(`/ticket_type_and_add_on`);
  }
  function updateBookingDetails(reservation_id) {
    setBookingDetails((prev) => ({
      ...prev,
      reservation_id,
    }));
  }

  return (
    <main>
      <h1 className="text-center mx-4 mt-10"> Purchase ticket</h1>
      <p className="pt-10 pb-10 mx-4">
        With the mesmerizing <strong>Northern Lights</strong> as your backdrop, get ready to lose yourself to the beats of the loudest music that's sure to get your heart racing.
      </p>

      {/* component, that lets user choose amount of tickets */}
      <ChooseAmount />

      {/* Component, that lets user choose area, based on amount of tickets */}
      <ChooseArea />

      {/* button for testing, just logs bookingDetails */}
      <div className=" grid place-content-center">
        {/* Used to log the booking information to make sure the correct data is logged for the further flow */}
        {/* <button
          className="bg-color-white p-5 m-5"
          onClick={() => {
            console.log(`This is bookingDetails: `, bookingDetails);
          }}
        >
          Log bookingDetails
        </button> */}
      </div>
      <div className="flex justify-center mt-10">
        <Button className=" rounded-none border-2 border-solid place-self-center border-color-yellow h-10 mb-10 px-6 text-color-yellow hover:bg-color-yellow hover:text-color-black font-sans font-semibold gap-5 " onClick={reserveTickets}>
          <span className="pt-1">Next step</span> <span className="material-symbols-outlined">arrow_forward</span>
        </Button>
      </div>
    </main>
  );
}
