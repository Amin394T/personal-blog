import "./App.css";
import blogs from "./assets/markdown/.files_list";
import Navigation from "./components/Navigation/Navigation";
import Content from "./components/Content/Content";
import Feed from "./components/Feed/Feed";
import { useState } from "react";

function App() {
  const [currentBlog, setCurrentBlog] = useState(0);
  const [blogDisplay, setBlogDisplay] = useState(false);

  return (
    <>
      <Navigation {...{ setBlogDisplay }} />
      <div className="separator">
        {blogDisplay && <Content blogData={blogs[currentBlog]} />}
        <Feed {...{ setCurrentBlog, setBlogDisplay }} />
      </div>
    </>
  );
}

export default App;
