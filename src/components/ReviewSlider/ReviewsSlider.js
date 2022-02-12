import ReviewCard from "../ReviewCard/ReviewCard";
import "./reviewslider.css";

const ReviewsSlider = () => {
  return (
    <section id="clientslider" className="bg-theme-green">
      <div className="justify-content-center">
        <div className="section-heading mb-5 text-center">
          <h2>Check what our Patients are Saying</h2>
        </div>
      </div>

      <ReviewCard />
    </section>
  );
};

export default ReviewsSlider;
