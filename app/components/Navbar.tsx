import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="absolute text-white z-20 inset-0 flex">
      <div className="relative mx-auto h-[100px]">
        <div className="absolute bg-gradient-to-b from-black/80 via-transparent to-black/10 fom inset-0 z-10"></div>
        <div className="flex justify-between w-screen px-48">
          <div className="py-8 z-30 border-b w-screen border-dashed">
            <Link href={"/"}>
              <h1 className="font-daffiys text-2xl">KAPE</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
