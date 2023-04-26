import { INutrition } from "../../utils/TypeData";
import { Box } from "@mui/material";
import { CTypography } from "../";

const Tags = ({ nutrition }: INutrition) => {
  return (
    <Box sx={{ display: "flex", py: 2 }}>
      <CTypography variant="body1" className=" tracking-wide p-3 bg-lime-600 text-white rounded-2xl cursor-pointer hover:bg-lime-500 hover:drop-shadow-xl transition duration-300 shadow-sm" desc={nutrition?.["display-name"]} />
    </Box>
  );
};

export default Tags;
