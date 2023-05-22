import { useContext, useState, useEffect } from "react";
import { TentCounter } from "@/components/TentCounter";
import { BookingInformation } from "@/pages/_app";
import "material-symbols";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";

export default function TentSelection() {
  // set default state

  const [twoPersonTentNum, setTwoPersonTentNum] = useState(0);
  const [threePersonTentNum, setThreePersonTentNum] = useState(0);
  const [twoPersonTentPrivatNum, setTwoPersonTentPrivatNum] = useState(0);
  const [threePersonTentPrivatNum, setThreePersonTentPrivatNum] = useState(0);
  const [bookingDetails, setBookingDetails] = useContext(BookingInformation);
  const [totalTentCount, setTotalTentCount] = useState(0);
  const [spotsLeft, setSpotsLeft] = useState(bookingDetails.spotAmount - totalTentCount);
  // state for modal
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    updateTotalTentCount();
    updateSpotsLeft();
  }, [bookingDetails, totalTentCount]);

  function updateTotalTentCount() {
    setTotalTentCount(twoPersonTentNum + threePersonTentNum + twoPersonTentPrivatNum + threePersonTentPrivatNum);
  }

  function updateSpotsLeft() {
    setSpotsLeft(bookingDetails.spotAmount - totalTentCount);
    console.log(spotsLeft);
  }

  function addOrSubtractTent(action, size, type) {
    if (action && spotsLeft <= 0) {
      handleOpen();
    } else {
      if (type === "privat") {
        if (size === 2) {
          action ? setTwoPersonTentPrivatNum((old) => old + 1) : setTwoPersonTentPrivatNum((old) => old - 1);
        } else if (size === 3) {
          action ? setThreePersonTentPrivatNum((old) => old + 1) : setThreePersonTentPrivatNum((old) => old - 1);
        }
      } else if (type === "foofest") {
        if (size === 2) {
          action ? setTwoPersonTentNum((old) => old + 1) : setTwoPersonTentNum((old) => old - 1);
        } else if (size === 3) {
          action ? setThreePersonTentNum((old) => old + 1) : setThreePersonTentNum((old) => old - 1);
        }
      }
    }
  }

  useEffect(() => {
    updateBookingDetails();
  }, [twoPersonTentNum, threePersonTentNum, twoPersonTentPrivatNum, threePersonTentPrivatNum]);

  /*This function updates bookingDetails, by setting state to the new values of "ticketAmount" and oneTentForEach*/
  function updateBookingDetails() {
    setBookingDetails((prev) => ({
      ...prev,
      tents: {
        "2personTent": twoPersonTentNum,
        "3personTent": threePersonTentNum,
        "2personTentPrivat": twoPersonTentPrivatNum,
        "3personTentPrivat": threePersonTentPrivatNum,
      },
    }));
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
              You ran out of spots
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{
                mt: 2,
              }}
            >
              You have ran out of tent spots, if you want to fit more peope then buy or bring bigger tents
            </Typography>
          </Box>
        </Fade>
      </Modal>
      <section>
        <h2 className="  mt-20 text-center">Tent Setup</h2>

        <article className="mt-5 grid place-content-center">
          <p
            className={spotsLeft <= 0 ? "text-color-yellow" : "text-color-white"}
          >{`You have  ${spotsLeft} spots left to use.`}</p>
        </article>

        <div>
          {bookingDetails.campSetUp ? (
            ""
          ) : (
            <article className="mb-20 mt-12">
              <h3 className="text-center">Bring your own tent</h3>
              <small className="mt-3 grid place-content-center opacity-75">How many tents do you bring yourself?</small>
              <div className="mt-6 flex flex-col  ">
                <TentCounter
                  size={2}
                  PersonInTentNum={twoPersonTentPrivatNum}
                  addOrSubtractTent={addOrSubtractTent}
                  type={"privat"}
                />
                <TentCounter
                  size={3}
                  PersonInTentNum={threePersonTentPrivatNum}
                  addOrSubtractTent={addOrSubtractTent}
                  type={"privat"}
                />
              </div>
            </article>
          )}

          <article className="mt-12">
            <h3 className="text-center">Buy tents from FooFest</h3>
            <small className="mt-3 grid place-content-center opacity-75">How many tents do you want to buy?</small>
            <div className="mt-6 flex flex-col  ">
              <TentCounter
                size={2}
                PersonInTentNum={twoPersonTentNum}
                addOrSubtractTent={addOrSubtractTent}
                price={299}
                type={"foofest"}
              />
              <TentCounter
                size={3}
                PersonInTentNum={threePersonTentNum}
                addOrSubtractTent={addOrSubtractTent}
                price={399}
                type={"foofest"}
              />
            </div>
          </article>
        </div>

        {/* --------- these buttons is for testing  -------------- */}
        {/* <button
          className="m-5 bg-color-white p-5"
          onClick={() => {
            console.log(`This is bookingDetails: `, bookingDetails);
          }}
        >
          Log bookingDetails
        </button>

        <button
          className="m-5 bg-color-white p-5"
          onClick={() => {
            console.log(`This is bookingDetails: `, bookingDetails.tents);
          }}
        >
          Log tents
        </button>

        <button onClick={() => console.log(spotsLeft)}> se spotsleft</button> */}
      </section>
    </>
  );
}
