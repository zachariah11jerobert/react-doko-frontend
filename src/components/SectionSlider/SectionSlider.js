import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const SectionSlider = () => {

  return (
    <OwlCarousel className="owl-theme" loop margin={10} nav items="1">
      <div className="item">
        <div className="rounded text-center p-4">
          <div className="mb-3">
            <img
              src="https://doko.md/edpills/xr-1.png"
              alt="partner logo"
              className="img-fluid"
            />
          </div>
          <div className="mb-2">
            <h5 className="mb-0">Getting Help</h5>
            <h6>
              <strong>Only 33% of men seek help about their ED</strong>
            </h6>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="rounded text-center p-4">
          <div className="mb-3">
            <img
              src="https://doko.md/edpills/xr-2.png"
              alt="partner logo"
              style={{ marginLeft: "22%" }}
              className="img-fluid"
            />
          </div>
          <div className="mb-2">
            <h5 className="mb-0">Mental Health</h5>
            <h6>
              <strong>
                10% to 20% of all ED cases are caused by stress and anxiety
              </strong>
            </h6>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="rounded text-center p-4">
          <div className="mb-3">
            <img
              src="https://doko.md/edpills/xr-3.png"
              alt="partner logo"
              className="img-fluid"
            />
          </div>
          <div className="mb-2">
            <h5 className="mb-0">You are not alone</h5>
            <h6>
              <strong>1 in 10 men suffer from ED</strong>
            </h6>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="single-partner-wrap card-bottom-line  rounded text-center p-4">
          <div className="mb-3">
            <img
              src="https://doko.md/edpills/xr-5.png"
              alt="partner logo"
              className="img-fluid"
            />
          </div>
          <div className="mb-2">
            <h5 className="mb-0">Sign of Diabetes</h5>
            <h6>
              <strong>of all men who have diabetes suffer from ED</strong>
            </h6>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="rounded text-center p-4">
          <div className="mb-3">
            <img
              src="https://doko.md/edpills/xr-6.png"
              alt="partner logo"
              className="img-fluid"
            />
          </div>
          <div className="mb-2">
            <h5 className="mb-0">Its Physical</h5>
            <h6>
              <strong>80% of all cases are down to physical reasons</strong>
            </h6>
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
};

export default SectionSlider;
