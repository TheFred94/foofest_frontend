import { BookingInformation } from "@/pages/_app";
import { useContext, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

export function AreaListItem(props) {
  // creates variables and sets defaultState

  // reasigns props.area to area for easy use later
  const area = props.area;
  // sets state of bookingDetails to our context(BookingInformation).
  const [bookingDetails, setBookingDetails] = useContext(BookingInformation);
  // state for modal
  const [open, setOpen] = useState(false);

  // creates functions to handle modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  /* This function checks if there is enough available spots for the chosen amount of tickets  */
  function checkTicketAndArea() {
    // checks if you want to have a tent spot for each ticket, or if you are willing to share tent.
    if (bookingDetails.oneTentForEach === true) {
      // Checks if there is enough spots available
      bookingDetails.amount <= area.available ? updateBookingInformation() : handleOpen();
    } else if (bookingDetails.oneTentForEach === false) {
      // Checks if there is enough spots available
      (bookingDetails.amount < 3 && area.available > bookingDetails.amount) || bookingDetails.amount / 3 <= area.available ? updateBookingInformation() : handleOpen();
    }
  }
  // styling for modal
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#000",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  // This function updates the bookingInformation, so that it  also contains the clicked area
  function updateBookingInformation() {
    // console.log(`updateBookingInformation called`);
    setBookingDetails((prev) => ({
      ...prev,
      area: area.area,
    }));
  }

  // This function helps to indicate whether an area is available based on the amount of tickets you have chosen.
  // if the area is available then the text is white, else it's purple
  function areaAvailable() {
    if (bookingDetails.oneTentForEach === true) {
      return bookingDetails.amount <= area.available ? "text-color-white" : "text-color-purple";
    } else if (bookingDetails.oneTentForEach === false) {
      return (bookingDetails.amount < 3 && area.available > bookingDetails.amount) || bookingDetails.amount / 3 <= area.available ? "text-color-white" : "text-color-purple";
    }
  }

  return (
    <>
      {/* modal from mui */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Der er ikke nok ledige pladser!
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              For at købe billetter til dette område bedes du justere på antal a billetter
            </Typography>
          </Box>
        </Fade>
      </Modal>

      <li className="bg-gradient-to-b from-color-opacity-20 to-color-opacity-10 m-2.5 px-5 py-2 bg-color-back cursor-pointer" onClick={checkTicketAndArea}>
        <h3>{area.area}</h3>
        <p
          className={
            // class is based on return of areaAvailable function
            areaAvailable()
          }
        >
          {area.available} spots left
        </p>
      </li>
    </>
  );
}
