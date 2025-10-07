import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="absolute text-white z-20 inset-0 flex max-w-7xl mx-auto pt-8">
      <div className="flex justify-between">
        <Link href={"/"}>
          <h1 className="font-daffiys text-2xl">KAPE</h1>
        </Link>
      </div>
    </div>
  );
}
