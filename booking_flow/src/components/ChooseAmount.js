import { TicketAmountPicker } from "./TicketAmountPicker";

export default function ChooseAmount() {
  return (
    <>
      <div className="mx-3 rounded-2 mb-8">
        <div className="grid place-content-center bg-gradient-to-b from-color-opacity-20 to-color-opacity-10 ">
          <h2 className="text-center m-8 serif">Amount</h2>
          <TicketAmountPicker />
        </div>
      </div>
    </>
  );
}
