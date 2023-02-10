import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { followUser, unfollowUser } from "../../actions/UserAction";
import messenger from "../../img/messenger.png";
import { createChat } from "../../api/ChatRequests";
const User = ({ person }) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch();

  const [following, setFollowing] = useState(
    person.followers.includes(user._id)
  );
  const handleFollow = () => {
    following
      ? dispatch(unfollowUser(person._id, user))
      : dispatch(followUser(person._id, user));
    setFollowing((prev) => !prev);
  };
  const handleSentMessage = async () => {
    try {
      const dataNewMessage = {
        senderId: user._id,
        receiverId: person._id
      }
      console.log(dataNewMessage)
      const { data } = await createChat(dataNewMessage);
      // window.location.href = '/chat'
      console.log('succes=>new', data)
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div className="follower">
      <div>
        <img
          src={
            person.profilePicture
              ? publicFolder + person.profilePicture
              : publicFolder + "defaultProfile.png"
          }
          alt="profile"
          className="followerImage"
        />
        <div className="name">
          <span>{person.firstname}</span>
          <span>@{person.username}</span>
          <span></span>
        </div>
      </div>
      <button
        className={
          following ? "button fc-button UnfollowButton" : "button fc-button"
        }
        onClick={handleFollow}
      >
        {following ? "Unfollow" : "Follow"}
      </button>
      <div className="sentMessage" onClick={handleSentMessage}>
        <img src={messenger} width="20px" alt="" />
      </div>
    </div>
  );
};

export default User;
