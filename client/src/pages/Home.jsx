import React from "react";
import PostSide from "../components/PostSide/PostSide";
import ProfileSide from "../components/profileSide/ProfileSide";
import RightSide from "../components/RightSide/RightSide";
import { useDevice } from "react-use-device";
import "./Home.css";
import NavIcons from "./../components/NavIcons/NavIcons";
const Home = () => {
  const { isMOBILE } = useDevice();
  return (
    <>
      <div className="Home">
        {!isMOBILE && <ProfileSide />}
        <PostSide />
        {!isMOBILE && <RightSide />}
      </div>
      {isMOBILE && (
        <div className="menu-bar">
          <NavIcons />
        </div>
      )}
    </>
  );
};

export default Home;
