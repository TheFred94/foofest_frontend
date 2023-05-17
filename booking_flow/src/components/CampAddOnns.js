import { CampSetUp } from "./CampSetUp";
import { GreenCamp } from "./GreenCmap";
import Button from "@mui/material/Button";
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

function TentSelection() {
  return (
    <>
      <div>
        <div className="flex justify-around">
          <h3>2 person tent </h3>

          <div className="flex">
            <Button className="text-color-white" variant="text">
              -
            </Button>

            <p className="mx-10">0</p>

            <Button className="text-color-white" variant="text">
              +
            </Button>
          </div>
        </div>
        <div className="flex justify-around">
          <h3>3 person tent </h3>

          <div className="flex">
            <Button className="text-color-white" variant="text">
              -
            </Button>

            <p className="mx-10">0</p>

            <Button className="text-color-white" variant="text">
              +
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
