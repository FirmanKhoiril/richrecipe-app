import { INews, TnewsImage } from "../utils/TypeData";
import { Box } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CTypography from "./CTypography";
import Logo from "../assets/image/nice.png";
import moment from "moment";

const BlogCard = ({ detail }: INews) => {
  return (
    <a href={detail?.url} target="_blank" rel="noreferrer">
      <Box sx={{ width: 250, height: 300, display: "flex", flexDirection: "column" }} className=" dark:bg-white/5 bg-black/5 hover:shadow-[0px_2px_3px_1px] transition duration-300 hover:scale-105 rounded-t-lg">
        <LazyLoadImage effect="blur" alt={detail.name} src={detail?.image?.thumbnail?.contentUrl || Logo} className="w-full h-[150px] rounded-t-lg" />
        <Box sx={{ p: 1, maxHeight: 100 }} className=" space-y-1">
          <CTypography className="text-[13px]" desc={detail?.description.slice(0, 95)} />
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", py: 1 }}>
            <CTypography className="text-slate-500 text-[12px] dark:text-slate-600" desc={moment(detail.datePublished).fromNow()} />
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
