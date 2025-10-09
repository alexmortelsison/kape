import Image from "next/image";
import React from "react";

interface CoffeeProps {
  src: string;
  name: string;
  desc: string;
}

export default function CoffeeCard({ name, src, desc }: CoffeeProps) {
  return (
    <div className="border rounded-lg border-[#1a100d] shadow-[#1a100d] shadow-2xl hover:scale-150 pt-8">
      <div className="relative">
        <Image
          src={src}
          width={500}
          height={500}
          alt="coffee"
          className="object-cover rounded-lg xl:w-[500px] xl:h-[600px] lg:w-[300px] lg:h-[400px]"
        />
        <div className="absolute bg-gradient-to-b from-black via-transparent to-black/30 inset-0 rounded-lg"></div>
        <div className="absolute top-0  pl-4 pt-16 text-white">
          <h1 className="text-7xl font-daffiys">{name}</h1>
          <p className="w-2/3 text-lg text-gray-300 font-semibold tracking-tighter">
            Delivers a potent, intense shot of coffee that showcases the
            diversity of Filipino-grown beans.
          </p>
        </div>
      </div>
    </div>
  );
}
