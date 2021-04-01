import React from "react";
import HeroSection from "../HeroSection";
import Navtabs from "../Navtabs";
function PortfolioFour() {
  return (
    <section className="porfolio-four">
      <div className="container">
        <HeroSection
          title="Portfolio Column Four"
          text="It is a long established fact that a reader will be distracted by the readable content.It is a long established fact that a reader will be distracted by the readable content."
          width800
        />
        <Navtabs
          loadMore="on"
          col="4"
          data={[
            {
              key: 1,
              URL: "/images/tabs-img5.jpg",
              category: "development",
              alt: "table",
            },
            {
              key: 2,
              URL: "/images/tabs-img1.jpg",
              category: "development",
              alt: "book",
            },
            {
              key: 3,
              URL: "/images/tabs-img2.jpg",
              category: "development",
              alt: "nike",
            },
            {
              key: 4,
              URL: "/images/tabs-img4.jpg",
              category: "design",
              alt: "flowerpot",
            },
            {
              key: 5,
              URL: "/images/tabs-img3.jpg",
              category: "design",
              alt: "letter",
            },
            {
              key: 6,
              URL: "/images/tabs-img6.jpg",
              category: "design",
              alt: "picture",
            },
            {
              key: 7,
              URL: "/images/tabs-img8.jpg",
              category: "design",
              alt: "ice cream",
            },
            {
              key: 8,
              URL: "/images/tabs-img10.jpg",
              category: "marketing",
              alt: "beer",
            },
            {
              key: 9,
              URL: "/images/tabs-img7.jpg",
              category: "marketing",
              alt: "cap",
            },
            {
              key: 10,
              URL: "/images/tabs-img9.jpg",
              category: "marketing",
              alt: "pot",
            },
          ]}
        />
      </div>
    </section>
  );
}

export default PortfolioFour;
