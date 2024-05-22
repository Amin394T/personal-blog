import "./Content.css";

function Blog() {
  return (
    <div className="blog">
      <div className="blog-info">
        <div className="blog-info-title">Blog 1</div>
        <span className="blog-info-topic">Topic 3</span>
        <span className="blog-info-writer">Writer 8</span>
        <span className="blog-info-date">Today</span>
      </div>

      <div className="blog-text">
        <p>Hello, Word!</p>
        <p>XYZ</p>
      </div>
    </div>
  );
}

export default Blog;
