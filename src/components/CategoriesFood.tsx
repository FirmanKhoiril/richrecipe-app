import { Box } from "@mui/material";
import { foods } from "../utils/DummyData";
import { TName } from "../utils/TypeData";
import { useGlobalContext } from "../context/ContextAPI";
import { CTypography } from "./";
import { useNavigate } from "react-router-dom";

const CategoriesFood = () => {
  const { setCategories, categories }: any = useGlobalContext();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/category");
  };
  return (
    <Box sx={{ height: 100, display: "flex", gap: 2, my: 5, justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
      {foods?.map((food: TName, idx: number) => (
        <Box component="button" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} key={idx} onClick={() => setCategories(food?.food)}>
          <span className={`text-xl ${food.food === categories ? "text-lime-500" : "text-black dark:text-white/80"}`}>{food?.icon}</span>
          <span className={`py-1 px-2 tracking-wider ${food.food === categories ? "text-lime-600" : " text-slate-400"} `}>{food?.name}</span>
        </Box>
      ))}
      <CTypography desc="See More..." onClick={handleClick} className="p-2 shadow-md text-sm cursor-pointer bg-lime-500 hover:bg-lime-500/90 rounded-lg" />
    </Box>
  );
};

export default CategoriesFood;
