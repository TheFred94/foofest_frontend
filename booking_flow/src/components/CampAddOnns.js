import { CampSetUp } from "./CampSetUp";
import { GreenCamp } from "./GreenCmap";
import { TentSelection } from "./TentSelection";
export function CamptAddOns() {
  return (
    <>
      <div>
        <GreenCamp />

        <CampSetUp />

        <TentSelection />
      </div>
    </>
  );
}
