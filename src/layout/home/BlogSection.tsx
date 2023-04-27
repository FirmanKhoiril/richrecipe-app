import { getNewsRecipe } from "../../api/fetchRecipeNews";
import { useQuery } from "react-query";
import { BlogCard, Error, Loading, CTypography } from "../../components";
import { Box } from "@mui/material";
import { TNews } from "../../utils/TypeData";
import { useGlobalContext } from "../../context/ContextAPI";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const { setCategoriesLinks }: any = useGlobalContext();
  const dataNews = async () => {
    const res = await getNewsRecipe("news/search?q=food&safeSearch=Off&textFormat=Raw&freshness=Day&count=10");
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
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <CTypography className="text-[45px] capitalize font-bold" desc={"Top 10 Blogs " + data?.queryContext?.originalQuery} />
              <Link
                to="/blog"
                onClick={() => setCategoriesLinks("blog")}
                className="py-2 px-3 bg-lime-500 hover:bg-lime-400 hover:text-black transition duration-300 hover:shadow-[0px_2px_3px_0px] dark:shadow-white rounded-md"
                type="button"
              >
                Show more
              </Link>
            </Box>
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

export default BlogSection;
