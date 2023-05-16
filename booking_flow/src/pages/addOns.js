import { useState, useContext, useEffect } from "react";
import { BookingInformation } from "./_app";
import ChooseAmount from "@/components/ChooseAmount";
import { ChooseArea } from "../components/ChooseArea";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
export default function AddOns() {
  const [bookingInformation, setBookingInformation] = useContext(BookingInformation);
  function loginfo() {
    console.log(bookingInformation);
  }
  return (
    <>
      <main>
        <h1> addOns test</h1>

        <Button onClick={loginfo}> logbookingINformation</Button>
      </main>
    </>
  );
}
