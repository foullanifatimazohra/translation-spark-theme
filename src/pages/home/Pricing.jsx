import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Pricing = () => {
  const { t } = useTranslation("home");
  return (
    <section id="pricing" className="pricing-table section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h3 className="wow zoomIn" data-wow-delay=".2s">
                {t("pricing.subtitle")}
              </h3>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">
                {t("pricing.title")}
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                {t("pricing.paragraph")}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {t("pricing.cards", { returnObjects: true }).map((price) => {
            return (
              <PricingCard
                title={price.title}
                paragraph={price.paragraph}
                price={price.price}
                time={price.time}
                popular={price.popular}
                credit={price.credit}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ title, paragraph, price, time, popular, credit }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".4s">
      {/* Single Table */}
      <div className="single-table">
        <span className="popular">{popular}</span>
        {/* Table Head */}
        <div className="table-head">
          <h4 className="title">{title}</h4>
          <p className="sub-title">{paragraph}</p>
          <div className="price">
            <h2 className="amount">
              <span className="currency">$</span>
              {price}
              <span className="duration">/{time}</span>
            </h2>
          </div>
        </div>
        {/* End Table Head */}
        {/* Start Table Content */}
        <div className="table-content">
          {/* Table List */}
          <ul className="table-list">
            <li>Commercial License</li>
            <li>100+ HTML UI Elements</li>
            <li>01 Domain Support</li>
            <li className="disable">6 Month Premium Support</li>
            <li className="disable">Lifetime Updates</li>
          </ul>
          {/* End Table List */}
        </div>
        {/* End Table Content */}
        <div className="button">
          <Link to="#" className="btn">
            Start free trial <i className="lni lni-arrow-right" />
          </Link>
        </div>
        <p className="no-card">{credit}</p>
      </div>
      {/* End Single Table*/}
    </div>
  );
};
