import React, { useState } from "react";
import "./RightSide.css";

import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";
import NavIcons from "../NavIcons/NavIcons";
import { useDevice } from "react-use-device";
const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const { isMOBILE } = useDevice();
  return (
    !isMOBILE && (
      <div className="RightSide">
        <NavIcons />
        <TrendCard />
        <button
          className="button r-button"
          onClick={() => setModalOpened(true)}
        >
          Share
        </button>
        <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
      </div>
    )
  );
};

export default RightSide;
