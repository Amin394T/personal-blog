import "./Feed.css";
import blogs from "../../assets/markdown/.files_list";

function Feed({ setBlog, setDisplay }) {

  return (
    <div className="feed">
      {blogs.map((blog) => (
        <div className="feed-blog" onClick={() => {setBlog(blog.id); setDisplay(true); }} key={blog.id}>
          <img className="feed-blog-thumbnail" src={"src/assets/images/" + (blog.path || ".placeholder") + ".png"} />
          <div className="feed-blog-title">{blog.title}</div>
          {/* <div className="feed-blog-topic">{blog.topic}</div> */}
        </div>
      ))}
    </div>
  );
}

export default Feed;
