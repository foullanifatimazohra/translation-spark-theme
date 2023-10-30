import { useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    window.onload = () => {
      const preloader = document.querySelector(".preloader");
      window.setTimeout(() => {
        preloader.remove();
      }, [500]);
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
