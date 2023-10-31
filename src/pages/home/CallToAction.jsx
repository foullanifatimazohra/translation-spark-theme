import React from "react";
import { Link } from "react-router-dom";

export const CallToAction = () => {
  return (
    <section className="call-action">
      <div className="container">
        <div className="inner-content">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-7 col-12">
              <div className="text">
                <h2>
                  Download Our App &amp;
                  <br /> Start your free trial today.
                </h2>
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
