import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import "./assets/css/main.css";
import "./assets/css/animate.css";
import "./assets/css/glightbox.min.css";
import "./assets/css/LineIcons.3.0.css";
import "tiny-slider/dist/tiny-slider.css";
import Loader from "./components/ui/Loader";

//import "./assets/scss/main.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
