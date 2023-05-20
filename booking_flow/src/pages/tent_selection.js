import { useContext, useState, useEffect } from "react";
import { TentCounter } from "@/components/TentCounter";
import { BookingInformation } from "@/pages/_app";
import "material-symbols";

export default function TentSelection() {
  // set default state

  const [twoPersonTentNum, setTwoPersonTentNum] = useState(0);
  const [threePersonTentNum, setThreePersonTentNum] = useState(0);
  const [twoPersonTentPrivatNum, setTwoPersonTentPrivatNum] = useState(0);
  const [threePersonTentPrivatNum, setThreePersonTentPrivatNum] = useState(0);
  const [bookingDetails, setBookingDetails] = useContext(BookingInformation);

  function addOrSubtractTent(action, size, type) {
    if (type === "privat") {
      if (size === 2) {
        action ? setTwoPersonTentPrivatNum((old) => old + 1) : setTwoPersonTentPrivatNum((old) => old - 1);
      } else if (size === 3) {
        action ? setThreePersonTentPrivatNum((old) => old + 1) : setThreePersonTentPrivatNum((old) => old - 1);
      }
    } else if (type === "foofest") {
      if (size === 2) {
        action ? setTwoPersonTentNum((old) => old + 1) : setTwoPersonTentNum((old) => old - 1);
      } else if (size === 3) {
        action ? setThreePersonTentNum((old) => old + 1) : setThreePersonTentNum((old) => old - 1);
      }
    }
  }

  useEffect(() => {
    updateBookingDetails();
  }, [twoPersonTentNum, threePersonTentNum]);

  /*This function updates bookingDetails, by setting state to the new values of "ticketAmount" and oneTentForEach*/
  function updateBookingDetails() {
    setBookingDetails((prev) => ({
      ...prev,
      tents: {
        "2personTent": twoPersonTentNum,
        "3personTent": threePersonTentNum,
        "2personTentPrivat": twoPersonTentPrivatNum,
        "3personTentPrivat": threePersonTentPrivatNum,
      },
    }));
  }

  return (
    <>
      <section>
        <h2 className="  mt-20 text-center">Tent Setup</h2>

        <div>
          {bookingDetails.campSetUp ? (
            ""
          ) : (
            <article className="mb-20 mt-12">
              <h3 className="text-center">Bring your own tent</h3>
              <small className="mt-3 grid place-content-center opacity-75">How many tents do you bring yourself?</small>
              <div className="mt-6 flex flex-col  ">
                <TentCounter
                  size={2}
                  PersonInTentNum={twoPersonTentPrivatNum}
                  addOrSubtractTent={addOrSubtractTent}
                  type={"privat"}
                />
                <TentCounter
                  size={3}
                  PersonInTentNum={threePersonTentPrivatNum}
                  addOrSubtractTent={addOrSubtractTent}
                  type={"privat"}
                />
              </div>
            </article>
          )}

          <article className="mt-12">
            <h3 className="text-center">Buy tents from FooFest</h3>
            <small className="mt-3 grid place-content-center opacity-75">How many tents do you want to buy?</small>
            <div className="mt-6 flex flex-col  ">
              <TentCounter
                size={2}
                PersonInTentNum={twoPersonTentNum}
                addOrSubtractTent={addOrSubtractTent}
                price={299}
                type={"foofest"}
              />
              <TentCounter
                size={3}
                PersonInTentNum={threePersonTentNum}
                addOrSubtractTent={addOrSubtractTent}
                price={399}
                type={"foofest"}
              />
            </div>
          </article>
        </div>
        <button
          className="m-5 bg-color-white p-5"
          onClick={() => {
            console.log(`This is bookingDetails: `, bookingDetails);
          }}
        >
          Log bookingDetails
        </button>
      </section>
    </>
  );
}
