import React from "react";
import HeroSection from "../HeroSection";
import Navtabs from "../Navtabs";
import WhatWeDo from "../WhatWeDo";
import MeOurTeam from "../MeOurTeam";
import Testimonials from "../Testimonials";
import FreeQuote from "../FreeQuote";
import Newsletter from "../Newsletter";
import Pulse from "react-reveal/Pulse"
function Home() {
  const data = [
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
  ];
  return (
    <>
      <div className="container">
        <Pulse>
        <HeroSection
          title="Hello, I'm"
          coloredtitle="John Smith"
          width700
          text={
            "Te iisque labitur eos, nec sale argumentum scribentur no,\naugue disputando in vim. Erat fugit sit at, ius lorem deserunt deterruisset no."
          }
        />
        </Pulse>
        <Navtabs col="3" loadMore="off" data={data} />
        <WhatWeDo />
      </div>
      <MeOurTeam />
      <div className="container">
        <Testimonials />
      </div>
      <FreeQuote />
      <div className="container">
        <Newsletter />
      </div>
    </>
  );
}

export default Home;
