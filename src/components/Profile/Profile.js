import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import ClothingSection from "../ClothingSection/ClothingSection";

import "./Profile.css";

const Profile = ({ onSelectCard }) => {
  return (
    <div className="profile">
      <div className="profile__heading">
        <div className="profile__heading-user">
          <img src="" alt="logo" className="profile__avatar-image" />
          <div className="profile__profile_name">Kaylie Ryan</div>
        </div>
        <div className="profile__heading_clothes">
          <div className="profile__title">Your Items</div>
          <div className="profile__add_clothes">+ Add new</div>
        </div>
      </div>

      <div className="profile__content">
        <Sidebar />
        <ClothingSection
          onSelectCard={onSelectCard}
          className="clothingsection"
        />
      </div>
    </div>
  );
};

export default Profile;
