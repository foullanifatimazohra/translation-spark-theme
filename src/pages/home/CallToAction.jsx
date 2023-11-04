import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const CallToAction = () => {
  const { t } = useTranslation("home");
  return (
    <section className="call-action">
      <div className="container">
        <div className="inner-content">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-7 col-12">
              <div className="text">
                <h2>{t("cta.title")}</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-5 col-12">
              <div className="button">
                <Link to="#" className="btn">
                  <i className="lni lni-apple" /> App Store
                </Link>
                <Link to="#" className="btn btn-alt">
                  <i className="lni lni-play-store" /> Google Play
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
