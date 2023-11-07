import React from "react";
import auto from "../../assets/images/about/auto.svg";
import carbon from "../../assets/images/about/carbon.svg";
import evolve from "../../assets/images/about/evolve.svg";
import flutter from "../../assets/images/about/flutter.svg";

export const Partners = () => {
  return (
    <div className="client-logo">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-3 col-12 text-center">
            <div className="single-logo">
              <img src={auto} alt="#" />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-12 text-center">
            <div className="single-logo">
              <img src={carbon} alt="#" />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-12 text-center">
            <div className="single-logo">
              <img src={evolve} alt="#" />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-12 text-center">
            <div className="single-logo">
              <img src={flutter} alt="#" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
