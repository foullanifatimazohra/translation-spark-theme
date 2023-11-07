import React from "react";
import TinySlider from "tiny-slider-react";
import { TestimonialCard } from "./TestimonialCard";
import { useTranslation } from "react-i18next";

export const Testimonials = () => {
  const { t } = useTranslation("about");
  const settings = {
    lazyload: true,
    nav: true,
    mouseDrag: true,
    loop: true,
    items: 1,
    gutter: 5,
    responsive: {
      820: {
        items: 3,
      },
    },
  };
  return (
    <section className="testimonials style2 section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h3 className="wow zoomIn" data-wow-delay=".2s">
                {t("testimonials.subtitle")}
              </h3>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">
                {t("testimonials.title")}
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                {t("testimonials.paragraph")}
              </p>
            </div>
          </div>
        </div>
        <TinySlider settings={settings} className="row testimonial-slider">
          {t("testimonials.cards", { returnObjects: true }).map(
            (card, index) => {
              return <TestimonialCard key={index} {...card} />;
            }
          )}
        </TinySlider>
      </div>
    </section>
  );
};
