import React from "react";
import Image from "next/image";
import { audiowide } from "../utils/font";

export default function Navbar() {
  return (
    <div className={`bg-[#0E0021] w-full h-28 flex flex-row ${audiowide.className}`}>
      <Image src="/images/logo.png" width="130" height="130" alt="Logo" className="w-16 h-w-16 md:h-24 md:w-24 my-auto"></Image>
      <ul className="my-auto flex flex-row text-sm max-[360px]:text-xs md:text-2xl text-white ml-4 md:ml-8 gap-4 md:gap-6">
        <li>Home</li>
        <li>Discord</li>
        <li>Invite</li>
        <li>Dashboard</li>
      </ul>
      <div className="ml-auto mr-4 my-auto">
        <button className="bg-[#0F5FD7] rounded-md py-3 px-6">Login</button>
      </div>
    </div>
  );
}
