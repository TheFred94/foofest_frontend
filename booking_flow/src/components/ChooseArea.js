import { useEffect, useState } from "react";
import { BookingInformation } from "@/pages/_app";

import { AreaList } from "./AreaList";

export function ChooseArea(props) {
  const [areas, setAreas] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8080/available-spots`)
      .then((res) => res.json())
      .then((data) => {
        setAreas(data);
      });
  }, []);

  return (
    <>
      <h2 className="text-center my-8">Vælg område</h2>

      {areas === "" ? <p></p> : <AreaList areas={areas} ticketAmount={props.ticketAmount} />}
    </>
  );
}
