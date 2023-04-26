import { Box, Tooltip, Typography } from "@mui/material";
import { BiBowlHot } from "react-icons/bi";
import { IIngredients, IUser, ImageFood, TNutrition, TReview } from "../utils/TypeData";
import { LazyLoadImage, trackWindowScroll } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Reviews, Tags } from "./detailsfood";
import { CTypography, ReviewStars } from "./";

const RecipeFood = ({ recipe }: any) => {
  console.log(recipe);
  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: { xs: "column-reverse", sm: "row" } }}>
        <Box sx={{ width: { xs: "auto", sm: 450, md: 500 }, height: 400, p: { xs: 0.4, sm: 1, md: 5 } }}>
          <CTypography variant="h4" className="font-bold " desc={recipe?.display?.displayName} />
          <Box sx={{ display: "flex", my: { xs: 4, sm: 0 }, alignItems: "center", p: { xs: 0, sm: 4 } }}>
            <Typography sx={{ display: "flex", flexDirection: "column", borderRight: 1, pr: { xs: 2, sm: 4 }, borderColor: "#94a3b8" }}>
              <span className="text-center text-[44px]">{recipe?.content?.ingredientLines?.length}</span>
              <span className=" tracking-widest ">Ingredients</span>
            </Typography>
            <Typography sx={{ display: "flex", flexDirection: "column", borderRight: 1, px: { xs: 2, sm: 3 }, borderColor: "#94a3b8" }}>
              <span className="text-center text-[44px]">{recipe?.content?.details?.totalTimeInSeconds / 60}</span>
              <span className=" tracking-widest ">Minutes</span>
            </Typography>
            <Typography sx={{ display: "flex", flexDirection: "column", pl: { xs: 2, sm: 3 }, borderColor: "#94a3b8" }}>
              <span className="text-center text-[44px]">{recipe?.content?.nutrition?.nutritionEstimates.length}</span>
              <span className=" tracking-widest ">Calories</span>
            </Typography>
          </Box>
          {recipe?.display?.profiles?.map((image: IUser, idx: number) => (
            <Box key={idx} sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <LazyLoadImage effect="blur" src={image?.pictureUrl} alt={image?.displayName} loading="lazy" className="w-10 h-10 mr-2 rounded-full" />
              <Box>
                <Tooltip title={image?.displayName}>
                  <span>
                    <CTypography variant="subtitle1" className="text-sm hover:text-lime-600 duration-300 transition" desc={image?.displayName} />
                  </span>
                </Tooltip>
                <CTypography variant="subtitle2" className="text-[12px]" desc={image?.description} />
              </Box>
            </Box>
          ))}
        </Box>
        <Box>
          {recipe?.content?.details?.images?.map((image: ImageFood, idx: number) => (
            <LazyLoadImage effect="blur" src={image.hostedLargeUrl} loading="lazy" alt={recipe?.display?.displayName} key={idx} className="w-full xs:w-[500px]  h-80 rounded-xl" />
          ))}
        </Box>
      </Box>
      <Box sx={{ p: { xs: 1, sm: 5 }, mt: { xs: 2, sm: 0 } }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <CTypography variant="h5" className="tracking-wider" desc="Ingredients" />
          <Box sx={{ display: "flex", gap: 2 }}>
            <CTypography variant="subtitle2" className=" font-extralight tracking-widest border-r border-black pr-2 hover:text-lime-600 transition duration-300 cursor-default" desc={recipe?.locale} />
            <CTypography variant="subtitle2" className=" font-extralight tracking-widest hover:text-lime-600 transition duration-300 cursor-default" desc={recipe?.content?.details?.numberOfServings} descTwo="SERVINGS" />
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {recipe?.content?.ingredientLines?.map((ingredient: IIngredients, idx: number) => (
            <Box key={idx} sx={{ display: "flex", alignItems: "center", py: 2, gap: 1 }}>
              <span>
                <BiBowlHot className="text-lime-600" />
              </span>

              <CTypography variant="body2" className=" tracking-wide" descTwo={ingredient?.remainder} desc={ingredient?.wholeLine === "" ? ingredient?.ingredient : ingredient?.wholeLine} />
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ p: { xs: 1, sm: 5 } }}>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <CTypography variant="h5" className="tracking-wider" desc={recipe?.content?.reviews?.mobileSectionName} />
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <CTypography variant="h6" desc={recipe?.content?.reviews?.reviews?.length} />
            <ReviewStars review={recipe?.content?.reviews?.averageRating} />
          </Box>
        </Box>

        {recipe?.content?.reviews?.reviews?.map((review: TReview, idx: number) => (
          <Reviews key={idx} review={review} />
        ))}
        <Box sx={{ p: { xs: 1, sm: 5 } }}>
          <Box sx={{ display: "flex", flexDirection: "column", my: 2, gap: 4 }}>
            <CTypography variant="h5" className=" tracking-wider" desc="Recipe Tags" />
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
              {recipe?.content?.tags?.cuisine?.map((nutrision: TNutrition, idx: number) => (
                <Tags key={idx} nutrition={nutrision} />
              ))}
              {recipe?.content?.tags?.nutrition?.map((nutrision: TNutrition, idx: number) => (
                <Tags key={idx} nutrition={nutrision} />
              ))}
              {recipe?.content?.tags?.difficulty?.map((nutrision: TNutrition, idx: number) => (
                <Tags key={idx} nutrition={nutrision} />
              ))}
              {recipe?.content?.tags?.course?.map((nutrision: TNutrition, idx: number) => (
                <Tags key={idx} nutrition={nutrision} />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default trackWindowScroll(RecipeFood);
