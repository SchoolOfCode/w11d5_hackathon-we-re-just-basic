import { Post } from "./post-styles";
import BlogNameComponent from "../blog-name/blog-name-component";
import BlogTitleComponent from "../blog-title/blog-title-component";
import DateComponent from "../date/date-component";
import ContentComponent from "../content/content-component";
import blogs from "../../lib/data.js";

const { title, author, date, paragraphs } = blogs;

function PostComponent() {
  return (
    <Post>
      <BlogTitleComponent title={title} />
      <BlogNameComponent author={author} />
      <DateComponent date={date} />
      {paragraphs.map(({ id, content }) => {
        return <ContentComponent key={id} text={content} />;
      })}
    </Post>
  );
}

export default PostComponent;
