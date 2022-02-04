import { NavBar } from "./nav-bar-styles";
import HeaderComponent from "../header/header-component";
import AuthButtonComponent from "../auth-button/auth-button-component";

function NavBarComponent({ onLogIn, onLogOut, authenticated }) {
  return (
    <NavBar>
      <HeaderComponent />
      {authenticated && (
        <AuthButtonComponent text="Log Out" onClick={onLogOut} />
      )}
      {!authenticated && (
        <AuthButtonComponent text="Log In" onClick={onLogIn} />
      )}
    </NavBar>
  );
}

export default NavBarComponent;
