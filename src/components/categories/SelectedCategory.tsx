import { Box } from "@mui/material";
import { useInfiniteQuery } from "react-query";
import { useGlobalContext } from "../../context/ContextAPI";
import { getRecipe } from "../../api/fetchRecipe";
import { ButtonFetchPages, CardCategories, Error, Loading } from "..";
import { TPagination } from "../../utils/TypeData";

const SelectedCategory = () => {
  const { allCategories }: any = useGlobalContext();

  const dataRecipe = async ({ pageParams = 0 }: any) => {
    const res = await getRecipe(`feeds/search?start=${pageParams}&maxResult=18&FAT-KCALMax=1200&q=${allCategories}&maxTotalTimeInSecond=7200`);

    return res;
  };

  const { data, isFetching, isLoading, isError, hasNextPage, error, fetchNextPage, isSuccess, isFetchingNextPage } = useInfiniteQuery(["selectedCategory", allCategories], dataRecipe, {
    getNextPageParam: (lastPage, pages) => {
      console.log(lastPage?.criteria?.start);
      return lastPage?.criteria?.start + 1;
    },
    staleTime: 10 * (60 * 1000),

    refetchInterval: 10 * (60 * 1000),
    cacheTime: 10 * (60 * 1000),
    refetchOnWindowFocus: false,
  });

  return (
    <Box sx={{ py: 2 }}>
      {isFetchingNextPage && <Loading />}
      {isFetching && isLoading ? (
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
            {hasNextPage && <ButtonFetchPages onClick={fetchNextPage} />}
          </>
        )
      )}
    </Box>
  );
};

export default SelectedCategory;
