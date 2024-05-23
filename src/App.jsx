import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Article from "./components/Content/Content";
import Feed from "./components/Feed/Feed";

function App() {
  return (
    <>
      <Navigation />
      <div className="separator">
        <Article />
        <Feed />
      </div>
    </>
  );
}

export default App;
