import "@/styles/globals.css";
import { createContext, useState } from "react";
import { Josefin_Sans } from "next/font/google";
import { Playfair_Display } from "next/font/google";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const BookingInformation = createContext();

export default function App({ Component, pageProps }) {
  const [bookingInformation, setBookingInformation] = useState({});
  return (
    <>
      <BookingInformation.Provider value={[bookingInformation, setBookingInformation]}>
        <main className={`${josefinSans.variable} font-sans ${playfairDisplay.variable} font-serif `}>
          <Component {...pageProps} />
        </main>
      </BookingInformation.Provider>
    </>
  );
}
