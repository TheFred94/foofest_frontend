import React from "react";
import Image from "next/image";
import navLogo from "../assets/logoOnly.svg";
import Button from "@mui/material/Button";
import TemporaryDrawer from "./BurgerMenu";

function Navbar() {
  return (
    <div className="flex justify-between bg-color-black p-3 sticky top-0 w-full z-50">
      <a className="flex flex-col justify-center">
        <Image className="place-self-center" src={navLogo} height={75} width={75} alt="shit" />
        <span className="font-font-display font-bold text-xl text-color-white">FOOFEST</span>
      </a>
      <div className="flex justify-center">
        <Button className="rounded-none border-2 border-solid place-self-center border-color-yellow h-10 px-10 text-color-yellow hover:bg-color-yellow hover:text-color-black">
          KØB BILLET
        </Button>
        <TemporaryDrawer className="flex" />
      </div>
    </div>
  );
}

export default Navbar;
