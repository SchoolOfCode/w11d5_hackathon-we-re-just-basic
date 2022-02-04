import { Post } from "./post-styles";
import posts from '../lib/data'
import BlogNameComponent from '../blog-name/blog-name-component'
import BlogTitleComponent from '../blog-title/blog-title-component'
import DateComponent from '../date/date-component'
import ContentComponent from '../content/content-component'

import {title, author, date, paragraphs} = posts

function PostComponent() {
  return <Post>
<BlogTitleComponent title={title} />
<BlogNameComponent author={author}/>
<DateComponent date={date}/>
{paragraphs.map(({id, content})=>{
  return <ContentComponent key={id} text={content} />
})}
  </Post>;
}

export default PostComponent;
