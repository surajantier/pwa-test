import Slider from "react-slick";
import "./CarouselSection.scss";

const CarouselSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="commn-slider">
      <div className="commn-slider__item">
        <h3>1</h3>
      </div>
      <div className="commn-slider__item">
        <h3>2</h3>
      </div>
      <div className="commn-slider__item">
        <h3>3</h3>
      </div>
      <div className="commn-slider__item">
        <h3>4</h3>
      </div>
      <div className="commn-slider__item">
        <h3>5</h3>
      </div>
      <div className="commn-slider__item">
        <h3>6</h3>
      </div>
    </Slider>
  );
};

export default CarouselSection;
