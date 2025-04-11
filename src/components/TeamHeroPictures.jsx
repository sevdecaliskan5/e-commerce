import React from "react";
import hero1 from "../assets/images/team/teamHero15.png";
import hero2 from "../assets/images/team/teamHero11.png";
import hero3 from "../assets/images/team/teamHero12.png";
import hero4 from "../assets/images/team/teamHero13.png";
import hero5 from "../assets/images/team/teamHero14.png";

export default function TeamHeroPictures() {
  return (
    <div className="w-full overflow-hidden rounded-lg">
      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <div className="w-full sm:w-auto overflow-hidden rounded-lg">
          <img
            src={hero1}
            alt="Team hero image"
            className="w-full sm:w-[700px] h-auto sm:h-[530px] object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="grid grid-cols-2 grid-rows-2 sm:grid-cols-2 sm:grid-rows-2 gap-2">
          <div className="overflow-hidden rounded-lg">
            <img
              src={hero2}
              alt="Team member image"
              className="w-full sm:w-[361px] h-auto sm:h-[260px] object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src={hero3}
              alt="Team member image"
              className="w-full sm:w-[361px] h-auto sm:h-[260px] object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src={hero4}
              alt="Team member image"
              className="w-full sm:w-[361px] h-auto sm:h-[260px] object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src={hero5}
              alt="Team member image"
              className="w-full sm:w-[361px] h-auto sm:h-[260px] object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
