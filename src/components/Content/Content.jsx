import "./Content.css";
import useFetch from "../../utilities/hooks/useFetch";
import Markdown from "react-markdown";

function Blog() {
  const { data, loading } = useFetch("src/assets/markdown/The_Last_Title.md");

  if (loading) return <div className="loadingSpinner">Loading ...</div>;

  const patternHead = /---([\s\S]+)---/;
  const patternInfo = /:(.*?[^:])?(?=$|\n)/g;

  const blogHead = data.match(patternHead)[1];
  const blogBody = data.replace(data.match(patternHead)[0], "");
  let blogInfo = blogHead.match(patternInfo);

  console.log(blogInfo);

  return (
    <div className="blog">
      <div className="blog-info">
        <div className="blog-info-title">{blogInfo[0]}</div>
        <span className="blog-info-topic">{blogInfo[1]}</span>
        <span className="blog-info-writer">{blogInfo[2]}</span>
        <span className="blog-info-date">{blogInfo[3]}</span>
      </div>

      <div className="blog-text">
        <Markdown>{blogBody}</Markdown>
      </div>
    </div>
  );
}

export default Blog;
