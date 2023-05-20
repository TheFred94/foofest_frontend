import Button from "@mui/material/Button";

export function TentCounter(props) {
  return (
    <>
      <div className="mb-6">
        <p className="mb-8 mt-8 text-center ">{`${props.size} Person tent ${
          props.price !== 0 && props.price !== undefined ? props.price + ",-" : ""
        }`}</p>

        <div className="flex items-center	 justify-center">
          <Button
            className="rounded-2 h-14 place-self-center border-2 border-solid border-color-yellow font-sans text-5xl font-bold text-color-blue"
            variant="contained"
            style={{ backgroundColor: "yellow" }}
            onClick={() =>
              props.addOrSubtractTent(false, props.size, props.type)
            } /* this button subtracts one from ticketAmount */
          >
            -
          </Button>

          <p className="mx-16 text-5xl font-bold">{props.PersonInTentNum}</p>

          <Button
            className="rounded-2 h-14 place-self-center border-2 border-solid border-color-yellow font-sans text-5xl font-bold text-color-blue"
            variant="text"
            style={{ backgroundColor: "yellow" }}
            onClick={() => props.addOrSubtractTent(true, props.size, props.type)} /* this button adds one to ticketAmount */
          >
            +
          </Button>
        </div>
      </div>
    </>
  );
}
