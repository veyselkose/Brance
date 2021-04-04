import React from "react";
import { Carousel } from "react-responsive-carousel";
import "../style/carousel.css";
import Title from "./Title";

function Testimonials() {
  return (
    <section style={{padding:"5rem 0"}}>
      <Title
        title="What our Client Says"
        shortDesc="Look at all of our recent work. To each his project, we pay special attention."
      />
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        emulateTouch={true}
        showArrows={false}
        showStatus={false}
        useKeyboardArrows={true}
      >
        <div className="carousel-item">
          <img src="images/profile-1.jpg" alt="" className="carousel-img" />
          <p className="carousel-desc">
            Brance is by far the most amazing template out there! I literally
            could not be happier that I chose to buy this template! The world is
            a dangerous place to live; not because of the people who are evil,
            but because of the people who don't do anything about it.
          </p>
          <h4 className="carousel-title">Jasson Bary</h4>
          <span className="carousel-alt">Happy Customer</span>
        </div>
        <div className="carousel-item">
          <img src="images/profile-2.jpg" alt="" className="carousel-img" />
          <p className="carousel-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            minus laudantium asperiores consequuntur, eos excepturi provident
          </p>
          <h4 className="carousel-title">Jasson Bary</h4>
          <span className="carousel-alt">Happy Customer</span>
        </div>
        <div className="carousel-item">
          <img src="images/profile-3.jpg" alt="" className="carousel-img" />
          <p className="carousel-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            minus laudantium asperiores consequuntur, eos excepturi provident
          </p>
          <h4 className="carousel-title">Jasson Bary</h4>
          <span className="carousel-alt">Happy Customer</span>
        </div>
      </Carousel>
    </section>
  );
}

export default Testimonials;
