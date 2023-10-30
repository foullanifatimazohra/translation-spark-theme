import React from "react";

export const Footer = () => {
  return (
    <footer className="footer section">
      {/* Start Footer Top */}
      <div className="footer-top">
        <div className="container">
          <div className="inner-content">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                {/* Single Widget */}
                <div className="single-footer f-about">
                  <div className="logo">
                    <a href="index.html">
                      <img src="assets/images/logo/white-logo.svg" alt="#" />
                    </a>
                  </div>
                  <p>
                    Making the world a better place through constructing elegant
                    hierarchies.
                  </p>
                  <h4 className="social-title">Follow Us On:</h4>
                  <ul className="social">
                    <li>
                      <a href="javascript:void(0)">
                        <i className="lni lni-facebook-filled" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="lni lni-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="lni lni-twitter-original" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="lni lni-linkedin-original" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="lni lni-pinterest" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i className="lni lni-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* End Single Widget */}
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                {/* Single Widget */}
                <div className="single-footer f-link">
                  <h3>Solutions</h3>
                  <ul>
                    <li>
                      <a href="javascript:void(0)">Marketing</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Analytics</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Commerce</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Insights</a>
                    </li>
                  </ul>
                </div>
                {/* End Single Widget */}
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                {/* Single Widget */}
                <div className="single-footer f-link">
                  <h3>Support</h3>
                  <ul>
                    <li>
                      <a href="javascript:void(0)">Pricing</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Documentation</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Guides</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">API Status</a>
                    </li>
                  </ul>
                </div>
                {/* End Single Widget */}
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                {/* Single Widget */}
                <div className="single-footer newsletter">
                  <h3>Subscribe</h3>
                  <p>Subscribe to our newsletter for the latest updates</p>
                  <form
                    action="#"
                    method="get"
                    target="_blank"
                    className="newsletter-form"
                  >
                    <input
                      name="EMAIL"
                      placeholder="Email address"
                      required="required"
                      type="email"
                    />
                    <div className="button">
                      <button className="sub-btn">
                        <i className="lni lni-envelope" />
                      </button>
                    </div>
                  </form>
                </div>
                {/* End Single Widget */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/ End Footer Top */}
      {/* Start Copyright Area */}
      <div className="copyright-area">
        <div className="container">
          <div className="inner-content">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <p className="copyright-text">
                  © 2023 Spark - All Rights Reserved
                </p>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <p className="copyright-owner">
                  Designed and Developed by{" "}
                  <a href="https://uideck.com/" rel="nofollow" target="_blank">
                    UIdeck
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Copyright Area */}
    </footer>
  );
};
