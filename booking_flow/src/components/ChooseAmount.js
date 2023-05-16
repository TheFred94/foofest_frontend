import { TicketAmountPicker } from "./TicketAmountPicker";

export default function ChooseAmount() {
  return (
    <>
      <div>
        <div className="grid place-content-center bg-gradient-to-b from-color-opacity-20 to-color-opacity-10 ">
          <h3 className="text-center m-8 serif">Antal</h3>
          <TicketAmountPicker />
        </div>
      </div>
    </>
  );
}
