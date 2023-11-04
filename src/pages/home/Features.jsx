import React from "react";
import team from "../../assets/images/home/team.jpg";
import { useTranslation } from "react-i18next";

export const Features = () => {
  const { t } = useTranslation("home");
  return (
    <section className="freatures section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className="image wow fadeInLeft" data-wow-delay=".3s">
              <img src={team} alt="#" />
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="content">
              <h3 className="heading wow fadeInUp" data-wow-delay=".5s">
                <span>{t("features.subtitle")}</span>
                {t("features.title")}
              </h3>
              {/* Start Single Feature */}

              {t("features.cards", { returnObjects: true }).map(
                (card, index) => (
                  <FeatureCard
                    title={card.title}
                    paragraph={card.paragraph}
                    icon={card.icon}
                    key={index}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, paragraph }) => {
  const { i18n } = useTranslation();
  return (
    <div
      className={`single-feature wow fadeInUp ${
        i18n.language === "ar" ? "rtl-features-card" : ""
      }`}
      data-wow-delay=".6s"
    >
      <div className={`f-icon ${i18n.language === "ar" ? "rtl-f-icon" : ""}`}>
        <i className={icon} />
      </div>
      <h4>{title}</h4>
      <p>{paragraph}</p>
    </div>
  );
};
