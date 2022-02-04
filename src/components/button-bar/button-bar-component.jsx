import { ButtonBar } from "./button-bar-styles";
import BlogButtonComponent from "../blog-button/blog-button-component";

function ButtonBarComponent() {
  return (
    <ButtonBar>
      <BlogButtonComponent text="Blog 1" />
      <BlogButtonComponent text="Blog 2" />
      <BlogButtonComponent text="Blog 3" />
    </ButtonBar>
  );
}

export default ButtonBarComponent;
