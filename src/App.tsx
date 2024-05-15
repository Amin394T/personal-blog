
function App() {

  return (
    <>
      <div className="header">
        <img className="header-logo" src="" alt="LOGO" />
        <input className="header-search" type="text" placeholder=" Search ..." />
      </div>

      <div className="topics">
        <span>Topic 1</span>
        <span>Topic 2</span>
        <span>Topic 3</span>
        <span>Topic 4</span>
        <span>Topic 5</span>
        <span>Topic 6</span>
      </div>

      <div className="meta-separator">
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

        <div className="feed">
          <div className="feed-blog">
            <img className="feed-blog-thumbnail" src="" alt="THUMBNAIL" />
            <div className="feed-blog-title">Blog 2</div>
            <div className="feed-blog-writer">Writer 5</div>
            <div className="feed-blog-date">Yesterday</div>
          </div>
        </div>
      </div>

      <div className="footer">
      <input className="footer-newsletter" type="email" placeholder=" E-Mail" />
        <div className="footer-link">Follow Us!</div>
      </div>
    </>
  )
}

export default App
