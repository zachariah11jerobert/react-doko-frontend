import OwlCarousel from "react-owl-carousel";
import ReviewCard from "../ReviewCard/ReviewCard";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./reviewslider.css";

import img_rod from "../../assets/rod.png";

const ReviewsSlider = () => {
  return (
    <section id="clientslider" className="bg-theme-green pt-2">
      <div className="text-center">
        <h3 className="text-white">Check what our Patients are Saying</h3>
      </div>

      <OwlCarousel className="owl-theme" loop margin={10} nav items="1">
        <div className="item">
          <ReviewCard
            reviewer={"William G"}
            country={"Florida"}
            image={img_rod}
          >
            Online doctor was really knowledgeable, kind and was paying
            attention to my concerns. Sam, the care navigator war really
            punctual in making sure thing go smoothly.
          </ReviewCard>
        </div>
        <div className="item">
          <ReviewCard reviewer={"Daniel B"} country={"Florida"} image={img_rod}>
            First time I used telehealth for men’s health. Doko doctor explained
            me all the treatment options available. I am glad I signed up for
            this service.
          </ReviewCard>
        </div>
        <div className="item">
          <ReviewCard reviewer={"Gary F"} country={"Florida"} image={img_rod}>
            Doctor called me back really fast. Its online, but there is still
            human touch. Care navigator was really amazing.
          </ReviewCard>
        </div>
      </OwlCarousel>
    </section>
  );
};

export default ReviewsSlider;
