import React from "react";
import { ContactForm } from "./ContactForm";

export const ContactUs = () => {
  return (
    <div className="contact-us section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="contact-widget-wrapper">
              <div className="main-title">
                <h2>Contact Us</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered.
                </p>
              </div>
              <div className="contact-widget-block">
                <h3 className="title">Call us</h3>
                <p>+14-394-409-591</p>
              </div>
              <div className="contact-widget-block">
                <h3 className="title">Email us</h3>
                <p>info@mail.com</p>
                <p>support@mail.com</p>
              </div>
              <div className="contact-widget-block">
                <h3 className="title">Our Address</h3>
                <p>34 Madison Street,</p>
                <p>NY, USA 10005</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="contact-form">
              <h3 className="form-title">Leave a message here</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
