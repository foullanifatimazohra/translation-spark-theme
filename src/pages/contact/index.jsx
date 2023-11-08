import React from "react";
import { AboutMain } from "../about/AboutMain";
import { ContactUs } from "./ContactUs";
import { Map } from "./Map";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation("contact");
  return (
    <div>
      <AboutMain t={t} />
      <ContactUs
        {...t("contact", { returnObjects: true })}
        {...t("form", { returnObjects: true })}
      />
      <Map />
    </div>
  );
};
