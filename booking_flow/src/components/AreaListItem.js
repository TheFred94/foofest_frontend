import { BookingInformation } from "@/pages/_app";
import { useContext } from "react";

export function AreaListItem(props) {
  const area = props.area;
  const [bookingDetails, setBookingDetails] = useContext(BookingInformation);

  function updateBookingInformation() {
    // console.log(area.area);
    setBookingDetails((prev) => ({
      ...prev,
      area: area.area,
    }));
  }

  return (
    <>
      <li className="m-2.5 px-5 py-2 bg-color-back cursor-pointer" onClick={updateBookingInformation}>
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
