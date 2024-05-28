import { Link } from "react-router-dom";

const HeaderNav = (props) => {
  //inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "thin solid lightgrey",
    padding: "8px",
    width: "90%",
    margin: "auto",
  };

  return (
    <header>
      <h1>Just for testing</h1>
      <nav style={navStyle}>
        <Link to="/hotels">
          <div>HOTEL INDEX</div>
        </Link>
        <Link to="/test/profile">
          <div>TEST PROFILE</div>
        </Link>
      </nav>
    </header>
  );
};

export default HeaderNav;
