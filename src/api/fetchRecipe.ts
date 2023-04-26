import axios from "axios";

const options = {
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_RECIPE_APP,
    "X-RapidAPI-Host": "yummly2.p.rapidapi.com",
  },
};

const BASE_URL = "https://yummly2.p.rapidapi.com";

export const getRecipe = async (url: string) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
