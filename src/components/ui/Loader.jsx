import { useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    window.onload = () => {
      window.onload = function () {
        window.setTimeout(fadeout, 500);
      };

      function fadeout() {
        document.querySelector(".preloader").style.opacity = "0";
        document.querySelector(".preloader").style.display = "none";
      }
    };
  });
  return (
    <div class="preloader">
      <div class="preloader-inner">
        <div class="preloader-icon">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
