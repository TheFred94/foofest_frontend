import { BookingInformation } from "@/pages/_app";
import { useContext } from "react";

export function AreaListItem(props) {
  const area = props.area;
  const [bookingDetails, setBookingDetails] = useContext(BookingInformation);

  function updateBookingInformation() {
    // console.log(area.area);
    setBookingDetails({
      area: area.area,
    });
  }

  function logBookingInformation() {
    console.log(bookingDetails);
  }

  return (
    <>
      <li className="m-2.5 px-5 py-2 bg-color-back cursor-pointer" onClick={updateBookingInformation}>
        <h3>{area.area}</h3>
        <p
          className={
            (props.ticketAmount < 3 && area.available > props.ticketAmount) || props.ticketAmount / 3 <= area.available
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
