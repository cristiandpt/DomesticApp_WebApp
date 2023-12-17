import React from "react";
import { useRouter } from "next/router";

const RenderLogo = () => {
  const logoStyle = {
    width: "250px", // Adjust the width as needed
    height: "auto",
    maxWidth: "100%", // Ensures the logo scales with its container
    height: "auto", // Maintains the aspect ratio
    cursor: "pointer", // Add a pointer cursor to indicate it's clickable
  };

  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <img
      src="../LogoDA.png"
      alt="Logo"
      className="mr-3"
      style={logoStyle}
      onClick={handleClick}
    />
  );
};

export default RenderLogo;
