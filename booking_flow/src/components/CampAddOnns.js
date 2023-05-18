import { useContext, useState, useEffect } from "react";
import { CampSetUp } from "./CampSetUp";
import { GreenCamp } from "./GreenCmap";
import { TentSelection } from "./TentSelection";
import { BookingInformation } from "@/pages/_app";
export function CamptAddOns() {
  const [bookingDetails, setBookingDetails] = useContext(BookingInformation);

  return (
    <>
      <div>
        <GreenCamp />

        <CampSetUp />

        {bookingDetails.oneTentForEach ? "" : <TentSelection />}
      </div>
    </>
  );
}
