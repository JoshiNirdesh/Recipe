import React from "react";
import chef from "../assets/chef.webp";
const Header = () => {
  return (
    <>
      <header>
        <img src={chef} alt="chef" />
        <h1>Chef</h1>
      </header>
    </>
  );
};

export default Header;
