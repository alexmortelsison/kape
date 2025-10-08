"use client";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";

export default function IntroPage() {
  const bgref = useRef(null);
  const opaRef = useRef(null);
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/home");
    }, 2200);
  }, []);

  useEffect(() => {
    gsap.to(bgref.current, {
      y: -1000,
      delay: 1,
      duration: 1.2,
    });
    gsap.to(opaRef.current, {
      opacity: 0,
      delay: 0.5,
      duration: 0.5,
    });
  });

  return (
    <div
      className="bg-black min-h-screen w-screen justify-center items-center text-white flex"
      ref={bgref}
    >
      <h1 className="text-[250px] font-daffiys" ref={opaRef}>
        KAPE
      </h1>
    </div>
  );
}
