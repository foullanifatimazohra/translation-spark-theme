import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo/white-logo.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t, i18n } = useTranslation("layout");
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const locales = [
    { code: "en", title: "English" },
    { code: "ar", title: "العربية" },
  ];

  useEffect(() => {
    setSelectedLanguage(i18n.language);
  }, [i18n, i18n.language]);

  const handleChangeLanguage = (event) => {
    setSelectedLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  };
  return (
    <header className="header navbar-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div
              className="nav-inner"
              style={i18n.language === "ar" ? { paddingTop: "20px" } : null}
            >
              {/* Start Navbar */}
              <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand" to="/">
                  <img src={logo} alt="Logo" />
                </Link>
                <button
                  className="navbar-toggler mobile-menu-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarSupportedContent"
                >
                  <ul
                    id="nav"
                    className={`navbar-nav ms-auto ${
                      i18n.language === "ar" ? "rtl-nav-header" : ""
                    }`}
                  >
                    <li
                      className={`nav-item ${
                        i18n.language === "ar" ? "rtl-nav-item" : ""
                      }`}
                    >
                      <Link
                        to="/"
                        className="active"
                        aria-label="Toggle navigation"
                      >
                        {t("header.pages.0")}
                      </Link>
                    </li>
                    <li
                      className={`nav-item ${
                        i18n.language === "ar" ? "rtl-nav-item" : ""
                      }`}
                    >
                      <Link to="about-us" aria-label="Toggle navigation">
                        {t("header.pages.1")}
                      </Link>
                    </li>

                    <li
                      className={`nav-item ${
                        i18n.language === "ar" ? "rtl-nav-item" : ""
                      }`}
                    >
                      <Link to="contact" aria-label="Toggle navigation">
                        {t("header.pages.2")}
                      </Link>
                    </li>
                    <div className="nav-item lang-select">
                      <ul className="">
                        <select
                          value={selectedLanguage}
                          onChange={handleChangeLanguage}
                        >
                          {locales.map((locale) => (
                            <option key={locale.code} value={locale.code}>
                              {locale.title}
                            </option>
                          ))}
                        </select>
                      </ul>
                    </div>
                  </ul>
                </div>{" "}
              </nav>
              {/* End Navbar */}
            </div>
          </div>
        </div>{" "}
        {/* row */}
      </div>{" "}
      {/* container */}
    </header>
  );
};
