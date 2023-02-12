import React from "react";
import PostSide from "../../components/PostSide/PostSide";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import RightSide from "../../components/RightSide/RightSide";
import { useDevice } from "react-use-device";
import "./Profile.css";
import Hamburger from "./../../components/Hamburger/Hamburger";
import LogoSearch from "./../../components/LogoSearch/LogoSearch";
import NavIcons from "./../../components/NavIcons/NavIcons";
const Profile = () => {
  const { isMOBILE, isDESKTOP } = useDevice();
  return (
    <>
      {isDESKTOP ? (
        <div className="Profile">
          <ProfileLeft />
          <div className="Profile-center">
            <ProfileCard location="profilePage" />
            <PostSide />
          </div>
          <RightSide />
        </div>
      ) : (
        <div className="Home mobile tablet">
          <div className="mobile-header">
            <Hamburger location="profilePage"/>
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

export default Profile;
