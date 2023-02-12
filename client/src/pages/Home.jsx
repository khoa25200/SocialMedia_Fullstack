import React from "react";
import PostSide from "../components/PostSide/PostSide";
import ProfileSide from "../components/profileSide/ProfileSide";
import RightSide from "../components/RightSide/RightSide";
import { useDevice } from "react-use-device";
import "./Home.css";
import NavIcons from "./../components/NavIcons/NavIcons";
import LogoSearch from "./../components/LogoSearch/LogoSearch";
import Hamburger from "./../components/Hamburger/Hamburger";
const Home = () => {
  const { isMOBILE, isDESKTOP } = useDevice();
  return (
    <>
      {isDESKTOP ? (
        <div className="Home desktop">
          <ProfileSide />
          <PostSide />
          <RightSide />
        </div>
      ) : (
        <div className="Home mobile tablet">
          <div className="mobile-header">
            <Hamburger location="homepage" />
            <LogoSearch />
          </div>
          <PostSide />
          <div className="menu-bar">
            <NavIcons />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
