import { Box } from "@mui/material";
import React from "react";
import Background from "../assets/image/tests.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CTypography } from "../components";

const HeroSection = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <LazyLoadImage src={Background} className="w-full sm:px-1 rounded-lg cursor-auto h-[400px] brightness-[0.6]" />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }} className=" dark:text-white/90">
        <CTypography variant="h3" className=" static font-extrabold text-4xl sm:text-[50px] sm:absolute top-[90px] left-10 sm:text-white/90" desc="Looking For Recipes." />
        <CTypography
          variant="body2"
          className=" static sm:absolute w-auto  dark:text-white/70 sm:w-[500px] text-lg text-black/70 sm:text-[21px]  top-[150px] left-10 sm:text-white/70"
          desc="From the simple to elaborate recipes, you can find them all here"
        />
      </Box>

      <Box sx={{ position: { sm: "absolute", xs: "static" }, mt: { xs: 4, sm: 0 }, top: 230, left: 40, display: "flex", gap: 4 }}>
        <Box>
          <CTypography desc="300k+" className="hero__section__rate" />
          <CTypography desc="Recipe" className="hero__section__text" />
        </Box>
        <Box>
          <CTypography desc="30k+" className="hero__section__rate" />
          <CTypography desc="User" className="hero__section__text" />
        </Box>
        <Box>
          <CTypography desc="20+" className="hero__section__rate" />
          <CTypography desc="Features" className="hero__section__text" />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
