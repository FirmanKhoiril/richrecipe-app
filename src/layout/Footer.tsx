import { Box } from "@mui/material";
import { links } from "../utils/DummyData";
import { Link } from "react-router-dom";
import { TLinks } from "../utils/TypeData";
import { useGlobalContext } from "../context/ContextAPI";
import { CTypography } from "../components";

const Footer = () => {
  const { categoriesLinks, setCategoriesLinks }: any = useGlobalContext();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <Box sx={{ py: 10, display: "flex", flexDirection: { xs: "column", sm: "row" }, px: { xs: 4, sm: 0 }, justifyContent: "space-around", alignItems: { xs: "start", sm: "center" }, gap: 2 }} className=" bg-slate-100/80 dark:bg-zinc-800">
      <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
        <CTypography className=" text-sm text-slate-600 dark:text-slate-400" desc="@Copyright 2023. RichRecipe" />
        {links.map((link: TLinks, idx: number) => (
          <Link key={idx} to={link.to} onClick={() => setCategoriesLinks(link.name)} className={`capitalize tracking-wider hover:text-lime-600 ${link.name === categoriesLinks ? "text-lime-600" : " dark:text-white"}`}>
            {link.name}
          </Link>
        ))}
      </Box>
      <form onSubmit={handleSubmit} className=" flex flex-col space-y-2">
        <Box>
          <CTypography desc="Get new recipes everyday !" className=" text-xl text-lime-600 tracking-wide" />
          <CTypography desc="Just with send a email." className=" text-xl text-lime-600 tracking-wide" />
        </Box>

        <input
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          placeholder="Your email address"
          className=" h-10 py-2 w-60  md:w-80 bg-black/40 focus:bg-white placeholder-white focus:placeholder:text-black/60 dark:focus:bg-black/20 flex dark:bg-black/30 px-4 outline-none focus:border border-lime-600 peer"
        />
      </form>
    </Box>
  );
};

export default Footer;
