import React from "react";

export const ContactForm = () => {
  return (
    <form className="form" method="post" action="assets/mail/mail.php">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12">
          <div className="form-group">
            <input
              name="name"
              type="text"
              placeholder="Name*"
              required="required"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="form-group">
            <input
              name="email"
              type="email"
              placeholder="Email*"
              required="required"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="form-group">
            <input
              name="subject"
              type="text"
              placeholder="Subject*"
              required="required"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="form-group">
            <input
              name="phone"
              type="text"
              placeholder="Phone*"
              required="required"
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <textarea
              placeholder="Message*"
              name="message"
              id="message-area"
              className="form-control"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="col-12">
          <div className="button">
            <button type="submit" className="btn ">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
