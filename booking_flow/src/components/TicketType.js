import Radio from "@mui/material/Radio";

export function TicketType(props) {
  return (
    <>
      <article
        className="flex flex-col bg-gradient-to-b from-color-opacity-20 to-color-opacity-10 m-2.5 pl-2 pr-3 py-4 bg-color-back cursor-pointer h-32 w-42 rounded-sm"
        onClick={() => props.pickTicketType(props.radioValue)} /* makes the card clickable and calls 
        "pickTicketType" from parent component */
      >
        <div className="flex justify-between mr-0">
          {/* This is the heading of the card */}
          <h3 className={` text-lg self-center duration-200 `}>{`${props.ticketType}`}</h3>

          <Radio
            checked={props.selectedValue === props.radioValue}
            value={props.radioValue}
            name="radio-buttons"
            sx={{
              //styling for radio button to make it yellow
              m: 0,
              "& .MuiSvgIcon-root": {
                color: "yellow",
                fontSize: 20,

                "& .Mui-checked": {
                  color: "yellow",
                },
                "&.MuiTouchRippe-root": {
                  color: "yellow",
                },
              },
            }}
          />
        </div>
        <div className="flex justify-between mt-auto  ">
          {/* This is the explainer text for the card */}
          <p className={`self-center duration-200 `}>{`${props.typeAddOns}`}</p>
        </div>
      </article>
    </>
  );
}
