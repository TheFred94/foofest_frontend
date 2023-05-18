import Button from "@mui/material/Button";

export function TentCounter(props) {
  return (
    <>
      <p className="text-center ">{`${props.size} Person tent`}</p>

      <div className="flex justify-center	 items-center">
        <Button
          className="font-bold text-5xl rounded-2 border-2 border-solid place-self-center border-color-yellow text-color-blue h-14 font-sans"
          variant="contained"
          style={{ backgroundColor: "yellow" }}
          onClick={() => props.addOrSubtractTent(false, props.size)} /* this button subtracts one from ticketAmount */
        >
          -
        </Button>

        <p className="mx-16 font-bold text-5xl">{props.PersonInTentNum}</p>

        <Button
          className="text-color-blue font-bold text-5xl font-sans rounded-2 border-2 border-solid place-self-center border-color-yellow h-14"
          variant="text"
          style={{ backgroundColor: "yellow" }}
          onClick={() => props.addOrSubtractTent(true, props.size)} /* this button adds one to ticketAmount */
        >
          +
        </Button>
      </div>
    </>
  );
}
