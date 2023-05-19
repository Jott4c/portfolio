import styled from "styled-components";
import theme from "@/styles/theme";

export const Header = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  padding: 1rem;
  background-color: ${theme.colors.black};
  height: 10vh;
  width: 100%;
  z-index: 99;
  font-weight: 300;
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
  @media screen and (max-width: 800px) {
    display: none;
  }

  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li`
  margin-left: 2rem;
  font-size: 1rem;

  a {
    text-decoration: none;
    color: ${theme.colors.lightGray};
    transition: color 0.4s;

    &:hover {
      color: ${theme.houver.light};
    }
  }

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
`;
