import { BookingInformation } from "@/pages/_app";
import { useContext, useState } from "react";

//
//
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export function AreaListItem(props) {
  const area = props.area;
  const [bookingDetails, setBookingDetails] = useContext(BookingInformation);
  const [areaModal, setAreaModal] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function checkTicketAndArea() {
    console.log(`checkTicketAndArea`);
    (bookingDetails.amount < 3 && area.available > bookingDetails.amount) || bookingDetails.amount / 3 <= area.available
      ? updateBookingInformation()
      : handleOpen();
  }

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

  function updateBookingInformation() {
    console.log(`updateBookingInformation called`);
    setBookingDetails((prev) => ({
      ...prev,
      area: area.area,
    }));
  }

  return (
    <>
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

      <li className="m-2.5 px-5 py-2 bg-color-back cursor-pointer" onClick={checkTicketAndArea}>
        <h3>{area.area}</h3>
        <p
          className={
            (bookingDetails.amount < 3 && area.available > bookingDetails.amount) || bookingDetails.amount / 3 <= area.available
              ? "text-color-white"
              : "text-color-purple"
          }
        >
          {area.available} spots left
        </p>
      </li>
    </>
  );
}
