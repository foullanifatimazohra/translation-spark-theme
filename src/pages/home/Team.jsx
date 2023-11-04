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
          <div
            className="col-lg-3 col-md-6 col-12 wow fadeInUp"
            data-wow-delay=".3s"
          >
            {/* Start Single Team */}
            <div className="single-team">
              <div className="team-image">
                <img
                  src="https://sparks.qodeinteractive.com/wp-content/uploads/2016/10/Home-1-Team-3.jpg"
                  alt="#"
                />
              </div>
              <div className="content">
                <h4>
                  Deco Milan
                  <span>Founder</span>
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
            {/* End Single Team */}
          </div>
          <div
            className="col-lg-3 col-md-6 col-12 wow fadeInUp"
            data-wow-delay=".5s"
          >
            {/* Start Single Team */}
            <div className="single-team">
              <div className="team-image">
                <img
                  src="https://sparks.qodeinteractive.com/wp-content/uploads/2016/10/Home-1-Team-4.jpg"
                  alt="#"
                />
              </div>
              <div className="content">
                <h4>
                  Liza Marko
                  <span>Developer</span>
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
            {/* End Single Team */}
          </div>
          <div
            className="col-lg-3 col-md-6 col-12 wow fadeInUp"
            data-wow-delay=".7s"
          >
            {/* Start Single Team */}
            <div className="single-team">
              <div className="team-image">
                <img
                  src="https://sparks.qodeinteractive.com/wp-content/uploads/2016/10/Home-1-Team-2.jpg"
                  alt="#"
                />
              </div>
              <div className="content">
                <h4>
                  John Smith
                  <span>Designer</span>
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
            {/* End Single Team */}
          </div>
          <div
            className="col-lg-3 col-md-6 col-12 wow fadeInUp"
            data-wow-delay=".9s"
          >
            {/* Start Single Team */}
            <div className="single-team">
              <div className="team-image">
                <img
                  src="https://sparks.qodeinteractive.com/wp-content/uploads/2016/10/Home-1-Team-1.jpg"
                  alt="#"
                />
              </div>
              <div className="content">
                <h4>
                  Amion Doe
                  <span>Co-Founder</span>
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
            {/* End Single Team */}
          </div>
        </div>
      </div>
    </section>
  );
};
