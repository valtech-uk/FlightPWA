import { SxProps } from "@mui/material";
import theme from "../theme";

const tabsEjStyles: SxProps<typeof theme> = [
  {
    button: {
      textTransform: "none",
      fontWeight: "400",
      fontFamily: "tondo",
      fontSize: "18px",
      padding: "0",
      letterSpacing: "0",
      minWidth: "10px",
    },
  },
  {
    div: {
      columnGap: "1rem",
    },
  },
];

export default tabsEjStyles;
