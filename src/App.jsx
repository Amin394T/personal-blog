import "./App.css";
import blogs from "./assets/markdown/.files_list";
import Navigation from "./components/Navigation/Navigation";
import Content from "./components/Content/Content";
import Feed from "./components/Feed/Feed";
import { useState } from "react";

function App() {
  const [currentBlog, setCurrentBlog] = useState(0);
  const blogData = blogs[currentBlog];
  console.log(currentBlog);
  return (
    <>
      <Navigation />
      <div className="separator">
        <Content blogData={blogData} />
        <Feed setBlog={setCurrentBlog} />
      </div>
    </>
  );
}

export default App;
