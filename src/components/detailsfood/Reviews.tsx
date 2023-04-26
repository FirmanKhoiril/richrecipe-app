import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { IReview, Image } from "../../utils/TypeData";
import { Box, Tooltip, Typography } from "@mui/material";
import moment from "moment";
import CTypography from "../CTypography";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Reviews = ({ review }: IReview) => {
  return (
    <Box sx={{ display: "flex", gap: { xs: 2, sm: 3 }, flexDirection: "row", alignItems: "center", justifyContent: "start", minHeight: 200, pl: 2, my: 1 }}>
      {review?.profiles?.map((image: Image, idx: number) => (
        <LazyLoadImage effect="blur" loading="lazy" src={image.pictureUrl} key={idx} alt={image?.displayName} className="h-10 w-10 rounded-full" />
      ))}
      <Box sx={{ display: "flex", flexDirection: "column", pl: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Tooltip title={review?.user?.displayName}>
            <span>
              <CTypography variant="h6" className="hover:text-lime-600 transition duration-300 cursor-pointer" desc={review?.user?.displayName} />
            </span>
          </Tooltip>
          <CTypography className="text-sm ml-2 text-slate-500 dark:text-slate-400" desc={moment(review?.createTime).fromNow()} />
        </Box>

        <Typography variant="subtitle2" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <span className="flex text-orange-300">
            {review?.rating >= 1 ? <BsStarFill /> : <BsStar />}
            {review?.rating >= 2 ? <BsStarFill /> : <BsStar />}
            {review?.rating >= 3 ? <BsStarFill /> : <BsStar />}
            {review?.rating >= 4 ? <BsStarFill /> : review?.rating <= 4 ? <BsStarHalf /> : <BsStar />}
            {review?.rating >= 5 ? <BsStarFill /> : review?.rating >= 4.1 ? <BsStarHalf /> : <BsStar />}
          </span>
          <span>{review?.rating}</span>
        </Typography>
        <CTypography variant="subtitle2" desc={review?.text} />
      </Box>
    </Box>
  );
};

export default Reviews;
