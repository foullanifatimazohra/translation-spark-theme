import { AboutMain } from "./AboutMain";
import { Features } from "../home/Features";
import { Testimonials } from "./Testimonials";
import { Team } from "../home/Team";
import { Partners } from "./Partners";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation("about");
  return (
    <div>
      <AboutMain t={t} />
      <Features bgWhite={true} />
      <Testimonials />
      <Team />
      <Partners />
    </div>
  );
};
