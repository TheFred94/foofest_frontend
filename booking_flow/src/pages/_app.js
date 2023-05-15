import "@/styles/globals.css";
import { createContext, useState } from "react";

export const BookingInformation = createContext();

export default function App({ Component, pageProps }) {
  const [bookingInformation, setBookingInformation] = useState({});
  return (
    <>
      <BookingInformation.Provider value={[bookingInformation, setBookingInformation]}>
        <Component {...pageProps} />
      </BookingInformation.Provider>
    </>
  );
}
