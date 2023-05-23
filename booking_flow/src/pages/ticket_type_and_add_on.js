import { useState, useContext } from "react";
import { BookingInformation } from "./_app";
import ChooseAmount from "@/components/ChooseAmount";
import { ChooseArea } from "../components/ChooseArea";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { TicketTypes } from "../components/TicketTypes";
import { CampAddOns } from "@/components/CampAddOns";
import "material-symbols";

export default function TicketTypeAndAddOn() {
  const [bookingDetails, setBookingDetails] = useContext(BookingInformation);
  const router = useRouter();
  function loginfo() {
    console.log(bookingDetails);
  }

  function nextPage() {
    router.push(bookingDetails.oneTentForEach ? `/index` : `/tent_selection`);
  }
  return (
    <>
      <main>
        <h2 className="mx-4 mt-10 text-center">
          {/* {" "}
          {bookingInformation.ticketAmount > 1 ? "Regular og VIP tickets" : "Regular or VIP ticket"} */}
          Choose ticket type
        </h2>

        <TicketTypes />

        <h2 className="text-center">Camp Setup</h2>

        <CampAddOns></CampAddOns>

        <Button onClick={loginfo}> logbookingINformation</Button>

        <div className="mt-10 flex justify-center">
          <Button
            className=" mb-10 h-10 gap-5 place-self-center rounded-none border-2 border-solid border-color-yellow px-6 font-sans font-semibold text-color-yellow hover:bg-color-yellow hover:text-color-black "
            onClick={nextPage}
          >
            <span className="pt-1">Next step</span> <span className="material-symbols-outlined">arrow_forward</span>
          </Button>
        </div>
      </main>
    </>
  );
}
