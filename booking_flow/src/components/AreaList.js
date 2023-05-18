import { AreaListItem } from "./AreaListItem";

export function AreaList(props) {
  return (
    <>
      <div>
        <section className="grid-cols-2 grid ">
          {/* maps through area, and returns a component for each item.  */}
          {props.areas.map((area) => (
            <AreaListItem key={area.area} area={area} />
          ))}
        </section>
      </div>
    </>
  );
}
