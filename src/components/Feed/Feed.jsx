import "./Feed.css";
import blogs from "../../assets/markdown/.files_list";

function Feed({ setCurrentBlog, setBlogDisplay, selectedTopic }) {

  const filteredBlogs = selectedTopic ? blogs.filter(blog => blog.topic === selectedTopic) : blogs;

  return (
    <div className="feed">
      {filteredBlogs.sort((a, b) => new Date(b.date) - new Date(a.date)).map((blog) => (

        <div className="feed-blog" onClick={() => {setCurrentBlog(blog.id); setBlogDisplay(true); }} key={blog.id}>
          <span className="feed-blog-topic">{blog.topic}</span>
          <img className="feed-blog-thumbnail" src={"src/assets/images/" + (blog.path || ".placeholder") + ".png"} />
          <div className="feed-blog-title">{blog.title}</div>
        </div>
      
      ))}
    </div>
  );
}

export default Feed;
