import React from "react";
import { Link } from "react-router-dom";

export const Pricing = () => {
  return (
    <section id="pricing" className="pricing-table section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h3 className="wow zoomIn" data-wow-delay=".2s">
                pricing
              </h3>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">
                Pricing &amp; Plans
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-4 col-md-6 col-12 wow fadeInUp"
            data-wow-delay=".4s"
          >
            {/* Single Table */}
            <div className="single-table">
              {/* Table Head */}
              <div className="table-head">
                <h4 className="title">Individual</h4>
                <p className="sub-title">Powerful &amp; Awesome Elements</p>
                <div className="price">
                  <h2 className="amount">
                    <span className="currency">$</span>19
                    <span className="duration">/month</span>
                  </h2>
                </div>
              </div>
              {/* End Table Head */}
              {/* Start Table Content */}
              <div className="table-content">
                {/* Table List */}
                <ul className="table-list">
                  <li>Commercial License</li>
                  <li>100+ HTML UI Elements</li>
                  <li>01 Domain Support</li>
                  <li className="disable">6 Month Premium Support</li>
                  <li className="disable">Lifetime Updates</li>
                </ul>
                {/* End Table List */}
              </div>
              {/* End Table Content */}
              <div className="button">
                <Link to="#" className="btn">
                  Start free trial <i className="lni lni-arrow-right" />
                </Link>
              </div>
              <p className="no-card">No credit card required</p>
            </div>
            {/* End Single Table*/}
          </div>
          <div
            className="col-lg-4 col-md-6 col-12 wow fadeInUp"
            data-wow-delay=".6s"
          >
            {/* Single Table */}
            <div className="single-table middle">
              <span className="popular">Most Popular</span>
              {/* Table Head */}
              <div className="table-head">
                <h4 className="title">Exclusive</h4>
                <p className="sub-title">Powerful &amp; Awesome Elements</p>
                <div className="price">
                  <h2 className="amount">
                    <span className="currency">$</span>49
                    <span className="duration">/month</span>
                  </h2>
                </div>
              </div>
              {/* End Table Head */}
              {/* Start Table Content */}
              <div className="table-content">
                {/* Table List */}
                <ul className="table-list">
                  <li>Commercial License</li>
                  <li>100+ HTML UI Elements</li>
                  <li>01 Domain Support</li>
                  <li>6 Month Premium Support</li>
                  <li className="disable">Lifetime Updates</li>
                </ul>
                {/* End Table List */}
              </div>
              {/* End Table Content */}
              <div className="button">
                <Link to="#" className="btn btn-alt">
                  Start free trial <i className="lni lni-arrow-right" />
                </Link>
              </div>
              <p className="no-card">No credit card required</p>
            </div>
            {/* End Single Table*/}
          </div>
          <div
            className="col-lg-4 col-md-6 col-12 wow fadeInUp"
            data-wow-delay=".8s"
          >
            {/* Single Table */}
            <div className="single-table">
              {/* Table Head */}
              <div className="table-head">
                <h4 className="title">Premium</h4>
                <p className="sub-title">Powerful &amp; Awesome Elements</p>
                <div className="price">
                  <h2 className="amount">
                    <span className="currency">$</span>99
                    <span className="duration">/month</span>
                  </h2>
                </div>
              </div>
              {/* End Table Head */}
              {/* Start Table Content */}
              <div className="table-content">
                {/* Table List */}
                <ul className="table-list">
                  <li>Commercial License</li>
                  <li>100+ HTML UI Elements</li>
                  <li>01 Domain Support</li>
                  <li>6 Month Premium Support</li>
                  <li>Lifetime Updates</li>
                </ul>
                {/* End Table List */}
              </div>
              {/* End Table Content */}
              <div className="button">
                <Link to="#" className="btn">
                  Start free trial <i className="lni lni-arrow-right" />
                </Link>
              </div>
              <p className="no-card">No credit card required</p>
            </div>
            {/* End Single Table*/}
          </div>
        </div>
      </div>
    </section>
  );
};
