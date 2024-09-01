import React, { useState } from "react";
import Button from "./Button";
import Search from "./Search";
import {useModelForm} from "../context/ShowProvider"


function NavBar() {
  const { toggleForm } = useModelForm();
  return (
    <div>
      <h2 className="text-cyan-500 text-2xl tracking-widest text-center font-semibold pt-2">
        My Notes
      </h2>
      <div className="flex justify-around ">
        <Button btnName={"Add new Note"} btnBgClr='bg-green-600' btnfunc={toggleForm} />
        <Search />
      </div>
    </div>
  );
}

export default NavBar;
