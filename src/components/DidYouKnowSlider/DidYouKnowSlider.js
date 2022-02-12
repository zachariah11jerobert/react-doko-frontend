import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./didyouknowslider.css";

import xr_1 from "../../assets/xr-1.png";
import xr_2 from "../../assets/xr-2.png";
import xr_3 from "../../assets/xr-3.png";
import xr_5 from "../../assets/xr-5.png";
import xr_6 from "../../assets/xr-6.png";

const DidYouKnowSlider = () => {
  return (
    <div className="bg-theme-blue pt-2 pb-2">
      <div className="pt-2 pb-2">
        <div className="text-center text-white" data-aos="fade-up">
          <h3>Did you know...?</h3>
        </div>
      </div>

      <div id="didyouknowslider" data-aos="fade-up" className="pl-2 pr-2">
        <OwlCarousel className="owl-theme" loop margin={10} nav items="1">
          <div className="item">
            <div className="flex-column-cc">
              <div className="image_wrapper">
                <img src={xr_1} alt="partner logo" className="img-fluid" />
              </div>
              <div className="text-center mt-2 pl-2 pr-2">
                <h5>Getting Help</h5>
                <p>Only 33% of men seek help about their ED </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="flex-column-cc">
              <div className="image_wrapper">
                <img
                  src={xr_2}
                  alt="partner logo"
                  style={{ marginLeft: "22%" }}
                  className="img-fluid"
                />
              </div>
              <div className="text-center mt-2 pl-2 pr-2">
                <h5>Mental Health</h5>
                <p>
                  10% to 20% of all ED cases are caused by stress and anxiety
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="flex-column-cc">
              <div className="image_wrapper">
                <img src={xr_3} alt="partner logo" className="img-fluid" />
              </div>
              <div className="text-center mt-2 pl-2 pr-2">
                <h5>You are not alone</h5>
                <p>1 in 10 men suffer from ED</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="flex-column-cc">
              <div className="image_wrapper">
                <img src={xr_5} alt="partner logo" className="img-fluid" />
              </div>
              <div className="text-center mt-2 pl-2 pr-2">
                <h5>Sign of Diabetes</h5>
                <p>of all men who have diabetes suffer from ED</p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="flex-column-cc">
              <div className="image_wrapper">
                <img src={xr_6} alt="partner logo" className="img-fluid" />
              </div>
              <div className="text-center mt-2 pl-2 pr-2">
                <h5>Its Physical</h5>
                <p>80% of all cases are down to physical reasons</p>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default DidYouKnowSlider;
