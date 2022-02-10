import React from "react";
import "./heroRibbon.css";

import review from "../../assets/4.8new.png";
import img1 from "../../assets/mailicon3.png";
import img2 from "../../assets/mailicon1.png";
import img3 from "../../assets/mailicon2.png";

const HeroRibbon = () => {
  return (
    <section style={{ backgroundColor: "#1c2c46" }}>
      <div className="container_main">
        <div className="flex-right">
          <img src={review} style={{ width: 250 }} />
        </div>

        <div className="flex-left container_ribbon">
          <div className="box_ribbon">
            <img src={img1} alt="blog" />
            <div className="text-center">
              <h4 className="text-white">No Monthly</h4>
              <p className="text-white">Commitment.</p>
            </div>
          </div>

          <div className="box_ribbon">
            <img src={img2} alt="blog" />
            <div className="text-center">
              <h4 className="text-white">FREE Doctor</h4>
              <p className="text-white">Consultations</p>
            </div>
          </div>

          <div className="box_ribbon">
            <img src={img3} alt="blog" />
            <div className="text-center">
              <h4 className="text-white">No Member</h4>
              <p className="text-white">Fees</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroRibbon;
