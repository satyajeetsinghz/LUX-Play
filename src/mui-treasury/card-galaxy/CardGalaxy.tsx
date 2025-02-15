import React from "react";
import { episodes } from "../../components/episodes";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CSSObject, styled } from "@mui/material/styles";
import {
  Info,
  InfoEyebrow,
  InfoSlotStyles,
  InfoSubtitle,
  InfoTitle,
} from "../info-basic";

const useStyles = (): CSSObject & Partial<InfoSlotStyles> => {
  return {
    eyebrow: {
      // color: "rgba(255, 255, 255, 0.92)",
      fontFamily: '"Spartan", san-serif',
      lineHeight: 1.4,
      fontSize: "1.0625rem",
      letterSpacing: "1px",
      textTransform: "initial",
      marginBottom: 0,
    },
    title: {
      fontSize: "1.25rem",
      fontWeight: "bold" as const,
      lineHeight: 1.2,
    },
    subtitle: {
      lineHeight: 1.5,
      "&:last-child": {
        marginTop: "1rem",
      },
    },
  };
};

const StyledCard = styled(Card)({
  borderRadius: "1rem",
  boxShadow: "none",
  position: "relative",
  maxWidth: 220,
  minHeight: 230,
  "&:after": {
    content: '""',
    display: "block",
    position: "absolute",
    width: "100%",
    height: "64%",
    bottom: 0,
    zIndex: 1,
    background: "linear-gradient(to top, #000, rgba(0,0,0,0))",
  },
});

const StyledCardMedia = styled(CardMedia)({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 0,
  backgroundPosition: "top",
});

const Content = styled("div")(({ theme }) => ({
  padding: theme.spacing(3, 2),
  position: "absolute",
  zIndex: 2,
  bottom: 0,
  width: "100%",
}));

export function CardGalaxy() {
  return (
    <div className="relative group">
      <div className="flex sm:grid sm:grid-cols-1 lg:grid-cols-6 gap-0 overflow-x-auto scrollbar-hide">
        {episodes.map((episode) => (
          <div key={episode.id} className="min-w-[60vw] sm:min-w-0">
            <StyledCard>
              <a href={episode.link}>
                <StyledCardMedia image={episode.image} />
                <Content>
                  <Info>
                    <InfoTitle className={episode.titleColor}>{episode.title}</InfoTitle>
                    <InfoSubtitle className={episode.subtitleColor}>{episode.subtitle}</InfoSubtitle>
                  </Info>
                </Content>
              </a>
            </StyledCard>
          </div>
        ))}
      </div>
    </div>
  );
}
