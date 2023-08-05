import './Header.css'
import avatarLogo from '../../images/avatar.svg'
import wtwrLogo from '../../images/logo.svg'

const Header = () => {
  console.log("Header");

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={wtwrLogo} alt="logo" />
        </div>
        <div>Date</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button type="text">Add New Clothes</button>
        </div>
        <div>Name</div>
        <div>
          <img src={avatarLogo} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
