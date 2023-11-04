import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Team = () => {
  const { t } = useTranslation("home");
  return (
    <section className="team section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h3 className="wow zoomIn" data-wow-delay=".2s">
                {t("team.subtitle")}
              </h3>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">
                {t("team.title")}
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                {t("team.paragraph")}{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {t("team.list", { returnObjects: true }).map((item, index) => {
            return (
              <TeamCard
                key={index}
                name={item.name}
                picture={item.picture}
                career={item.career}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const TeamCard = ({ name, career, picture }) => {
  return (
    <div className="col-lg-3 col-md-6 col-12 wow fadeInUp" data-wow-delay=".9s">
      <div className="single-team">
        <div className="team-image">
          <img src={picture} alt="#" />
        </div>
        <div className="content">
          <h4>
            {name}
            <span>{career}</span>
          </h4>
          <ul className="social">
            <li>
              <Link to="#">
                <i className="lni lni-facebook-filled" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="lni lni-instagram" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="lni lni-twitter-original" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="lni lni-linkedin-original" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
