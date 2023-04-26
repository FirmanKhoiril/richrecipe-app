import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { IResult, IUser, ImageFood } from "../utils/TypeData";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import millify from "millify";
import Logo from "../assets/image/yummly.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CTypography from "./CTypography";
import ReviewStars from "./ReviewStars";

const DataFood = ({ recipe }: IResult) => {
  return (
    <Link to={`/recipe/${recipe?.content?.details?.id}`}>
      <Box className="h-[320px] dark:bg-black/5 space-y-2 lg:space-y-3 hover:scale-[1.02] transition duration-300 flex flex-col space-x-3">
        {recipe?.content?.details?.images.map((item: ImageFood, idx: number) => (
          <Box key={idx}>
            <img loading="lazy" className="w-full rounded-2xl h-[170px] sm:h-[120px] md:h-[147px] lg:h-[148px]  xd:h-[128px] xs:h-[200px] xl:h-[165px] hover:relative px-3 py-2" src={item?.resizableImageUrl} />
            <Box
              sx={{ position: "absolute" }}
              className="hover:bg-gradient-to-b from-white/10 via-black/50 to-black/90 h-[170px] sm:h-[120px] md:h-[147px] lg:h-[148px]  xd:h-[128px] xs:h-[200px] xl:h-[165px] rounded-2xl transition duration-500 w-full top-0"
            />
          </Box>
        ))}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CTypography variant="body2" className="hover:text-hover dark:hover:text-hover dark:text-white text-sm transition duration-500" desc={recipe?.seo?.web?.["meta-tags"].title} />
          <LazyLoadImage effect="blur" src={Logo} loading="lazy" alt={recipe?.content?.details?.attribution?.text} className="w-11 h-4 rounded-full" />
        </Box>
        {recipe?.display?.profiles?.map((item: IUser, idx: number) => (
          <Box key={idx} sx={{ display: "flex", alignItems: "center", px: 2, justifyContent: "space-between" }}>
            <CTypography desc={item?.displayName} className="hover:text-hover dark:text-slate-400 dark:hover:text-hover text-slate-600 text-[14px] transition duration-500" />
            <LazyLoadImage effect="blur" src={item?.pictureUrl} alt={item?.displayName} className="w-8 h-8 rounded-full" loading="lazy" />
          </Box>
        ))}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {recipe?.content?.reviews?.averageRating === null ? (
            ""
          ) : (
            <>
              <span> {millify(recipe?.content?.reviews?.averageRating)}</span>
              <ReviewStars review={recipe?.content?.reviews?.averageRating} />
            </>
          )}
        </Box>
      </Box>
    </Link>
  );
};

export default DataFood;
