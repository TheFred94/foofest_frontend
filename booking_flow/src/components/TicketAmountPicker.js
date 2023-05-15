import Button from "@mui/material/Button";
import { BookingInformation } from "@/pages/_app";
import { useContext, useState, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export function TicketAmountPicker(props) {
  const [bookingDetails, setBookingDetails] = useContext(BookingInformation);
  const [ticketAmount, setTicketAmount] = useState(1);
  const [oneTentForEach, setOneTentForEach] = useState(false);

  useEffect(() => {
    updateBookingDetails();
  }, [ticketAmount, oneTentForEach]);

  function addOrSubtractTicket(action) {
    action ? setTicketAmount((old) => old + 1) : setTicketAmount((old) => old - 1);
  }

  function updateBookingDetails() {
    const newAmount = ticketAmount;

    // console.log(`newAmount: `, newAmount);

    setBookingDetails((prev) => ({
      ...prev,
      amount: newAmount,
      oneTentForEach: oneTentForEach,
    }));
  }

  function tentForEach(e) {
    const isChecked = e.target.checked;

    // console.log(isChecked);

    isChecked ? setOneTentForEach(true) : setOneTentForEach(false);
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

      <FormGroup>
        <FormControlLabel
          onClick={tentForEach}
          control={<Checkbox />}
          label="One tent for each person"
          className="text-color-white"
        />
      </FormGroup>
    </>
  );
}
