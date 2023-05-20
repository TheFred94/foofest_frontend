import Button from "@mui/material/Button";
import { BookingInformation } from "@/pages/_app";
import { useContext, useState, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";

export function TicketAmountPicker(props) {
  // Creates const variables and sets defaultState
  const [bookingDetails, setBookingDetails] = useContext(BookingInformation);
  const [ticketAmount, setTicketAmount] = useState(1);
  const [oneTentForEach, setOneTentForEach] = useState(false);
  const [twoPersonTentNum, setTwoPersonTentNum] = useState(0);
  const [numberOfTickets, setNumberOfTickets] = useState(0);

  /* makes sure that bookingDetails is updated everytime either  "ticketAmount" or "oneTentForEach" changes */
  useEffect(() => {
    updateBookingDetails();
  }, [ticketAmount, oneTentForEach]);

  // This function is checks action, and if action is true 1 is added to ticketAmount, but if it's false, then it subtracts one from ticketAmount
  function addOrSubtractTicket(action) {
    action ? setTicketAmount((old) => old + 1) : setTicketAmount((old) => old - 1);
    oneTentForEach ? setTwoPersonTentNum(bookingDetails.ticketAmount) : setTwoPersonTentNum(0);
  }

  /*This function updates bookingDetails, by setting state to the new values of "ticketAmount" and oneTentForEach*/
  function updateBookingDetails() {
    setBookingDetails((prev) => ({
      ...prev,
      ticketAmount: ticketAmount,
      oneTentForEach: oneTentForEach,
      tents: { "2personTent": twoPersonTentNum, "3personTent": 0 },
    }));
  }

  /* This function is responsible for setting "oneTentForEach" to true if the checkbox is checked, and to false if it's  not.  */
  function tentForEach(e) {
    // takes value from checkbox and gives it to the "isChecked" variable.
    const isChecked = e.target.checked;
    isChecked ? setTwoPersonTentNum(bookingDetails.amount) : setTwoPersonTentNum(0);

    // if isChecked is true then set "oneTentForEach" to true, else set it to false
    isChecked ? setOneTentForEach(true) : setOneTentForEach(false);
  }

  return (
    <>
      <div className="flex items-center">
        <Button
          className="rounded-2 h-14 place-self-center border-2 border-solid border-color-yellow font-sans text-5xl font-bold text-color-blue"
          variant="contained"
          style={{ backgroundColor: "yellow" }}
          onClick={() => addOrSubtractTicket(false)} /* this button subtracts one from ticketAmount */
        >
          -
        </Button>

        <p className="mx-16 text-5xl font-bold">{ticketAmount}</p>

        <Button
          className="rounded-2 h-14 place-self-center border-2 border-solid border-color-yellow font-sans text-5xl font-bold text-color-blue"
          variant="text"
          style={{ backgroundColor: "yellow" }}
          onClick={() => addOrSubtractTicket(true)} /* this button adds one to ticketAmount */
        >
          +
        </Button>
      </div>

      {/* This formGroup contains, the checkbox, that determines if everyone should be able to have their own tent. */}
      <FormGroup className="flex items-center">
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
                  ".MuiTouchRippe-root": {
                    color: "yellow",
                  },
                  "&.MuiCheckbox-root": {
                    fontFamily: "var(--font-josefin)",
                  },
                },
              }}
            />
          }
          label={<Typography style={{ fontFamily: "var(--font-josefin" }}>One tent for each person?</Typography>}
          className="flex items-center pt-5 font-sans text-color-white"
        />
      </FormGroup>
    </>
  );
}
