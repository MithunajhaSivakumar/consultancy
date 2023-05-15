import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./SlideShow.css";
import slider1 from '../../../asset/slider1.jpg'
import slider2 from "../../../asset/slider2.jpg";
import slider3 from "../../../asset/slider3.jpg";
import slider4 from "../../../asset/slider4.jpg";

function SlideShow() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider3}
            alt="First slide"
            style={{ maxHeight: "85vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Fuel Your Body, Fuel Your Life</h3>
            <p>
              Elevate Your Health with ChoChi - Where Nutrient Packs Meet Your
              Needs
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider4}
            alt="Second slide"
            style={{ maxHeight: "85vh", objectFit: "cover" }}
          />

          <Carousel.Caption>
            <h3>Nourish from Within</h3>
            <p>
              Unleash Your Inner Vitality - ChoChi, Your Source for
              Nutrient-packed Goodness
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider2}
            alt="Third slide"
            style={{ maxHeight: "85vh", objectFit: "cover" }}
          />

          <Carousel.Caption>
            <h3>Revitalize Your Wellness Journey</h3>
            <p>
              Embark on a Health Transformation with ChoChi - Where Nutrition
              Fuels Success
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider1}
            alt="Third slide"
            style={{ maxHeight: "85vh", objectFit: "cover" }}
          />

          <Carousel.Caption>
            <h3>Embrace a Balanced Lifestyle</h3>
            <p>
              Discover the Power of Nourishment - ChoChi, Your Partner in
              Optimal Well-being
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default SlideShow;
