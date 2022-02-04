import { App } from "./app-styles";
import NavBarComponent from "../nav-bar/nav-bar-component";
import LandingContextComponent from "../landing-context/landing-context-component";
import PostComponent from "../post/post-component";
import { useAuth0 } from "@auth0/auth0-react";
import ButtonBarComponent from "../button-bar/button-bar-component";

function AppComponent() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <App>
      <NavBarComponent
        onLogIn={() => loginWithRedirect()}
        onLogOut={() => logout({ returnTo: window.location.origin })}
        authenticated={isAuthenticated}
      />
      {!isAuthenticated && (
        <LandingContextComponent onLogIn={() => loginWithRedirect()} />
      )}
      {isAuthenticated && <ButtonBarComponent />}
      {isAuthenticated && (
        <PostComponent
          onLogOut={() => logout({ returnTo: window.location.origin })}
        />
      )}
    </App>
  );
}

export default AppComponent;
