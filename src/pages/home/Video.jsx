import React from "react";
import shape1 from "../../assets/images/video/shape1.svg";
import shape2 from "../../assets/images/video/shape2.svg";
import { useTranslation } from "react-i18next";

export const Video = () => {
  const { t } = useTranslation("home");
  return (
    <section className="intro-video-area section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="inner-content-head">
              <div className="inner-content">
                <img className="shape1" src={shape1} alt="#" />
                <img className="shape2" src={shape2} alt="#" />
                <div className="section-title">
                  <span className="wow zoomIn" data-wow-delay=".2s">
                    {t("video.subtitle")}
                  </span>
                  <h2 className="wow fadeInUp" data-wow-delay=".4s">
                    {t("video.title")}
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".6s">
                    {t("video.paragraph")}
                  </p>
                </div>
                <div className="intro-video-play">
                  <div className="play-thumb wow zoomIn" data-wow-delay=".2s">
                    <a
                      href="https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM"
                      className="glightbox video"
                    >
                      <i className="lni lni-play" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
