import React from "react";
import "./pillinfo.css";

const PillInfo = (props) => {
  return (
    <div className="pillinfo_container">
      <div
        className="pillinfo_container__header ptb-10"
        style={{ backgroundColor: props.bgColor }}
      >
        <span
          className="pillinfo_container__header-text"
          style={{ color: props.textColor }}
        >
          {props.pillName}
        </span>
      </div>

      <div className="pillinfo_container__body">
        <div className="flex-row">
          <div>
            <img src={props.pillImage} style={{ height: "250px" }} />
          </div>
          <div className="ml-3">
            <div style={{ color: props.textColor }}>
              <span style={{ fontSize: "48px", fontWeight: "700" }}>$1</span>
              <br/>/
              Per Dose
            </div>
            <h5>
              Previously <br />
              {props.subtitle}
            </h5>
          </div>
        </div>
        <div>
          <button className="pillinfo_container_button">GET IT NOW!</button>
        </div>
        <p className="desc">{props.children}</p>
      </div>
    </div>
  );
};

export default PillInfo;
