import React from "react";
import FollowersCard from "../FollowersCard/FollowersCard";
import InfoCard from "../InfoCard/InfoCard";
import LogoSearch from "../LogoSearch/LogoSearch";
import { useDevice } from "react-use-device";
const ProfileLeft = () => {
  const { isMOBILE } = useDevice();
  return (
      <div className="ProfileSide">
        <LogoSearch />
        <InfoCard />
        <FollowersCard />
      </div>
    )
};

export default ProfileLeft;
