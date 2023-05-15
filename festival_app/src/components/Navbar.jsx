import React from "react";
import Link from "next/link";
import { NavLogo } from "./svgs";
import Button from "@mui/material/Button";
import TemporaryDrawer from "./BurgerMenu";

function Navbar() {
  return (
    <div className="flex justify-between bg-color-black p-3 sticky top-0 w-full z-50">
      <Link href={"/"} className="flex flex-col justify-center max">
        <NavLogo className="w-24" />
        <span className="font-font-display font-bold text-xl text-color-white">FOOFEST</span>
      </Link>
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
