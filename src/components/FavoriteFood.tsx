import { useQuery } from "react-query";
import { getRecipe } from "../api/fetchRecipe";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Loading, Error, CardFood } from "../components";
import Slider from "react-slick";
import { useGlobalContext } from "../context/ContextAPI";

const settings: any = {
  infinite: true,
  speed: 1000,
  initialSlide: 3,
  pauseOnHover: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const FavoriteFood = () => {
  const { categories }: any = useGlobalContext();
  const dataRecipe = async () => {
    const res = await getRecipe(`feeds/search?start=0&maxResult=20&maxTotalTimeInSecond=7200&q=${categories}&FAT_KCALMax=1000`);
    return res;
  };

  const { data, isFetching, isLoading, isError, error, isSuccess } = useQuery(["recipes", categories], dataRecipe, {
    staleTime: 10 * (60 * 1000),

    refetchInterval: 10 * (60 * 1000),
    cacheTime: 10 * (60 * 1000),
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
          <Slider {...settings}>
            {data?.feed?.map((recipe: any, idx: number) => (
              <CardFood recipe={recipe} key={idx} />
            ))}
          </Slider>
        )
      )}
    </>
  );
};

export default FavoriteFood;
