import React from "react";
import Team from "../components/Team";
import InnerHeader from "../layout/InnerHeader";
import TeamHeader from "../components/TeamHeader";
import TeamHeroPictures from "../components/TeamHeroPictures";
import TeamCTA from "../components/TeamCTA";
import Footer from "../layout/Footer"

export default function TeamPage() {
  return (
    <>
      <InnerHeader />
      <TeamHeader />
      <TeamHeroPictures />
      <Team />
      <TeamCTA />
      <Footer/>
    </>
  );
}
