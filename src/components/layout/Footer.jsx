import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/white-logo.svg";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t, i18n } = useTranslation("layout");
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
                    <Link to="/">
                      <img src={logo} alt="#" />
                    </Link>
                  </div>
                  <p>{t("footer.paragraph")}</p>
                  <h4 className="social-title">{t("footer.cta")}</h4>
                  <ul className="social">
                    <li
                      style={i18n.language === "ar" ? { marginRight: 0 } : null}
                    >
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
                    <li>
                      <Link to="#">
                        <i className="lni lni-pinterest" />
                      </Link>
                    </li>
                    <li
                      style={
                        i18n.language === "ar" ? { marginRight: 20 } : null
                      }
                    >
                      <Link to="#">
                        <i className="lni lni-youtube" />
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* End Single Widget */}
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                {/* Single Widget */}
                <div className="single-footer f-link">
                  <h3>{t("footer.solution.title")}</h3>
                  <ul>
                    <li>
                      <Link to="#">{t("footer.solution.pages.0")}</Link>
                    </li>
                    <li>
                      <Link to="#">{t("footer.solution.pages.1")}</Link>
                    </li>
                    <li>
                      <Link to="#">{t("footer.solution.pages.2")}</Link>
                    </li>
                    <li>
                      <Link to="#">{t("footer.solution.pages.3")}</Link>
                    </li>
                  </ul>
                </div>
                {/* End Single Widget */}
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                {/* Single Widget */}
                <div className="single-footer f-link">
                  <h3>{t("footer.support.title")}</h3>
                  <ul>
                    <li>
                      <Link to="#">{t("footer.support.pages.0")}</Link>
                    </li>
                    <li>
                      <Link to="#">{t("footer.support.pages.1")}</Link>
                    </li>
                    <li>
                      <Link to="#">{t("footer.support.pages.2")}</Link>
                    </li>
                    <li>
                      <Link to="#">{t("footer.support.pages.3")}s</Link>
                    </li>
                  </ul>
                </div>
                {/* End Single Widget */}
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                {/* Single Widget */}
                <div className="single-footer newsletter">
                  <h3>{t("footer.subscribe.title")}</h3>
                  <p>{t("footer.subscribe.paragraph")}</p>
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
                <p className="copyright-text">{t("footer.right")}</p>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <p className="copyright-owner">{t("footer.developer")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Copyright Area */}
    </footer>
  );
};
