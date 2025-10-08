import React from "react";
import CoffeeCard from "../components/CoffeeCard";

export default function HighlightsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#1a100d]/80 to-[#1a100d] flex justify-center">
      <div className="flex justify-center items-center">
        <div className="flex space-x-4">
          <CoffeeCard
            src="/cof1.jpg"
            name={"Espresso"}
            desc={
              "delivers a potent, intense shot of coffee that showcases the diversity of Filipino-grown beans."
            }
          />
          <CoffeeCard
            src="/cof1.jpg"
            name={"Espresso"}
            desc={
              "delivers a potent, intense shot of coffee that showcases the diversity of Filipino-grown beans."
            }
          />
          <CoffeeCard
            src="/cof1.jpg"
            name={"Espresso"}
            desc={
              "delivers a potent, intense shot of coffee that showcases the diversity of Filipino-grown beans."
            }
          />
        </div>
      </div>
    </div>
  );
}
