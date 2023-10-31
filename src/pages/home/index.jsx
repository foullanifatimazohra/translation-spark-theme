import React from "react";
import { Hero } from "./Hero";
import { Features } from "./Features";
import { Services } from "./Services";
import { Pricing } from "./Pricing";
import { Video } from "./Video";
import { Team } from "./Team";
import { CallToAction } from "./CallToAction";

export const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <Pricing />
      <Video />
      <Team />
      <CallToAction />
    </>
  );
};
