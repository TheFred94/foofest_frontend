import React from "react";
import Image from "next/image";
import navLogo from "../assets/logoOnly.svg";
import Button from "@mui/material/Button";

function Navbar() {
  return (
    <div className="flex justify-between bg-color-black p-3">
      <a className="flex flex-col justify-center">
        <Image className="place-self-center" src={navLogo} height={75} width={75} alt="shit" />
        <span className="font-font-display font-bold text-xl text-color-white">FOOFEST</span>
      </a>
      <Button className="rounded-none border-2 border-solid place-self-center border-color-yellow h-10 px-10 text-color-yellow hover:bg-color-yellow hover:text-color-black">
        KØB BILLET
      </Button>
    </div>
  );
}

export default Navbar;
