import "./Content.css";
import useFetch from "../../utilities/hooks/useFetch";
import Markdown from "react-markdown";

function Blog() {
  const { data, loading } = useFetch("src/assets/markdown/The_Last_Title.md");

  if (loading) return <div className="loadingSpinner">Loading ...</div>;

  const pattern = /---([\s\S]+)---/;
  const blogHead = data.match(pattern)[1].json();
  const blogBody = data.replace(data.match(pattern)[0], "");
console.log(blogHead)
  return (
    <div className="blog">
      <div className="blog-info">
        <div className="blog-info-title">This is a Placeholder Title</div>
        <span className="blog-info-topic">Topic 3</span>
        <span className="blog-info-writer">Writer 8</span>
        <span className="blog-info-date">28/09/99</span>
      </div>

      <div className="blog-text">
        <Markdown>{blogBody}</Markdown>
      </div>
    </div>
  );
}

export default Blog;
