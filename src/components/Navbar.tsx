import { Box } from "@mui/material";
import { CgMenuLeft } from "react-icons/cg";
import { TbChefHat } from "react-icons/tb";
import { Link } from "react-router-dom";
import SearchBar from "./search/SearchBar";
import { useGlobalContext } from "../context/ContextAPI";
import { links } from "../utils/DummyData";
import { TLinks } from "../utils/TypeData";
import { CTypography } from "./";

const Navbar = () => {
  const { setToogleMenu, categoriesLinks, dark, setCategoriesLinks }: any = useGlobalContext();
  const handleToogleSidebar = () => {
    setToogleMenu((prev: boolean) => !prev);
  };

  return (
    <Box
      sx={{
        py: 1,
        mb: 2,
        px: 1,
        flexWrap: "wrap",
        display: "flex",
        position: "sticky",
        top: 0,
        justifyContent: { xs: "space-between", md: "space-around" },
        alignItems: "center",
        zIndex: 10,
      }}
      className=" bg-white dark:bg-zinc-800 text-black border-b dark:border-black/80 dark:text-white"
    >
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Box component="span" onClick={handleToogleSidebar} sx={{ borderRadius: "100%", p: 1, cursor: "pointer" }} className="bg-black/5 block md:hidden hover:drop-shadow-xl hover:bg-black/20">
          <CgMenuLeft className="text-2xl" />
        </Box>
        <Link to="/" className="flex items-center">
          <TbChefHat className="text-2xl text-black/80 dark:text-white/80 mx-1 md:mx-2" />
          <CTypography variant="h5" className=" tracking-wide sm:block hidden text-lime-600 font-extralight" classNameTwo="tracking-wider block sm:hidden text-lime-600 font-bold" descThree="RRecipe." desc="RichRecipe." />
        </Link>
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 2 }}>
        {links.map((link: TLinks, idx: number) => (
          <Link to={link.to} key={idx} onClick={() => setCategoriesLinks(link.name)}>
            <span className={`  capitalize tracking-wider hover:text-lime-600 ${link.name === categoriesLinks ? " border-b-2 border-lime-600" : "border-none"} `}>{link.name}</span>
          </Link>
        ))}
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
        <Box sx={{ ml: { xs: 4, sm: 4 }, mt: { xs: 2, sm: 0 } }}>
          <SearchBar />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
