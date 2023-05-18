import { Checkbox } from "@mui/material";
import { BookingInformation } from "@/pages/_app";
import { useState, useContext, useEffect } from "react";

export function GreenCamp() {
  const [bookingDetails, setBookingDetails] = useContext(BookingInformation);
  const [greenCamp, setGreenCamp] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  // function changeGreenCamp(e) {
  //   const isGreenCampChecked = e.target.checked;
  //   setGreenCamp(isGreenCampChecked);
  // }

  function changeIsChecked() {
    isChecked ? setIsChecked(false) : setIsChecked(true);
  }

  function updateBookingDetails() {
    console.log(`updateBookingInformation called`);
    setBookingDetails((prev) => ({
      ...prev,
      greenCamp: isChecked,
    }));
  }

  useEffect(() => {
    updateBookingDetails();
  }, [isChecked]);
  return (
    <>
      <div className="flex justify-around m-10">
        <h3 onClick={changeIsChecked}>GreenCamp</h3>

        <Checkbox onChange={changeIsChecked} checked={isChecked}></Checkbox>
      </div>
    </>
  );
}
