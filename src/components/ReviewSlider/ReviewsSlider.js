import OwlCarousel from "react-owl-carousel";
import ReviewCard from "../ReviewCard/ReviewCard";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./reviewslider.css";

import img_rod from "../../assets/rod.png";
import img_vect from "../../assets/vect.png";

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
            country={"Florida, USA"}
            image={img_rod}
          >
            Online doctor was really knowledgeable, kind and was paying
            attention to my concerns. Sam, the care navigator war really
            punctual in making sure thing go smoothly.
          </ReviewCard>
        </div>
        <div className="item">
          <ReviewCard
            reviewer={"Daniel B"}
            country={"Florida, USA"}
            image={img_rod}
          >
            First time I used telehealth for men’s health. Doko doctor explained
            me all the treatment options available. I am glad I signed up for
            this service.
          </ReviewCard>
        </div>
        <div className="item">
          <ReviewCard
            reviewer={"Gary F"}
            country={"Florida, USA"}
            image={img_rod}
          >
            Doctor called me back really fast. Its online, but there is still
            human touch. Care navigator was really amazing.
          </ReviewCard>
        </div>

        <div className="item">
          <ReviewCard
            reviewer={"D. Roderick"}
            country={"NY, USA"}
            image={img_rod}
          >
            As a senior, these are particularly stressful times especially as it
            relates to health and safety. It was reassuring to know I was able
            to get a professional medical diagnosis and treatment that resolved
            my problem. Should I be in need of medical services online I would
            certainly use Doko MD again. Greatly appreciated
          </ReviewCard>
        </div>

        <div className="item">
          <ReviewCard
            reviewer={"Brent Clart"}
            country={"CA, USA"}
            image={img_rod}
          >
            Excellent doc. Great sense of humor also - but gave me good advice
            during a telemedicine appt. Highly recommend
          </ReviewCard>
        </div>
        <div className="item">
          <ReviewCard
            reviewer={"Victoria A"}
            country={"CA, USA"}
            image={img_vect}
          >
            Doko MD service was very fast and helpful. The general physician and
            psychiatrist were very kind and helpful.
          </ReviewCard>
        </div>
      </OwlCarousel>
    </section>
  );
};

export default ReviewsSlider;
