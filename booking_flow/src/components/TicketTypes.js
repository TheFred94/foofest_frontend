import { BookingInformation } from "@/pages/_app";
import { useState, useContext, useEffect } from "react";

export function TicketTypes() {
  // sets default state
  const [bookingDetails, setBookingDetails] = useContext(BookingInformation);
  const [ticketType, setTicketType] = useState("");
  // console.log(bookingDetails);

  function pickTicketType(type) {
    setTicketType(type);
  }

  // This function updates the bookingInformation, so that it  also contains the clicked area
  function updateBookingDetails() {
    console.log(`updateBookingInformation called`);
    setBookingDetails((prev) => ({
      ...prev,
      ticketType: ticketType,
    }));
  }

  useEffect(() => {
    updateBookingDetails();
  }, [ticketType]);

  return (
    <>
      <section className="grid-cols-2 grid my-10 	">
        <div className="text-center cursor-pointer" onClick={() => pickTicketType("regular")}>
          <h3>Regular</h3>
          <p>No goodies</p>
        </div>

        <div className="text-center cursor-pointer" onClick={() => pickTicketType("vip")}>
          <h3>VIP</h3>
          <p>All the goodies</p>
        </div>
      </section>
    </>
  );
}
