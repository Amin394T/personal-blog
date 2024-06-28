import "./Feed.css";
import blogs from "../../assets/markdown/.files_list"

function Feed({setBlog}) {
  return (
    <div className="feed">
      {blogs.map((blog) => 
        <div className="feed-blog" onClick={() => setBlog(blog.id)} key={blog.id} >
          <img className="feed-blog-thumbnail" src="https://placehold.co/600x400" alt="THUMBNAIL" />
          <div className="feed-blog-title">{blog.title}</div>
          {/* <div className="feed-blog-topic">{blog.topic}</div> */}
        </div>
      )}
    </div>
  );
}

export default Feed;
