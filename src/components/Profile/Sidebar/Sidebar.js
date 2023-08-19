import React from "react";
import avatar from "../../../images/avatar.svg";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={avatar} alt="avatar" className="sidebar__avatar-image" />
      <p className="sidebar__avatar-name">Kaylie Ryan</p>
    </div>
  );
};

export default Sidebar;
