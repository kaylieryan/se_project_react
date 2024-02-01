import React from "react";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({
  clothingItems,
  onCreateModal,
  onSelectCard,
  loggedIn,
  onCardLike,
  onEditProfileModal,
  onLogout,
}) {
  return (
    <div className="profile">
      <SideBar onEditProfileModal={onEditProfileModal} onLogOut={onLogout} />
      <ClothesSection
        clothingItems={clothingItems}
        onCreateModal={onCreateModal}
        onSelectCard={onSelectCard}
        loggedIn={loggedIn}
        onCardLike={onCardLike}
      />
    </div>
  );
}

export default Profile;
