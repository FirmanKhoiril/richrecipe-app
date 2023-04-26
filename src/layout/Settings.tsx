import { BsFillSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { useGlobalContext } from "../context/ContextAPI";
import { Box } from "@mui/material";
import { FiSettings } from "react-icons/fi";
import { AiOutlineClose, AiOutlineArrowUp } from "react-icons/ai";

const Settings = () => {
  const { toogleSetting, setToogleSetting, dark, setDark }: any = useGlobalContext();
  return (
    <Box sx={{ position: "fixed", bottom: 20, right: 20, zIndex: 10 }}>
      <span
        onClick={() => setToogleSetting((prev: boolean) => !prev)}
        className="flex bg-black/50 hover:bg-black/70 h-[45px] w-[45px] cursor-pointer dark:bg-white/30 dark:hover:bg-white/40 rounded-full hover:drop-shadow-xl text-2xl justify-center mt-[10px] items-center"
      >
        {toogleSetting ? <AiOutlineClose className=" text-white/90" /> : <FiSettings className=" text-white/90" />}
      </span>
      {toogleSetting && (
        <Box sx={{ position: "absolute", px: "6px", py: 1, bottom: 54, ml: "3px" }} className=" bg-black/50 rounded-[5px] hover:bg-black/70 dark:bg-white/30 dark:hover:bg-white/40">
          <span className="flex justify-center cursor-pointer my-1 items-center flex-col space-y-5 text-2xl">
            <AiOutlineArrowUp className=" text-white" />
            {dark ? <BsFillSunFill onClick={() => setDark((prev: boolean) => !prev)} className=" text-yellow-400" /> : <MdDarkMode onClick={() => setDark((prev: boolean) => !prev)} className=" text-orange-400" />}
          </span>
        </Box>
      )}
    </Box>
  );
};

export default Settings;
