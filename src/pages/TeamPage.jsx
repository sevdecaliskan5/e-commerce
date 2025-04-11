import React from "react";
import Team from "../components/Team";
import TeamHeader from "../components/TeamHeader";
import TeamHeroPictures from "../components/TeamHeroPictures";
import TeamCTA from "../components/TeamCTA";

export default function TeamPage() {
  return (
    <>
      <TeamHeader />
      <TeamHeroPictures />
      <Team />
      <TeamCTA />
    </>
  );
}