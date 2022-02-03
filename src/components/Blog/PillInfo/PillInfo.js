import React from "react";
import "./pillinfo.css";

const PillInfo = (props) => {
  return (
    <div className="pillinfo_container">
      <div
        className="pillinfo_container__header ptb-10"
        style={{ backgroundColor: props.bgColor }}
      >
        <span className="pillinfo_container__header-text" style={{color:props.textColor}}>{props.pillName}</span>
      </div>

      <div className="pillinfo_container__body">
        <div>
          <img src={props.pillImage} style={{ height: "250px" }} />
        </div>
        <div style={{color:props.textColor}}>
          <span style={{fontSize:'48px',fontWeight:'700'}}>$1</span>/ Per Dose
        </div>
        <div>{props.subtitle}</div>
        <div>
            <button className="pillinfo_container_button">GET IT NOW!</button>
        </div>
        <div className="content">
            {props.children}
        </div>
      </div>
    </div>
  );
};

export default PillInfo;
