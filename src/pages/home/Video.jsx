import React from "react";
import shape1 from "../../assets/images/video/shape1.svg";
import shape2 from "../../assets/images/video/shape2.svg";

export const Video = () => {
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
                    Create your own experience
                  </span>
                  <h2 className="wow fadeInUp" data-wow-delay=".4s">
                    Watch Our intro video
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".6s">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
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
