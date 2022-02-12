import React from "react";
import "./pillinfo.css";

const PillInfo = (props) => {
  return (
    <div className="pillinfo_container">
      <div
        className="pillinfo_container__header ptb-10"
        style={{ backgroundColor: props.textColor }}
      >
        <span
          className="pillinfo_container__header-text"
          style={{ color: "#fff", fontSize: "24px" }}
        >
          {props.pillName}
        </span>
      </div>

      <div className="pillinfo_container__body flex-column mt-3">
        <div className="flex-row">
          <div>
            <img src={props.pillImage} style={{ height: "250px" }} />
          </div>
          <div className="ml-3">
            <div
              className="circle-background"
              style={{ backgroundColor: props.textColor }}
            >
              <span style={{ fontSize: "72px", fontWeight: "700" }}>$1</span>
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                / Dose
              </span>
            </div>
            <div>
              <a
                href="#edform"
                className="btn solid-btn page-scroll getitnow pillinfo_container_button mt-3"
              >
                GET IT NOW!
              </a>
            </div>
          </div>
        </div>

        <p className="text-left desc pl-2 pr-2">{props.children}</p>
      </div>
    </div>
  );
};

export default PillInfo;
