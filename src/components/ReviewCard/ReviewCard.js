import React from "react";
import Rating from "../Rating/Rating";
import "./reviewcard.css";

const ReviewCard = () => {
  return (
    <div className="pl-2 pr-2">
      <div className="bg-theme-gray review_card_content">
        <div className="review_card">
          <div className="client-img">
            <img
              src="https://doko.md/img/rod.png"
              alt="client"
              className="rounded-circle"
            />
          </div>
          <div className=" pt-5 pl-2 pr-2">
            <blockquote>
              As a senior, these are particularly stressful times especially as
              it relates to health and safety.{" "}
            </blockquote>
            <div className="client-ratting mt-2">
              <Rating/>
            </div>
            <div className="client-info">
              <h5 className="mb-0">D. Roderick, NY</h5>
              <p className="mb-0">USA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
