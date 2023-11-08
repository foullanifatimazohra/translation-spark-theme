import { AboutMain } from "./AboutMain";
import { Features } from "../home/Features";
import { Testimonials } from "./Testimonials";
import { Team } from "../home/Team";
import { Partners } from "./Partners";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import Loader from "../../components/ui/Loader";

export const About = () => {
  const { t } = useTranslation("about");
  return (
    <Suspense fallback={<Loader />}>
      <AboutMain title={t("title")} />
      <Features bgWhite={true} />
      <Testimonials />
      <Team />
      <Partners />
    </Suspense>
  );
};
