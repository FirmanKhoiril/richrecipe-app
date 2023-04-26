import { Typography } from "@mui/material";
import { ICustomTypography } from "../utils/TypeData";

const CTypography = ({ desc, className, onClick, variant, descTwo, classNameTwo, descThree }: ICustomTypography) => (
  <Typography variant={variant}>
    <span className={className} onClick={onClick}>
      {desc} {descTwo}
    </span>
    {descThree && <span className={classNameTwo}>{descThree}</span>}
  </Typography>
);

export default CTypography;
