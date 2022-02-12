import React from "react";
import Rating from "../Rating/Rating";
import "./reviewcard.css";

const ReviewCard = ({ image, reviewer, country, children }) => {
  return (
    <div className="pl-2 pr-2">
      <div className="bg-theme-gray review_card_content">
        <div className="review_card">
          <div className="review_flex_ss">
            <img
              src={image}
              alt="client"
              className="rounded-circle client-img"
            />
            <blockquote>{children}</blockquote>
          </div>
          <div className="pl-2 pr-2 review_flex_bc">
            <div className="client-info">
              <h5 className="mb-0">{reviewer}</h5>
              <p className="mb-0">{country}</p>
            </div>
            <div className="client-ratting mt-2">
              <Rating />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
