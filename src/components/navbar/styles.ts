import styled from "styled-components";
import Link from "next/link";

export const Header = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  padding: 1rem;
  background-color: black;
  height: 10vh;
  width: 100%;
  z-index: 99;
`;

export const Nav = styled.nav`
  width: 90%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .logo {
    width: 40px;
    height: 40px;
    margin-right: auto;
    img {
      width: 40px;
      height: 40px;
    }
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li`
  margin-left: 2rem;
  font-size: 1rem;

  &:nth-child(n + 5) {
    font-size: 1.7rem;
  }

  &:nth-child(5) {
    margin-left: 4rem;
  }

  &:nth-child(5) > :first-child:hover,
  &:nth-child(7) > :first-child:hover {
    color: #0070f3;
  }

  &:nth-child(6) > :first-child:hover {
    color: #e4405f;
  }

  &:nth-child(8) > :first-child:hover {
    color: black;
    background-color: #fefefe;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: none;
  }
`;

export const NavLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: #fefefe;
  transition: color 0.3s;

  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }
`;
