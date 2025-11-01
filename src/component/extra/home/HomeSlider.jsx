// BootstrapCarousel.js
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

// image import
import slide1 from "../../../assets/images/slider/slide01.jpg";
import slide2 from "../../../assets/images/slider/slide02.jpg";
import slide3 from "../../../assets/images/slider/slide03.jpg";
import slide4 from "../../../assets/images/slider/slide04.jpg";
import slide5 from "../../../assets/images/slider/slide05.jpg";
import slide6 from "../../../assets/images/slider/slide06.jpg";
import slide7 from "../../../assets/images/slider/slide07.jpg";

const HomeSlider = () => {
  return (
    <Carousel
      data-v-1b3f4761=""
      className=":uno: swiper-container"
      style={{ borderRadius: "15px", overflow: "hidden", height: "200px" }}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1}
          alt="Slide 1"
          style={{ height: "200px", objectFit: "cover" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide2}
          alt="Slide 2"
          style={{ height: "200px", objectFit: "cover" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Slide 3"
          style={{ height: "200px", objectFit: "cover" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide4}
          alt="Slide 4"
          style={{ height: "200px", objectFit: "cover" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide5}
          alt="Slide 5"
          style={{ height: "200px", objectFit: "cover" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide6}
          alt="Slide 6"
          style={{ height: "200px", objectFit: "cover" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide7}
          alt="Slide 7"
          style={{ height: "200px", objectFit: "cover" }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeSlider;
