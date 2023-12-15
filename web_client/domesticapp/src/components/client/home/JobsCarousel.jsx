import React from "react";
import Carousel from "react-material-ui-carousel";
import JobsCarouselItem from "./JobsCarouselItem";

const JobsCarousel = (props) => {
  const items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <JobsCarouselItem key={i} item={item} />
      ))}
    </Carousel>
  );
};
export default JobsCarousel;
