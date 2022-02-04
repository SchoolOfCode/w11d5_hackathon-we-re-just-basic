import { ButtonBar } from "./button-bar-styles";
import BlogButtonComponent from "../blog-button/blog-button-component";

function ButtonBarComponent() {
  return (
    <ButtonBar>
      <BlogButtonComponent />
      <BlogButtonComponent />
      <BlogButtonComponent />
    </ButtonBar>
  );
}

export default ButtonBarComponent;
