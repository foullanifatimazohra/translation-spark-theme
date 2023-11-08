import React from "react";

export const ContactForm = ({ fields, cta }) => {
  return (
    <form className="form" method="post" action="assets/mail/mail.php">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12">
          <div className="form-group">
            <input
              name="name"
              type="text"
              placeholder={fields[0]}
              required="required"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="form-group">
            <input
              name="email"
              type="email"
              placeholder={fields[1]}
              required="required"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="form-group">
            <input
              name="subject"
              type="text"
              placeholder={fields[2]}
              required="required"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="form-group">
            <input
              name="phone"
              type="text"
              placeholder={fields[3]}
              required="required"
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <textarea
              placeholder={fields[4]}
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
              {cta}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
