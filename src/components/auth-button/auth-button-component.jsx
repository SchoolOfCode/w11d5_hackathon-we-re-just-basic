import { AuthButton } from "./auth-button-styles";

function AuthButtonComponent({ text, onClick }) {
  return <AuthButton onClick={onClick}>{text}</AuthButton>;
}

export default AuthButtonComponent;
