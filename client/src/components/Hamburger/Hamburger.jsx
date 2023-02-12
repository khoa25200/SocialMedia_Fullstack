import "./Hamburger.css";
import ProfileSide from "./../profileSide/ProfileSide";
import ProfileCard from "./../ProfileCard/ProfileCard";
import FollowersCard from "./../FollowersCard/FollowersCard";
const Hamburger = ({location}) => {
  return (
    <div className="hamburger-container">
      <div className="container nav-container">
        <input className="checkbox" type="checkbox" name id />
        <div className="hamburger-lines">
          <span className="line line1" />
          <span className="line line2" />
          <span className="line line3" />
        </div>
        <div className="menu-items">
          <div className="inforContainer">
            <ProfileCard location={location} />
            <FollowersCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
