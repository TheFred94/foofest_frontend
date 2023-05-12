import { AreaListItem } from "./AreaListItem";

export function AreaList(props) {
  // console.log(props.area);

  return (
    <>
      <div className="grid place-content-center">
        <ul className="grid-cols-2 grid">
          {props.areas.map((area) => (
            <AreaListItem area={area} ticketAmount={props.ticketAmount} />
          ))}
        </ul>
      </div>
    </>
  );
}
