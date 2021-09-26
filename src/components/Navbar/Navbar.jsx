import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { menuData } from "../../data/menuData";
import "./Navbar.css";
import { setFont, media } from "../../utils/styles";

const NavLink = css`
  color: #666;
  display: flex;
  font-weight: bold;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: black;
  }
`;
const Logo = styled(Link)`
  ${NavLink}
  h3 {
    ${setFont.slanted}
    background:red;
    margin-right: 3rem;
  }

  ${media.tablet`
 h3{
     font-size:1.8rem;
     margin-right:0;
     margin-left:2rem;
 }
`}

  ${media.desktop`
h3{
     font-size:2.2rem;
     margin-right:0;
     margin-left:2rem;
 }
`}
`;

const MenuBars = styled(FaBars)`
  display: none;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #666;
    font-size: 2.5rem;
    margin-top: 1.5rem;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  /* margin-right:-48px; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
  text-transform:uppercase;
  padding-bottom: 10px;

  /* margin:1rem 0; */
  &:hover {
    border-bottom: 1px solid white;
  }
`;

const Navbar = ({ toggle, className }) => {
  const [navbar, setNavbar] = useState(false);
  const [data, setData] = useState(menuData);

  const changeBackground = () => {
    if (window.scrollY >= 530) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={navbar ? "active-nav" : null}>
      <Logo to="/">
        {/* <img src={logo} alt="logo bonitas" /> */}
        <h3>Stanislav Kehayov</h3>
      </Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {data.map((item) => {
          return (
            <NavMenuLinks to={item.link} key={item.id}>
              {item.title}
            </NavMenuLinks>
          );
        })}
      </NavMenu>
    </nav>
  );
};

export default Navbar;
