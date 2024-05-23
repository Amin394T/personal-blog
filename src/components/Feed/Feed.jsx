import "./Feed.css";

function Feed() {
  return (
    <div className="feed">
      <div className="feed-blog">
        <img className="feed-blog-thumbnail" src="" alt="THUMBNAIL" />
        <div className="feed-blog-title">Blog 1</div>
        <div className="feed-blog-writer">Writer 5</div>
        <div className="feed-blog-date">Yesterday</div>
      </div>

      <div className="feed-blog">
        <img className="feed-blog-thumbnail" src="" alt="THUMBNAIL" />
        <div className="feed-blog-title">Blog 2</div>
        <div className="feed-blog-writer">Writer 7</div>
        <div className="feed-blog-date">9 Months Ago</div>
      </div>

      <div className="feed-blog">
        <img className="feed-blog-thumbnail" src="" alt="THUMBNAIL" />
        <div className="feed-blog-title">Blog 3</div>
        <div className="feed-blog-writer">Writer 5</div>
        <div className="feed-blog-date">3 Years Ago</div>
      </div>
    </div>
  );
}

export default Feed;
