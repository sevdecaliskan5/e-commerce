import React from "react";
import hero1 from "../assets/images/team/teamHero15.png";
import hero2 from "../assets/images/team/teamHero11.png";
import hero3 from "../assets/images/team/teamHero12.png";
import hero4 from "../assets/images/team/teamHero13.png";
import hero5 from "../assets/images/team/teamHero14.png";

export default function TeamHeroPictures() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-8">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        {/* sol main */}
        <div className="sm:w-[700px] w-full overflow-hidden rounded-lg">
          <img
            src={hero1}
            alt="Team hero"
            className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* sag 2x2 grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {[hero2, hero3, hero4, hero5].map((img, i) => (
            <div key={i} className="overflow-hidden rounded-lg">
              <img
                src={img}
                alt={`Team member ${i + 1}`}
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

