import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./sectionslider.css";

import xr_1 from "../../assets/xr-1.png";
import xr_2 from "../../assets/xr-2.png";
import xr_3 from "../../assets/xr-3.png";
import xr_5 from "../../assets/xr-5.png";
import xr_6 from "../../assets/xr-6.png";

const SectionSlider = () => {
  return (
    <div>
      <div className="bg-theme-blue pt-2 pb-2">
        <div className="text-center text-white" data-aos="fade-up">
          <h3>Did you know...?</h3>
        </div>
      </div>

      <div data-aos="fade-up">
        <OwlCarousel className="owl-theme" loop margin={10} nav items="1">
          <div className="item">
            <div className="flex-column-cc">
              <div className="image_wrapper">
                <img src={xr_1} alt="partner logo" className="img-fluid" />
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
            <div className="flex-column-cc">
              <div className="image_wrapper">
                <img
                  src={xr_2}
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
            <div className="flex-column-cc">
              <div className="image_wrapper">
                <img src={xr_3} alt="partner logo" className="img-fluid" />
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
            <div className="flex-column-cc">
              <div className="image_wrapper">
                <img src={xr_5} alt="partner logo" className="img-fluid" />
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
            <div className="flex-column-cc">
              <div className="image_wrapper">
                <img src={xr_6} alt="partner logo" className="img-fluid" />
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
      </div>
    </div>
  );
};

export default SectionSlider;
