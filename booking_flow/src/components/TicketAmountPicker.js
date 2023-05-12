import Button from "@mui/material/Button";
import { BookingInformation } from "@/pages/_app";
import { useContext, useState } from "react";

export function TicketAmountPicker(props) {
  const [bookingDetails, setBookingDetails] = useContext(BookingInformation);
  const [ticketAmount, setTicketAmount] = useState(1);

  // setBookingDetails({ amount: props.ticketAmount });

  // function ticketTing(action) {
  //   action ? setTicketAmount((old) => old + 1) : setTicketAmount((old) => old - 1);

  //   console.log(ticketAmount);
  // }

  function addOrSubtractTicket(action) {
    action ? setTicketAmount((old) => old + 1) : setTicketAmount((old) => old - 1);

    updateBookingDetails();
  }

  function updateBookingDetails() {
    const newAmount = ticketAmount;

    console.log(`newAmount: `, newAmount);

    setBookingDetails({
      amount: newAmount,
    });
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
