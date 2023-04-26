import { IResult, ImageFood, IUser } from "../../utils/TypeData";
import { CTypography, ReviewStars } from "../";
import millify from "millify";
import Logo from "../../assets/image/yummly.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const CardCategories = ({ recipe }: IResult) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }} className=" hover:scale-[1.02] transition duration-300">
      <Link to={`/recipe/${recipe?.content?.details?.id}`}>
        {recipe?.content?.details?.images.map((item: ImageFood, idx: number) => (
          <Box key={idx} sx={{ width: 275, height: 350, p: 1 }}>
            <LazyLoadImage effect="blur" loading="lazy" className="w-[275px] h-[200px] object-cover rounded-t-lg" src={item?.resizableImageUrl} />
            <Box sx={{ position: "absolute" }} className="hover:bg-gradient-to-b from-white/10 via-black/50 to-black/90  transition duration-500 top-0 w-[260px] h-[210px]" />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CTypography className="hover:text-hover  text-[13px] transition duration-500" desc={recipe?.seo?.web?.["meta-tags"].title} />
              <LazyLoadImage effect="blur" src={Logo} loading="lazy" alt={recipe?.content?.details?.attribution?.text} className="w-12 h-4 rounded-full" />
            </Box>

            {recipe?.display?.profiles?.map((item: IUser, idx: number) => (
              <Box key={idx} sx={{ display: "flex", alignItems: "center", px: 2, justifyContent: "space-between" }}>
                <CTypography desc={item?.displayName} className="hover:text-hover dark:text-slate-400 dark:hover:text-hover  text-slate-600 text-[12px] transition duration-500" />
                <LazyLoadImage effect="blur" src={item?.pictureUrl} alt={item?.displayName} className="w-8 h-8 rounded-full" loading="lazy" />
              </Box>
            ))}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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
        ))}
      </Link>
    </Box>
  );
};

export default CardCategories;
