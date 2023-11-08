import React from "react";
import { AboutMain } from "../about/AboutMain";
import { ContactUs } from "./ContactUs";
import { Map } from "./Map";

export const Contact = () => {
  return (
    <div>
      <AboutMain title="Contact" />
      <ContactUs />
      <Map />
    </div>
  );
};
