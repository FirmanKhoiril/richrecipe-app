import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { getRecipe } from "../api/fetchRecipe";
import { useInfiniteQuery } from "react-query";
import { ButtonFetchPages, CTypography, CardCategories, Error, Loading } from "../components";
import { TPagination } from "../utils/TypeData";

const SearchResult = () => {
  const { text } = useParams<string>();

  const dataRecipe = async ({ pageParams = 1 }: any) => {
    const res = await getRecipe(`feeds/search?start=${pageParams}&maxResult=20&maxTotalTimeInSecond=7200&q=${text}&FAT_KCALMax=1000`);
    return res;
  };

  const { data, isFetching, isLoading, isError, hasNextPage, error, fetchNextPage, isSuccess, isFetchingNextPage } = useInfiniteQuery(["recipes", text], dataRecipe, {
    getNextPageParam: (lastPage, pages) => {
      if (lastPage?.criteria?.start) return lastPage?.criteria?.start + 1;
      return;
    },
    staleTime: 10 * (60 * 1000),

    refetchInterval: 10 * (60 * 1000),
    cacheTime: 10 * (60 * 1000),
    refetchOnWindowFocus: false,
  });

  const handleNextPage = () => {
    fetchNextPage();
  };

  return (
    <Box sx={{ mb: 10 }}>
      {isFetching && isLoading && isFetchingNextPage ? (
        <Loading />
      ) : isError ? (
        <Error error={error} />
      ) : (
        isSuccess && (
          <>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              {data?.pages?.map((item: TPagination) =>
                item?.feed.map((item: any, idx: number) => (
                  <Box key={idx} sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", my: 1 }}>
                    <CardCategories recipe={item} />
                  </Box>
                ))
              )}
            </Box>
            {hasNextPage ? <ButtonFetchPages onClick={handleNextPage} /> : <CTypography desc="Theres no data anymore" />}
          </>
        )
      )}
    </Box>
  );
};

export default SearchResult;
