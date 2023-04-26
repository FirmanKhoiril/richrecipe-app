import { Tooltip } from "@mui/material";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

import React from "react";

const ReviewStars = ({ review }: any) => {
  return (
    <Tooltip title="Reviews">
      <span className="flex text-orange-300">
        {review >= 1 ? <BsStarFill /> : <BsStar />}
        {review >= 2 ? <BsStarFill /> : <BsStar />}
        {review >= 3 ? <BsStarFill /> : <BsStar />}
        {review >= 4 ? <BsStarFill /> : review >= 3.1 ? <BsStarHalf /> : <BsStar />}
        {review >= 5 ? <BsStarFill /> : review >= 4.1 ? <BsStarHalf /> : <BsStar />}
      </span>
    </Tooltip>
  );
};

export default ReviewStars;
