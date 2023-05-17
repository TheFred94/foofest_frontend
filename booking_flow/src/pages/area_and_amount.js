import { useState, useContext, useEffect } from "react";
import { BookingInformation } from "./_app";
import ChooseAmount from "@/components/ChooseAmount";
import { ChooseArea } from "../components/ChooseArea";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
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
      <h1 className="text-center"> Køb billet</h1>
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
      <div className="flex justify-center">
        <Button
          className="rounded-none border-2 border-solid place-self-center border-color-yellow h-10 px-10 text-color-yellow hover:bg-color-yellow hover:text-color-black"
          onClick={reserveTickets}
        >
          KØB BILLET
        </Button>
      </div>
    </main>
  );
}
