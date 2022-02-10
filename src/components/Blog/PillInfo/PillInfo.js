import React from "react";
import "./pillinfo.css";

const PillInfo = (props) => {
  console.log(props.subtitle);
  return (
    <div className="pillinfo_container">
      <div
        className="pillinfo_container__header ptb-10"
        style={{ backgroundColor: props.textColor }}
      >
        <span
          className="pillinfo_container__header-text"
          style={{ color: "#fff" ,fontSize:'24px'}}
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
              <span style={{ fontSize: "16px", fontWeight: "700",marginTop:'20px',marginBottom:'10px' }}> / Dose</span>
            </div>
            
            {/* <div>
              <h5>Previously </h5>
              <table>
                {props.subtitle.map((data) => (
                  <tr>
                    <td>{data.qty}</td>
                    <td>{data.price}</td>
                  </tr>
                ))}
              </table>
            </div> */}
          </div>
        </div>
        <div>
          <button className="pillinfo_container_button mt-2">
            GET IT NOW!
          </button>
        </div>
        <p className="desc">{props.children}</p>
      </div>
    </div>
  );
};

export default PillInfo;
