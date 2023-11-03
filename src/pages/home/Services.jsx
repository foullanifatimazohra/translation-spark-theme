import React from "react";
import { useTranslation } from "react-i18next";

export const Services = () => {
  const { t } = useTranslation("home");
  return (
    <div className="services section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h3 className="wow zoomIn" data-wow-delay=".2s">
                {t("services.subtitle")}
              </h3>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">
                {t("services.title")}
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                {t("services.paragraph")}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {t("services.cards", { returnObjects: true }).map((card, index) => (
            <ServiceCard
              title={card.title}
              paragraph={card.paragraph}
              icon={card.icon}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title, paragraph }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".6s">
      <div className="single-service">
        <div className="main-icon">
          <i className={icon} />
        </div>
        <h4 className="text-title">{title}</h4>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};
