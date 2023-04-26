import { Box } from "@mui/material";
import { Triangle } from "react-loader-spinner";

const Loading = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", py: 2 }}>
      <Triangle height="80" width="80" color="#22c55e" ariaLabel="triangle-loading" wrapperStyle={{}} visible={true} />
    </Box>
  );
};

export default Loading;
