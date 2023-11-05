import React from "react";

export const TestimonialCard = () => {
  return (
    <div className="col-lg-6 col-12" style={{ position: "relative" }}>
      {/* Start Single Testimonial */}
      <div className="single-testimonial">
        <div className="inner-content">
          <div className="quote-icon">
            <i className="lni lni-quotation" />
          </div>
          <div className="text">
            <p>
              “A vast number of clients decide to create dedicated software is
              the online store. It is nothing but a website with a catalog of
              products and the possibility.”
            </p>
          </div>
          <div className="author">
            <img src="https://via.placeholder.com/100x100" alt="#" />
            <h4 className="name">
              Jems Gilario
              <span className="deg">Graphics Designer</span>
            </h4>
          </div>
        </div>
      </div>
      {/* End Single Testimonial */}
    </div>
  );
};
