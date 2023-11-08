import React from "react";

export const AboutMain = ({ title }) => {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="breadcrumbs-content">
              <h1 className="page-title">{title}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
