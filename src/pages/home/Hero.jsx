import React from "react";
import { useTranslation } from "react-i18next";
//import image from "../../assets/images/home/working-on-a-startup.jpg";

export const Hero = () => {
  const { t } = useTranslation("home");

  return (
    <section className="hero-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12 col-12">
            <div className="hero-content">
              <h4>{t("main.subtitle")}</h4>
              <h1>{t("main.title")}</h1>
              <p>{t("main.paragraph")}</p>
              <div className="button">
                <a href="about-us.html" className="btn ">
                  {t("main.cta")}
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-12">
            <div className="hero-image wow fadeInRight" data-wow-delay=".4s">
              <img
                className="main-image"
                src="https://advanture.icu/helloimfortestonly/wp-content/uploads/sites/6/2023/02/mobile.png"
                alt="#"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
