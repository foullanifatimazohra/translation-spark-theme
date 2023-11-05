import React from "react";
import TinySlider from "tiny-slider-react";
import { TestimonialCard } from "./TestimonialCard";

export const Testimonials = () => {
  const settings = {
    lazyload: true,
    nav: true,
    mouseDrag: true,
    loop: true,
    items: 1,
    gutter: 5,
    responsive: {
      820: {
        items: 3,
      },
    },
  };
  return (
    <section className="testimonials style2 section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h3 className="wow zoomIn" data-wow-delay=".2s">
                Customer Reviews
              </h3>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">
                Our Testimonials
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <TinySlider settings={settings} className="row testimonial-slider">
          <TestimonialCard key={0} />
          <TestimonialCard key={1} />
          <TestimonialCard key={2} />
          <TestimonialCard key={3} />
        </TinySlider>
      </div>
    </section>
  );
};
