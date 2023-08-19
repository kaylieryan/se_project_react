import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import ClothingSection from "./ClothingSection/ClothingSection";
import "./Profile.css";

const Profile = ({ onSelectCard, onCreateModal, clothingItems }) => {
  return (
    <div className="profile">
      <Sidebar />
      <ClothingSection
        onSelectCard={onSelectCard}
        onCreateModal={onCreateModal}
        clothingItems={clothingItems}
      />
    </div>
  );
};

export default Profile;