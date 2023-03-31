import React from "react";
import Slider from "react-slick";

import roadmapDetails from "../../content/RoadMap";
import RoadMapItemCart from "./roadmapItemCart";

function SampleNextArrow(props) {
  const { className, style, onClick, hideOnMobile } = props;
  return (
    <>
      <button
        className={className}
        style={{
          ...style,
          justifyContent: "center",
          marginRight: "-25px",
          scale: "3",
          display: hideOnMobile ? "none" : "block",
        }}
        onClick={onClick}
      ></button>
    </>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick, hideOnMobile } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: hideOnMobile ? "none" : "block",
        justifyContent: "center",
        marginLeft: "-25px",
        scale: "3",
      }}
      onClick={onClick}
    />
  );
}

const RoadMapCarosual = () => {
  const isMobile = window.matchMedia("(max-width: 480px)").matches;
  
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow hideOnMobile={isMobile} />,
    prevArrow: <SamplePrevArrow hideOnMobile={isMobile} />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="flex flex-col justify-center text-white" id='ROAD MAP'>
        <div className="flex text-6xl justify-center p-4">Roadmap</div>
          <div className="px-[10%]">
            <Slider {...settings}>
              {roadmapDetails.map((roadmap) => {
                return (
                  <RoadMapItemCart
                    key={roadmap.phase}
                    phase={roadmap.phase}
                    numbered={roadmap.numbered}
                    title={roadmap.title}
                    points={roadmap.points}
                  />
                );
              })}
            </Slider>
        </div>
      </div>
    </>
  );
};

export default RoadMapCarosual;
