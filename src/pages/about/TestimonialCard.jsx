import React from "react";

export const TestimonialCard = ({ comment, name, job, picture }) => {
  return (
    <div className="col-lg-6 col-12" style={{ position: "relative" }}>
      {/* Start Single Testimonial */}
      <div className="single-testimonial">
        <div className="inner-content">
          <div className="quote-icon">
            <i className="lni lni-quotation" />
          </div>
          <div className="text">
            <p>“{comment}”</p>
          </div>
          <div className="author">
            <img src={picture} alt="#" />
            <h4 className="name">
              {name}
              <span className="deg">{job}</span>
            </h4>
          </div>
        </div>
      </div>
      {/* End Single Testimonial */}
    </div>
  );
};
