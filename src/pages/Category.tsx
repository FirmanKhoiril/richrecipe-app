import { Box } from "@mui/material";
import React from "react";
import { categoriesLink } from "../utils/DummyData";
import { TName } from "../utils/TypeData";
import { useGlobalContext } from "../context/ContextAPI";
import { CTypography, SelectedCategory } from "../components";

const Category = () => {
  const { allCategories, setAllCategories }: any = useGlobalContext();

  return (
    <Box sx={{ my: 5 }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {categoriesLink.map((category: TName, idx: number) => (
          <Box component="button" onClick={() => setAllCategories(category.food)} key={idx} sx={{ my: 1 }}>
            <span
              className={`py-2 rounded-sm shadow-[0px_2px_2px_1px] hover:bg-lime-500 dark:hover:bg-lime-500 dark:shadow-white/10 border cursor-pointer ${
                category.food === allCategories ? "bg-lime-500 text-black" : "bg-white  dark:bg-black/5"
              } transition duration-200 border-lime-500  px-4`}
            >
              {category.name}
            </span>
          </Box>
        ))}
      </Box>
      <Box sx={{ my: 10, position: "relative" }}>
        <CTypography desc={allCategories} className="capitalize tracking-wide" variant="h4" />
        <SelectedCategory />
      </Box>
    </Box>
  );
};

export default Category;
