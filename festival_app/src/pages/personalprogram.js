import Head from "next/head";
import Anchor from "@/components/Anchor";
import Button from "@mui/material/Button";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import { ButtonBase } from "@mui/material";
export default function PersonalProgram() {
  const [favorites, setFavorites] = useState();
  const [sLocalItems, setSLocalItems] = useState([]);
  const [gLocalItems, setGLocalItems] = useState([]);

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
        <h1 className="text text-color-black text-center">Your personal program</h1>
        <article className="grid gap-4 grid-cols-2 items-center justify-items-center m-10">
          <form onSubmit={addBand}>
            <label>Add Band</label>
            <input></input>
            <ButtonBase type="submit" className="p-2 border-color-yellow border-solid border-2 mt-2">
              Add band to Local Storage
            </ButtonBase>
          </form>
          <div className="w-full">
            <ul className="text-color-blue border-color-yellow border-solid border-2 m2">
              {/* {gLocalItems.length === 0 ? "Nothing in Local Storage" : gLocalItems} */}
              {gLocalItems.map((band) => (
                <li key={band}>{band}</li>
              ))}
            </ul>
            <button onClick={() => console.log(sLocalItems)}>See S-LocalS </button>
            <button onClick={() => console.log(gLocalItems)}>See G-LocalS </button>
            <button onClick={() => deleteLocalStorage()}>Clear Local Storage! </button>
          </div>
        </article>
        {/* <BandList bands={bands} /> */}
        {/* <Anchor href="/bands">Bands</Anchor> */}
      </main>
    </>
  );
}
