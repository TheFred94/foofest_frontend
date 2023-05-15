import Head from "next/head";
import Anchor from "@/components/Anchor";
import Button from "@mui/material/Button";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import { ButtonBase, Skeleton } from "@mui/material";

export default function PersonalProgram({ schedule }) {
  console.log("Schedule", schedule);
  const [favorites, setFavorites] = useState();
  const [sLocalItems, setSLocalItems] = useState([]);
  const [gLocalItems, setGLocalItems] = useState([]);

  //OLD CODE
  useEffect(() => {
    const bands = JSON.parse(localStorage.getItem("bands"));
    if (bands) {
      setGLocalItems(bands);
      setSLocalItems(bands);
    }
  }, []);

  function deleteLocalStorage() {
    // const bands = JSON.parse(localStorage.getItem("bands"));
    // if (bands) {
    //   setGLocalItems(bands);
    // }
    localStorage.removeItem("bands");
    console.log("hey");
  }

  function addBand(e) {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(sLocalItems);
    {
      sLocalItems.length === 0 ? setSLocalItems([e.target[0].value]) : setSLocalItems([...sLocalItems, e.target[0].value]);
    }
    console.log(sLocalItems);

    pushToLocal();
  }

  function pushToLocal() {
    console.log(sLocalItems);
    localStorage.setItem("bands", JSON.stringify(sLocalItems));
  }

  return (
    <>
      <Head>
        <title>Personal Program overview</title>
      </Head>
      <Navbar />
      <main className="h-screen bg-color-green p-10">
        <h1 className="text text-color-black text-center mb-10">Your personal program</h1>
        <h3 className="text-center text-color-black">We collected all of your favorite bands in your personal program, so you can keep track of when and where they play.</h3>
        {schedule === 0 ? (
          <Skeleton sx={{ bgcolor: "grey.900" }} variant="rounded" width={210} height={60} />
        ) : (
          <section className="p-10 mx-auto">
            <div>
              <p>Filter</p>
            </div>
            <article className="mx-auto">
              <div>
                <h2>Midgard</h2>
                <h3 className="text-color-black">Schedule</h3>
                <ul>
                  <li>Et band</li>
                </ul>
              </div>
              <div>
                <h2>Vanaheim</h2>
                <h3 className="text-color-black">Schedule</h3>
              </div>
              <div>
                <h2>Jotunheim</h2>
                <h3 className="text-color-black">Schedule</h3>
              </div>
            </article>
          </section>
        )}
      </main>
      {/*   <article className="grid gap-4 grid-cols-2 items-center justify-items-center m-10">
        <form onSubmit={addBand}>
          <label>Add Band</label>
          <input></input>
          <ButtonBase type="submit" className="p-2 border-color-yellow border-solid border-2 mt-2">
            Add band to Local Storage
          </ButtonBase>
        </form>
        <div className="w-full">
          <ul className="text-color-blue border-color-yellow border-solid border-2 m2">
            {gLocalItems.map((band) => (
              <li key={band}>{band}</li>
            ))}
          </ul>
          <button onClick={() => console.log(sLocalItems)}>See S-LocalS </button>
          <button onClick={() => console.log(gLocalItems)}>See G-LocalS </button>
          <button onClick={() => deleteLocalStorage()}>Clear Local Storage! </button>
        </div>
      </article> */}
    </>
  );
}

export async function getServerSideProps() {
  const api = "http://localhost:8080/schedule";
  const res = await fetch(api);
  const data = await res.json();
  console.log(data);

  return {
    props: {
      schedule: data,
    },
  };
}
