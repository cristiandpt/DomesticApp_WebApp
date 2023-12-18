import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

const JobsCarouselItem = (props) => {
  const { name, description } = props.item;
  console.log(props.item);
  return (
    <Card className="mx-2" sx={{ minWidth: 400, backgroundColor: "#f0f0f0" }}>
      
      <CardMedia
        sx={{ height: 140 }}
        image="https://picsum.photos/560/140"
        title="green iguana"
      />
      <CardContent>
       <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions className="flex justify-center">
        <Link
          href={{
            pathname: "/client/search/[jobId]",
            query: { jobId: "3" },
          }}
        >
          <Button size="small">Browse workers</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default JobsCarouselItem;
