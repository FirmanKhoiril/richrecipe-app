import { useQuery } from "react-query";
import { getNewsRecipe } from "../api/fetchRecipeNews";
import { Box } from "@mui/material";
import { BlogCard, CTypography, Loading, Error } from "../components";
import { TNews } from "../utils/TypeData";

const Blog = () => {
  const dataNews = async () => {
    const res = await getNewsRecipe("news/search?q=recipe&safeSearch=Off&textFormat=Raw&freshness=Day&count=40");
    return res;
  };

  const { data, isLoading, isError, isFetching, isSuccess, error } = useQuery(["news"], dataNews, {
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
          <Box sx={{ mt: { xs: 4, sm: 8 } }}>
            <CTypography className="text-[45px]  tracking-wide capitalize font-bold" desc={"Latest " + data?.queryContext?.originalQuery + " Blogs"} />
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, my: 4 }}>
              {data?.value?.map((news: TNews, idx: number) => (
                <BlogCard key={idx} detail={news} />
              ))}
            </Box>
          </Box>
        )
      )}
    </>
  );
};

export default Blog;
