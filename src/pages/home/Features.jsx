import React from "react";
import team from "../../assets/images/home/team.jpg";

export const Features = () => {
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
                <span>Core Features</span>Designed &amp; built by the
                <br /> latest code integration
              </h3>
              {/* Start Single Feature */}
              <div className="single-feature wow fadeInUp" data-wow-delay=".6s">
                <div className="f-icon">
                  <i className="lni lni-dashboard" />
                </div>
                <h4>Fast performance</h4>
                <p>
                  Get your blood tests delivered at home collect a sample from
                  the news your blood tests
                </p>
              </div>
              {/* End Single Feature */}
              {/* Start Single Feature */}
              <div className="single-feature wow fadeInUp" data-wow-delay=".7s">
                <div className="f-icon">
                  <i className="lni lni-pencil-alt" />
                </div>
                <h4>Prototyping</h4>
                <p>
                  Get your blood tests delivered at home collect a sample from
                  the news your blood tests
                </p>
              </div>
              {/* End Single Feature */}
              {/* Start Single Feature */}
              <div
                className="single-feature wow fadeInUp"
                data-wow-delay="0.8s"
              >
                <div className="f-icon">
                  <i className="lni lni-vector" />
                </div>
                <h4>Vector Editing</h4>
                <p>
                  Get your blood tests delivered at home collect a sample from
                  the news your blood tests
                </p>
              </div>
              {/* End Single Feature */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
