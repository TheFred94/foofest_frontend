import { TicketAmountPicker } from "./TicketAmountPicker";
import Button from "@mui/material/Button";
export default function ChooseAmount() {
  return (
    <>
      <div>
        <div className="grid place-content-center">
          <h3 className="text-center m-8">Antal</h3>
          <TicketAmountPicker />
        </div>

        <Button variant="outlined" className="grid place-content-center">
          Find billetter
        </Button>
      </div>
    </>
  );
}
