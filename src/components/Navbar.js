import React from "react";
import styled from "styled-components";
import { Switch } from "./ui";
import { useDarkModeValue } from "../context/DarkModeContext";

const Nav = styled.nav`
  display: flex;
  align-items: center;

  p {
    margin-right: 10px;
  }
`;

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkModeValue();

  return (
    <Nav>
      <p>Dark Mode</p>
      <Switch
        onChange={() => setDarkMode(!darkMode)}
        active={darkMode}
        id={"darkMode"}
      />
    </Nav>
  );
};

export default Navbar;
