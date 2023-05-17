import { useState, useContext, useEffect } from "react";
import { BookingInformation } from "./_app";
import ChooseAmount from "@/components/ChooseAmount";
import { ChooseArea } from "../components/ChooseArea";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { TicketTypes } from "../components/TicketTypes";
import { CamptAddOns } from "@/components/CampAddOnns";

export default function TicketTypeAndAddOn() {
  const [bookingInformation, setBookingInformation] = useContext(BookingInformation);
  function loginfo() {
    console.log(bookingInformation);
  }
  return (
    <>
      <main>
        <h2 className="text-center"> {bookingInformation.amount > 1 ? "Regular og VIP tickets" : "Regular or VIP ticket"}</h2>

        <TicketTypes />

        <h2 className="text-center">Camp Setup</h2>

        <CamptAddOns></CamptAddOns>

        <Button onClick={loginfo}> logbookingINformation</Button>
      </main>
    </>
  );
}
