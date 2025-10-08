"use client";
import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import gsap from "gsap";
import HighlightsPage from "../highlights/page";
import Link from "next/link";

export default function HomePage() {
  const opaRef = useRef(null);
  const shopNowRef = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    gsap.to(opaRef.current, {
      opacity: 1,
      delay: 1.5,
      duration: 0.5,
    });

    gsap.to(shopNowRef.current, {
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
    <div className="h-[100vh] overflow-hidden flex flex-col justify-center items-center relative inset-0">
      <div className="relative -z-50 ">
        <video
          src="/coffee.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-screen min-h-screen"
        ></video>
      </div>
      <div className="bg-gradient-to-b from-black/80 via-transparent to-black/80 absolute z-10 inset-0"></div>
      <div className="z-20 text-white absolute text-center flex flex-col justify-center items-center">
        <h1 className="lg:text-[250px] text-4xl md:text-9xl font-daffiys">
          KAPE
        </h1>
        <p
          className="lg:text-4xl text-xl md:text-2xl font-daffiys left-1/2 xl:bottom-95 xl:left-185 opacity-0 text-gray-200"
          ref={opaRef}
        >
          Brewed with Pinoy Heart
        </p>
        <div className="xl:lg:w-[700px] pt-8 px-8">
          <p
            className="text-gray-400 lg:text-lg text-sm opacity-0 md:w-2/3 lg:w-full mx-auto"
            ref={pRef}
          >
            Sourced and brewed with the deep passion and unwavering commitment
            characteristic of the Pinoy people, our coffee brings the rich,
            diverse flavors of the Philippines right to your cup.
          </p>
          <div
            className="flex justify-center items-center pt-8"
            ref={shopNowRef}
          >
            <Link href={"/highlights"}>
              <button className="py-4 px-12 rounded-full bg-amber-500 font-semibold hover:opacity-90 hover:cursor-pointer">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
