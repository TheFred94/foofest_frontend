import Button from "@mui/material/Button";
import { BookingInformation } from "@/pages/_app";
import { useContext, useState, useEffect } from "react";

export function TicketAmountPicker(props) {
  const [bookingDetails, setBookingDetails] = useContext(BookingInformation);
  const [ticketAmount, setTicketAmount] = useState(1);

  useEffect(() => {
    updateBookingDetails();
  }, [ticketAmount]);

  function addOrSubtractTicket(action) {
    action ? setTicketAmount((old) => old + 1) : setTicketAmount((old) => old - 1);
  }

  function updateBookingDetails() {
    const newAmount = ticketAmount;

    console.log(`newAmount: `, newAmount);

    setBookingDetails((prev) => ({
      ...prev,
      amount: newAmount,
    }));
  }
  return (
    <>
      <div className="flex">
        <Button className="text-color-white" variant="text" onClick={() => addOrSubtractTicket(false)}>
          -
        </Button>

        <p className="mx-10">{ticketAmount}</p>

        <Button className="text-color-white" variant="text" onClick={() => addOrSubtractTicket(true)}>
          +
        </Button>
      </div>
    </>
  );
}
