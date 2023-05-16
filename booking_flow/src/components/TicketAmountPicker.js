import Button from "@mui/material/Button";
import { BookingInformation } from "@/pages/_app";
import { useContext, useState, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export function TicketAmountPicker(props) {
  // Creates const variables and sets defaultState
  const [bookingDetails, setBookingDetails] = useContext(BookingInformation);
  const [ticketAmount, setTicketAmount] = useState(1);
  const [oneTentForEach, setOneTentForEach] = useState(false);

  /* makes sure that bookingDetails is updated everytime either  "ticketAmount" or "oneTentForEach" changes */
  useEffect(() => {
    updateBookingDetails();
  }, [ticketAmount, oneTentForEach]);

  // This function is checks action, and if action is true 1 is added to ticketAmount, but if it's false, then it subtracts one from ticketAmount
  function addOrSubtractTicket(action) {
    action ? setTicketAmount((old) => old + 1) : setTicketAmount((old) => old - 1);
  }

  /*This function updates bookingDetails, by setting state to the new values of "ticketAmount" and oneTentForEach*/
  function updateBookingDetails() {
    setBookingDetails((prev) => ({
      ...prev,
      amount: ticketAmount,
      oneTentForEach: oneTentForEach,
    }));
  }

  /* This function is responsible for setting "oneTentForEach" to true if the checkbox is checked, and to false if it's  not.  */
  function tentForEach(e) {
    // takes value from checkbox and gives it to the "isChecked" variable.
    const isChecked = e.target.checked;

    // if isChecked is true then set "oneTentForEach" to true, else set it to false
    isChecked ? setOneTentForEach(true) : setOneTentForEach(false);
  }

  return (
    <>
      <div className="flex">
        <Button className="text-color-white " variant="text" onClick={() => addOrSubtractTicket(false)} /* this button subtracts one from ticketAmount */>
          -
        </Button>

        <p className="mx-10 font-bold text-5xl">{ticketAmount}</p>

        <Button className="text-color-white " variant="text" onClick={() => addOrSubtractTicket(true)} /* this button adds one to ticketAmount */>
          +
        </Button>
      </div>

      {/* This formGroup contains, the checkbox, that determines if everyone should be able to have their own tent. */}
      <FormGroup>
        <FormControlLabel
          onClick={tentForEach}
          control={
            <Checkbox
              sx={{
                "& .MuiSvgIcon-root": {
                  color: "yellow",
                  "&.Mui-checked": {
                    color: "yellow",
                  },
                  "&.MuiTouchRippe-root": {
                    color: "yellow",
                  },
                },
              }}
            />
          }
          label="One tent for each person"
          className="text-color-white font-sans"
        />
      </FormGroup>
    </>
  );
}
