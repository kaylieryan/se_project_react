import "./Header.css";
import avatarLogo from "../../images/avatar.svg";
import wtwrLogo from "../../images/logo.svg";

const currentDate = new Date().toLocaleDateString("default", {
  month: "long",
  day: "numeric",
});

const Header = ({ onCreateModal }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={wtwrLogo} alt="logo" />
        </div>
        <div>
          {currentDate}
        </div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button
            type="text"
            onClick={onCreateModal}
            className="header__add-clothes-button">
            + Add clothes
          </button>
        </div>
        <div>Terrence Tegegne</div>
        <div>
          <img src={avatarLogo} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
