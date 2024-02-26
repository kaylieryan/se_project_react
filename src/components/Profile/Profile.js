import React from "react";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({
  clothingItems,
  onCreateModal,
  onSelectCard,
  isLoggedIn,
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
        isLoggedIn={isLoggedIn}
        onCardLike={onCardLike}
      />
    </div>
  );
}

export default Profile;
