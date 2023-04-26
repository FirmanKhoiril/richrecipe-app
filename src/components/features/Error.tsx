import { Box } from "@mui/material";
import React from "react";
import CTypography from "../CTypography";

const Error = ({ error }: any) => {
  console.log(error?.response?.statusText);

  return (
    <Box sx={{ my: 2 }}>
      <CTypography desc={error?.message} className="text-2xl error__text" />
      <CTypography desc={error?.response?.statusText} className="text-xl error__text" />
    </Box>
  );
};

export default Error;
