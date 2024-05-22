import "./Navigation.css";

function Navigation() {
  return (
    <>
      <div className="header">
        <img className="header-logo" src="" alt="LOGO" />
        <input className="header-search" type="text" placeholder=" Search ..."/>
      </div>

      <div className="topics">
        <span>Topic 1</span>
        <span>Topic 2</span>
        <span>Topic 3</span>
        <span>Topic 4</span>
        <span>Topic 5</span>
        <span>Topic 6</span>
      </div>
    </>
  );
}

export default Navigation;
