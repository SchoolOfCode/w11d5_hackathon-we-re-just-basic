import { LandingContext } from "./landing-context-styles";
import LandingImageComponent from "../landing-image/landing-image-component";
import LandingTextComponent from "../landing-text/landing-text-component";
import AuthButtonComponent from "../auth-button/auth-button-component";

function LandingContextComponent({ onLogIn }) {
  return (
    <LandingContext>
      <LandingImageComponent />
      <LandingTextComponent />
      <AuthButtonComponent onClick={onLogIn} text="Log In" />
    </LandingContext>
  );
}

export default LandingContextComponent;
