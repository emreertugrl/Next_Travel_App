import RecentProfuct from "@/components/sections/recent/RecentProfuct";
import React from "react";
import Hero from "./_components/Hero/Hero";
import SectionOne from "./_components/Section/SectionOne";
import SectionTwo from "./_components/Section/SectionTwo";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="min-h-24"></div>
      <SectionOne />
      <SectionTwo />
      <div className="min-h-24"></div>
      <RecentProfuct />
      <div className="min-h-64"></div>
    </div>
  );
};

export default Home;
