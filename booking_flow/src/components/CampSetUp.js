import { Checkbox } from "@mui/material";
import { BookingInformation } from "@/pages/_app";
import { useState, useContext, useEffect } from "react";
export function CampSetUp() {
  const [bookingDetails, setBookingDetails] = useContext(BookingInformation);

  const [isChecked, setIsChecked] = useState(false);

  function changeIsChecked() {
    isChecked ? setIsChecked(false) : setIsChecked(true);
  }

  function updateBookingDetails() {
    console.log(`updateBookingInformation called`);
    setBookingDetails((prev) => ({
      ...prev,
      campSetUp: isChecked,
    }));
  }

  useEffect(() => {
    updateBookingDetails();
  }, [isChecked]);

  return (
    <>
      <div className="flex justify-around m-10">
        <h3 onClick={changeIsChecked}>Want us to setup your camp for you?</h3>
        <Checkbox onChange={changeIsChecked} checked={isChecked}></Checkbox>
      </div>
    </>
  );
}
