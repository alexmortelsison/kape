import { AiFillPhone } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import Link from "next/link";
import React from "react";

const socials = [
  { icon: <BsFacebook />, link: "" },
  { icon: <AiFillInstagram />, link: "" },
  { icon: <FaTiktok />, link: "" },
];

const navLinks = [
  { icon: <AiOutlineHome />, label: "Home", link: "" },
  { icon: <BiShoppingBag />, label: "Shop", link: "" },
  { icon: <AiFillPhone />, label: "Contact", link: "" },
];

export default function Navbar() {
  return (
    <div className="absolute text-white z-20 inset-0 flex">
      <div className="relative mx-auto h-[100px]">
        <div className="absolute inset-0 z-10"></div>
        <div className="flex justify-between w-screen items-center border-b border-dashed max-w-7xl">
          <div className="py-8 z-30 ">
            <Link href={"/"}>
              <h1 className="font-daffiys text-2xl">KAPE</h1>
            </Link>
          </div>
          <div className="flex space-x-4">
            {socials.map((item, index) => (
              <div key={index}>
                <Link href={item.link} className="text-xl">
                  {item.icon}
                </Link>
              </div>
            ))}
          </div>
          <div className="flex space-x-4">
            {navLinks.map((item, index) => (
              <div key={index}>
                <Link href={item.link}>{item.label}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
