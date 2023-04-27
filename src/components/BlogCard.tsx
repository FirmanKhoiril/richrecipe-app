import { INews, TnewsImage } from "../utils/TypeData";
import { Box } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CTypography from "./CTypography";
import Logo from "../assets/image/nice.png";
import moment from "moment";

const BlogCard = ({ detail }: INews) => {
  return (
    <a href={detail?.url} target="_blank" rel="noreferrer">
      <Box sx={{ width: 350, height: 300, display: "flex", flexDirection: "column" }} className=" dark:bg-white/5 bg-black/5 hover:shadow-[0px_2px_3px_1px] transition duration-300 hover:scale-105 rounded-t-lg">
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 1 }}>
          <Box sx={{ width: 200 }}>
            <CTypography desc={detail?.name} className="text-[15px]" />
          </Box>
          <LazyLoadImage effect="blur" alt={detail.name} src={detail?.image?.thumbnail?.contentUrl || Logo} className="w-[150px] h-[150px] rounded-md ml-[3px] object-cover" />
        </Box>
        <Box sx={{ p: 1, maxHeight: 100, display: "flex", flexDirection: "column" }} className=" space-y-1">
          <CTypography className="text-[12px] text-slate-700 dark:text-slate-300" desc={detail?.description.slice(0, 95)} />
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 1 }}>
            <CTypography className=" text-slate-500 dark:text-slate-400 text-[12px] " desc={moment(detail.datePublished).fromNow()} />
            {detail?.provider?.map((image: TnewsImage, idx: number) => (
              <LazyLoadImage effect="blur" key={idx} src={image?.image?.thumbnail.contentUrl || Logo} className="w-8 rounded-full h-8" alt={image?.name} />
            ))}
          </Box>
        </Box>
      </Box>
    </a>
  );
};

export default BlogCard;
