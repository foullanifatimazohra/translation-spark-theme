import React from "react";
import { ContactForm } from "./ContactForm";

export const ContactUs = ({
  title,
  paragraph,
  infos,
  title_form,
  fields,
  cta,
}) => {
  return (
    <div className="contact-us section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="contact-widget-wrapper">
              <div className="main-title">
                <h2>{title}</h2>
                <p>{paragraph}</p>
              </div>
              {infos.map((info, index) => {
                return (
                  <div className="contact-widget-block" key={index}>
                    <h3 className="title">{info.title}</h3>
                    {info.content.map((c, index) => {
                      return <p key={index}>{c}</p>;
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="contact-form">
              <h3 className="form-title">{title_form}</h3>
              <ContactForm cta={cta} fields={fields} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
