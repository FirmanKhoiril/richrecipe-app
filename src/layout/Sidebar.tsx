import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { useGlobalContext } from "../context/ContextAPI";
import { CTypography } from "../components";
import { Link } from "react-router-dom";
import SearchBar from "../components/search/SearchBar";
import { links } from "../utils/DummyData";
import { TbChefHat } from "react-icons/tb";
import { TLinks } from "../utils/TypeData";

const Sidebar = () => {
  const { setToogleMenu, setCategoriesLinks, categoriesLinks, dark }: any = useGlobalContext();

  const handleToogleMenu = () => setToogleMenu((prev: boolean) => !prev);
  return (
    <motion.div
      whileInView={{ x: [-300, 0] }}
      transition={{ duration: 0.6 }}
      className="fixed md:hidden top-0 bg-white dark:bg-zinc-800 z-20 dark:text-white  w-[300px] md:w-[400px] h-screen border-r dark:border-black/80 lg:-ml-0 -ml-4 sm:-ml-6 mt-1 flex flex-col"
    >
      <Box component="span" sx={{ mt: 2, ml: 1 }} onClick={handleToogleMenu}>
        <AiOutlineClose className="text-2xl cursor-pointer" />
      </Box>
      <Link to="/" className="flex items-center justify-center">
        <TbChefHat className="text-2xl text-black/80 dark:text-white/80 mx-1 md:mx-2" />{" "}
        <CTypography variant="h5" desc="RichRecipe" descThree="RRecipe" className="tracking-widest sm:block hidden text-lime-600 font-extralight" classNameTwo="tracking-wider block sm:hidden text-lime-600 font-bold" />
      </Link>

      <Box sx={{ mt: 2 }}>
        <SearchBar />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", m: 2, p: 2, gap: 4 }}>
        {links.map((link: TLinks, idx: number) => (
          <Link to={link.to} key={idx} onClick={() => setCategoriesLinks(link.name)}>
            <span className={` capitalize  tracking-wider ${link.name === categoriesLinks ? "border-b border-lime-500" : "border-none"} hover:text-lime-500`}>{link.name}</span>
          </Link>
        ))}
      </Box>
    </motion.div>
  );
};

export default Sidebar;
