import React from "react";
import { AboutMain } from "./AboutMain";
import { Features } from "../home/Features";
import { Testimonials } from "./Testimonials";
import { Team } from "../home/Team";
import { Partners } from "./Partners";

export const About = () => {
  return (
    <div className="">
      <AboutMain />
      <Features bgWhite={true} />
      <Testimonials />
      <Team />
      <Partners />
    </div>
  );
};
