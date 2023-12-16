import React from "react";
import Carousel from "react-material-ui-carousel";
import JobsCarouselItem from "./UpdatesCarouselItem";
import { Typography } from "@mui/material";

const JobsCarousel = (props) => {
  const items = [
    {
      name: "Useful reccomendations",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Safety comes first",
      description: "Hello World!",
    },
  ];

  return (
    <section className="bg-slate-300 rounded">
      <div className="flex justify-center">
        <Typography variant="h5" component="div">
          Stay up to date!
        </Typography>
      </div>
      <Carousel>
        {items.map((item, i) => (
          <section className="flex justify-center p-1 md:p-3">
            <JobsCarouselItem key={i} item={item} />
          </section>
        ))}
      </Carousel>
    </section>
  );
};
export default JobsCarousel;
