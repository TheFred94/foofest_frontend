import { useContext, useState, useEffect } from "react";
import { TentCounter } from "./TentCounter";
import { BookingInformation } from "@/pages/_app";

export function TentSelection() {
  // set default state

  const [twoPersonTentNum, setTwoPersonTentNum] = useState(0);
  const [threePersonTentNum, setThreePersonTentNum] = useState(0);
  const [bookingDetails, setBookingDetails] = useContext(BookingInformation);

  function addOrSubtractTent(action, size) {
    if (size === 2) {
      action ? setTwoPersonTentNum((old) => old + 1) : setTwoPersonTentNum((old) => old - 1);
    } else if (size === 3) {
      action ? setThreePersonTentNum((old) => old + 1) : setThreePersonTentNum((old) => old - 1);
    }
  }

  useEffect(() => {
    updateBookingDetails();
  }, [twoPersonTentNum, threePersonTentNum]);

  /*This function updates bookingDetails, by setting state to the new values of "ticketAmount" and oneTentForEach*/
  function updateBookingDetails() {
    setBookingDetails((prev) => ({
      ...prev,
      tents: { "2personTent": twoPersonTentNum, "3personTent": threePersonTentNum },
    }));
  }

  return (
    <>
      <div>
        <div className="mt-6 flex flex-col  ">
          <TentCounter size={2} PersonInTentNum={twoPersonTentNum} addOrSubtractTent={addOrSubtractTent} />
          <TentCounter size={3} PersonInTentNum={threePersonTentNum} addOrSubtractTent={addOrSubtractTent} />
        </div>
      </div>
    </>
  );
}
