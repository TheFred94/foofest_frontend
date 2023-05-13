import Head from "next/head";
import Anchor from "@/components/Anchor";
import App from "next/app";
import Button from "@mui/material/Button";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
export default function PersonalProgram() {
  const [favorites, setFavorites] = useState();
  const [test, setTest] = useEffect();

  localStorage.setItem("test", 1);

  useEffect;

  return (
    <>
      <Head>
        <title>Welcome to FooFest!</title>
      </Head>
      <Navbar />
      <h1>Your personal program</h1>
      <p>{test}</p>
      <button onClick={() => setTest(test + 1)}>Add 1 to </button>
      <BandList bands={bands} />
      <Anchor href="/bands">Bands</Anchor>
    </>
  );
}
