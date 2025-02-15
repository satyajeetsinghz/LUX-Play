import { Theme } from "@mui/material/styles";
import { CSSObject, fontSize, fontWeight } from "@mui/system";
import { InfoSlotStyles } from "../info-basic";

export const getInfoN04Styles = (
  arg: Theme | { theme: Theme }
): CSSObject & Partial<InfoSlotStyles> => {
  const { palette } = "theme" in arg ? arg.theme : arg;
  return {
    eyebrow: {
      display: "block",
      textAlign: "center",
      color: "#fff",
      letterSpacing: "2px",
      fontSize: 14,
      marginTop: 12,
    },
    title: {
      textAlign: "center",
      color: "#fff",
      fontSize: 32,
      lineHeight: 2,
      fontWeight: 350,
      fontFamily:
        // eslint-disable-next-line max-len
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      marginBottom: "0.72em",
      position: "relative",
      "@media (max-width: 640px)": {
        fontSize: 26,
      },
      "&:after": {
        content: '""',
        width: 36,
        height: 2,
        backgroundColor: "#DC143C",
        display: "block",
        margin: "8px auto",
        borderRadius: 2,
      },
    },
    subtitle: {
      textAlign: "center",
      fontSize: 14,
      "@media (max-width: 640px)": {
        fontSize: 12,
      },
      color: palette.mode === "dark" ? "#999" : "#fff",
      lineHeight: 1.75,
      width: "88%",
      margin: "0 auto",
    },
  };
};
