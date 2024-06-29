import "./App.css";
import blogs from "./assets/markdown/.files_list";
import Navigation from "./components/Navigation/Navigation";
import Content from "./components/Content/Content";
import Feed from "./components/Feed/Feed";
import { useState } from "react";

function App() {
  const [currentBlog, setCurrentBlog] = useState(0);
  const [contentDisplay, setContentDisplay] = useState(false);
  const blogData = blogs[currentBlog];

  return (
    <>
      <Navigation setDisplay={setContentDisplay} />
      <div className="separator">
        {contentDisplay && <Content blogData={blogData} />}
        <Feed setBlog={setCurrentBlog} setDisplay={setContentDisplay} />
      </div>
    </>
  );
}

export default App;
