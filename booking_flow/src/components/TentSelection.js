import Button from "@mui/material/Button";

export function TentSelection() {
  return (
    <>
      <div>
        <div className="flex justify-around">
          <p>2 person tent </p>

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
          <p>3 person tent </p>

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
