import Head from "next/head";
import Anchor from "@/components/Anchor";
import Button from "@mui/material/Button";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
export default function PersonalProgram() {
  const [favorites, setFavorites] = useState();
  // const [test, setTest] = useEffect();

  // localStorage.setItem("test", 1);

  useEffect;

  return (
    <>
      <Head>
        <title>Personal Program overview</title>
      </Head>
      <Navbar />
      <main className="h-screen">
        <h1 className="text-sm color-black">Your personal program</h1>
        <article className="grid gap-4 grid-cols-2">
          <div>
            <p className="color-green">0</p>
            <Button>Add 1</Button>
          </div>
          <div>
            <p>Noget tekst</p>
            <Button>Show local Storage</Button>
          </div>
        </article>
        {/* <button onClick={() => setTest(test + 1)}>Add 1 to </button> */}
        {/* <BandList bands={bands} /> */}
        {/* <Anchor href="/bands">Bands</Anchor> */}
      </main>
    </>
  );
}
