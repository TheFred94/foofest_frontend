import Head from "next/head";
import Anchor from "@/components/Anchor";
import SiteLogo from "../components/svgs/logoBig.svg";
import Image from "next/image";
import Logo from "../components/svgs/logo.png";
import App from "next/app";
import Button from "@mui/material/Button";
import Navbar from "@/components/Navbar";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useState, useEffect } from "react";
import { ButtonBase } from "@mui/material";
export default function MyApp({ bands }) {
  console.log(bands);
  return (
    <>
      <Head>
        <title>Welcome to FooFest!</title>
      </Head>
      <div class="w-3/4 max-w-2xl flex flex-col justify-center m-auto">
        <Image src={Logo} height={"100%"} width={"100%"}></Image>
        <h1 className="text-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl">FOOFEST</h1>
      </div>
      <div className="flex flex-row justify-around">
        <BandList1 bands={bands} />
      </div>
      <div className="flex flex-row justify-around">
        <BandList2 bands={bands} />
      </div>

      <Anchor href="/bands">Bands</Anchor>
    </>
  );
}

export async function getServerSideProps() {
  const api = "http://localhost:8080/bands";
  const res = await fetch(api);
  const data = await res.json();
  console.log(data);

  return {
    props: {
      bands: data,
    },
  };
}

function BandList1(props) {
  const bandsToShow = props.bands.slice(0, 2);
  console.log(bandsToShow[0]);
  return bandsToShow.map(band => <Band key={band.name} {...band} />);
}
function BandList2(props) {
  const bandsToShow = props.bands.slice(2, 5);
  console.log(bandsToShow[0]);
  return bandsToShow.map(band => <Band2 key={band.name} {...band} />);
}

function Band(band) {
  return (
    <>
      <h2 className="text-3xl">
        <Anchor href={`/bands/${band.slug}`}>{band.name}</Anchor>
      </h2>
    </>
  );
}
function Band2(band) {
  return (
    <>
      <h2 className="text-2xl">
        <Anchor href={`/bands/${band.slug}`}>{band.name}</Anchor>
      </h2>
    </>
  );
}
