import React from "react";
import { Info, InfoEyebrow, InfoSubtitle, InfoTitle } from "../info-basic";
import { getInfoN04Styles } from "./InfoN04.styles";

export function InfoN04() {
  return (
    <Info variant="n04" useStyles={getInfoN04Styles}>
      <InfoEyebrow>
        <div className="inline-flex items-center">
          <img className='w-6 invert mx-1' src="/img/play-circle.svg" alt="" />
          <h2 className="text-[#DC143C] font-medium">Lucifer: S7</h2>
        </div>
      </InfoEyebrow>
      <InfoTitle>The Forgotten Prophecy</InfoTitle>
      <InfoSubtitle>
        The Dawnless King, reunite with his allies to uncover the truth behind the cosmic anomaly.
      </InfoSubtitle>
    </Info>
  );
}
