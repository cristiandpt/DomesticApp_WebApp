import * as React from "react";
import Navbar from "./Navbar"; // Adjust the path accordingly
import RenderLogo from "./RenderLogo"; // Import your logo component

const Header = ({ userType }) => {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Navbar userType={userType} />
      <RenderLogo />
    </header>
  );
};

export default Header;
