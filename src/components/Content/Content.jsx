import "./Content.css";
import useFetch from "../../utilities/hooks/useFetch";

function Blog() {
  const { data } = useFetch("src/assets/markdown/The_Last_Title.md");

  return (
    <div className="blog">
      <div className="blog-info">
        <div className="blog-info-title">
          Blog 1, This is a Placeholder Title
        </div>
        <span className="blog-info-topic">Topic 3</span>
        <span className="blog-info-writer">Writer 8</span>
        <span className="blog-info-date">28/09/99</span>
      </div>

      <div className="blog-text">{data}</div>
    </div>
  );
}

export default Blog;
