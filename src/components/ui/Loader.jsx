import { useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    window.onload = () => {
      const preloader = document.querySelector(".preloader");
      setTimeout(() => {
        preloader.remove();
      }, [500]);
    };
  }, []);

  return (
    <div classname="preloader">
      <div classname="preloader-inner">
        <div classname="preloader-icon">
          <span>
            <span></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
