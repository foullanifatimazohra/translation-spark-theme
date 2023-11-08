import React from "react";

export const Map = () => {
  return (
    <div class="map-section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  width="100%"
                  height="500"
                  id="gmap_canvas"
                  title="gmap_canvas"
                  src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
