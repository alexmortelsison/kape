import React from "react";

export default function Home() {
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
      <div className="bg-gradient-to-b from-black/80 via-transparent to-black/80 absolute z-10 inset-0"></div>
      <div className="z-20 text-white absolute text-center">
        <h1 className="text-[250px] font-daffiys">KAPE</h1>
        <p className="text-2xl font-sans fixed bottom-70 left-210">
          Brewed with Pinoy Heart
        </p>
      </div>
    </div>
  );
}
