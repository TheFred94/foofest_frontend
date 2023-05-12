import { TicketAmountPicker } from "./TicketAmountPicker";

export default function ChooseAmount() {
  return (
    <>
      <div>
        <div className="grid place-content-center">
          <h3 className="text-center m-8">Antal</h3>
          <TicketAmountPicker />
        </div>
      </div>
    </>
  );
}
