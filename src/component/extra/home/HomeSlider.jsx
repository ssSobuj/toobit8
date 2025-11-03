// // BootstrapCarousel.js
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Carousel } from "react-bootstrap";

// // image import
// import slide1 from "../../../assets/images/slider/slide01.jpg";
// import slide2 from "../../../assets/images/logo2.png";
// import slide3 from "../../../assets/images/slider/slide02.jpg";
// import slide4 from "../../../assets/images/slider/slide04.jpg";
// import slide5 from "../../../assets/images/slider/slide05.jpg";
// import slide6 from "../../../assets/images/slider/slide06.jpg";
// import slide7 from "../../../assets/images/slider/slide07.jpg";
// import slide8 from "../../../assets/images/slider/slide03.jpg";

// const HomeSlider = () => {
//   return (
//     <Carousel
//       data-v-1b3f4761=""
//       className=":uno: swiper-container"
//       style={{ borderRadius: "15px", overflow: "hidden", height: "300px" }}
//     >
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={slide1}
//           alt="Slide 1"
//           style={{ height: "300px", objectFit: "cover" }}
//         />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={slide2}
//           alt="Slide 2"
//           style={{ height: "300px", objectFit: "cover" }}
//         />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={slide3}
//           alt="Slide 3"
//           style={{ height: "300px", objectFit: "cover" }}
//         />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={slide4}
//           alt="Slide 4"
//           style={{ height: "300px", objectFit: "cover" }}
//         />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={slide5}
//           alt="Slide 5"
//           style={{ height: "300px", objectFit: "cover" }}
//         />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={slide6}
//           alt="Slide 6"
//           style={{ height: "300px", objectFit: "cover" }}
//         />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={slide7}
//           alt="Slide 7"
//           style={{ height: "300px", objectFit: "cover" }}
//         />
//       </Carousel.Item>
//     </Carousel>
//   );
// };

// export default HomeSlider;

// HomeSlider.js


import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

// image imports
import slide1 from "../../../assets/images/slider/slide01.jpg";
import slide2 from "../../../assets/images/logo2.png";
import slide3 from "../../../assets/images/slider/slide02.jpg";
import slide4 from "../../../assets/images/slider/slide04.jpg";
import slide5 from "../../../assets/images/slider/slide05.jpg";
import slide6 from "../../../assets/images/slider/slide06.jpg";
import slide7 from "../../../assets/images/slider/slide07.jpg";

const slides = [
  { src: slide1, caption: "Empower Your Digital Journey" },
  { src: slide2, caption: "Innovation Starts with You" },
  { src: slide3, caption: "Discover Limitless Opportunities" },
  { src: slide4, caption: "Your Vision, Our Mission" },
  { src: slide5, caption: "Transforming Ideas into Reality" },
  { src: slide6, caption: "Creating Experiences that Inspire" },
  { src: slide7, caption: "Driven by Passion and Purpose" },
];

const HomeSlider = () => {
  return (
    <div className="unique-carousel-wrapper">
      <Carousel
        fade
        controls={false}
        indicators={true}
        interval={3000}
        className="custom-carousel"
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div className="carousel-overlay"></div>
            <img
              className="d-block w-100 carousel-image"
              src={slide.src}
              alt={`Slide ${index + 1}`}
            />
            <Carousel.Caption>
              <h3 className="slide-caption mb-4">{slide.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeSlider;
