"use client";
import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import gsap from "gsap";

export default function HomePage() {
  const opaRef = useRef(null);
  const navbarRef = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    gsap.to(opaRef.current, {
      opacity: 1,
      delay: 1.5,
      duration: 0.5,
    });
    gsap.to(navbarRef.current, {
      opacity: 1,
      delay: 2.5,
      duration: 0.5,
    });
    gsap.to(pRef.current, {
      opacity: 1,
      delay: 2,
      duration: 0.5,
    });
  }, []);
  return (
    <div className="h-[100vh] overflow-hidden flex justify-center items-center">
      <div className="relative -z-50">
        <video
          src="/coffee.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover"
        ></video>
      </div>
      <div ref={navbarRef} className=" opacity-0">
        <Navbar />
      </div>
      <div className="bg-gradient-to-b from-black/80 via-transparent to-black/80 absolute z-10 inset-0"></div>
      <div className="z-20 text-white absolute text-center">
        <h1 className="text-[250px] font-daffiys">KAPE</h1>
        <p
          className="text-4xl font-daffiys fixed bottom-85 left-185 opacity-0 text-gray-200"
          ref={opaRef}
        >
          Brewed with Pinoy Heart
        </p>
        <div className="w-[700px]">
          <p className="text-gray-400 text-lg opacity-0" ref={pRef}>
            Sourced and brewed with the deep passion and unwavering commitment
            characteristic of the Pinoy people, our coffee brings the rich,
            diverse flavors of the Philippines right to your cup.
          </p>
        </div>
      </div>
    </div>
  );
}
