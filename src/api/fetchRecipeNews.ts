import axios from "axios";

const BASE_URL = "https://bing-news-search1.p.rapidapi.com";

const options = {
  headers: {
    "content-type": "application/octet-stream",
    "X-BingApis-SDK": "true",
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_NEWS_APP,
    "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
  },
};

export const getNewsRecipe = async (url: string) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
