"use client";
import { AiFillPhone } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import { BsFacebook } from "react-icons/bs";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const socials = [
  { icon: <BsFacebook />, link: "" },
  { icon: <AiFillInstagram />, link: "" },
  { icon: <FaTiktok />, link: "" },
];

const navLinks = [
  { icon: <AiOutlineHome />, label: "Home", link: "/home" },
  { icon: <BiShoppingBag />, label: "Shop", link: "" },
  { icon: <AiFillPhone />, label: "Contact", link: "" },
];

export default function Navbar() {
  const navbarRef = useRef(null);
  useEffect(() => {
    gsap.to(navbarRef.current, {
      opacity: 1,
      delay: 2.5,
      duration: 0.5,
    });
  }, []);
  const pathname = usePathname();
  return (
    <div
      className="absolute text-white z-20 inset-0 lg:inline-flex opacity-0 hidden"
      ref={navbarRef}
    >
      <div className="relative mx-auto h-[100px]">
        <div className="absolute inset-0 z-10"></div>
        <div className="flex justify-between w-screen items-center border-b border-dashed max-w-7xl">
          <div className="py-8 z-30 ">
            <Link href={"/"}>
              <h1 className="font-daffiys text-2xl hover:text-amber-500">
                KAPE
              </h1>
            </Link>
          </div>
          <div className="flex space-x-4 z-30 justify-center items-center">
            {socials.map((item, index) => (
              <div key={index}>
                <Link
                  href={item.link}
                  className="text-xl hover:scale-500 duration-150 hover:cursor-pointer"
                >
                  {item.icon}
                </Link>
              </div>
            ))}
          </div>
          <div className="inline-flex space-x-4 z-50">
            {navLinks.map((item, index) => (
              <div key={index}>
                <Link
                  href={item.link}
                  className={`hover:scale-125 transition-transform duration-150 hover:text-amber-500 ${
                    pathname === item.link
                      ? "text-amber-500 font-semibold"
                      : "text-white"
                  } `}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
