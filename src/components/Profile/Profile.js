import React from "react";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({ clothingItems, onCreateModal, onSelectCard }) {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        clothingItems={clothingItems}
        onCreateModal={onCreateModal}
        onSelectCard={onSelectCard}
      />
    </div>
  );
}

export default Profile;
// const Profile = ({ onSelectCard }) => {
//   return (
//     <div className="profile">
//       <div className="profile__heading">
//         <div className="profile__heading_user">
//           <img src={avatar} alt="logo" className="profile__avatar-image" />
//           <div className="profile__username">Kaylie Ryan</div>
//         </div>
//         <div className="profile__heading_clothes">
//           <div className="profile__title">Your items</div>
//           <div className="profile__add_new">+ Add new</div>
//         </div>
//       </div>

//       <div className="profile__content">
//         <SideBar />
//         <ClothesSection
//           onSelectCard={onSelectCard}
//           className="clothingsection"
//         />
//       </div>
//     </div>
//   );
// };

// export default Profile;
