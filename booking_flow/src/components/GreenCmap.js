import { Checkbox } from "@mui/material";
import { BookingInformation } from "@/pages/_app";
import { useState, useContext, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Typography } from "@mui/material";
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
        <FormGroup className="flex items-center">
          <FormControlLabel
            control={
              <Checkbox
                onChange={changeIsChecked}
                checked={isChecked}
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
            label={<Typography style={{ fontFamily: "var(--font-josefin" }}>Want us to set up your camp?</Typography>}
            className="flex items-center text-color-white font-sans pt-5"
          />
        </FormGroup>
      </div>
    </>
  );
}
