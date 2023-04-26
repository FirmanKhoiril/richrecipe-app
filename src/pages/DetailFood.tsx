import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getRecipe } from "../api/fetchRecipe";
import { Box } from "@mui/material";
import { Error, Loading, RecipeFood } from "../components";

const DetailFood = () => {
  const { id } = useParams();

  const dataRecipe = async () => {
    const res = await getRecipe(`feeds/list-similarities?limit=18&start=0&id=${id}`);
    return res;
  };

  const { data, isError, isFetching, isLoading, error, isSuccess } = useQuery(["detail-food", id], dataRecipe, {
    staleTime: 10 * (60 * 1000),

    refetchInterval: 10 * (60 * 1000),

    refetchOnWindowFocus: false,
  });

  return (
    <>
      {isFetching && isLoading ? (
        <Loading />
      ) : isError ? (
        <Error error={error} />
      ) : (
        isSuccess && (
          <Box>
            {data?.feed?.map((recipe: any, idx: number) => (
              <Box key={idx}>
                <RecipeFood recipe={recipe} />
              </Box>
            ))}
          </Box>
        )
      )}
    </>
  );
};

export default DetailFood;
