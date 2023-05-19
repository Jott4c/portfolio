import theme from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: 800px) {
    display: none;
  }

  .button-menu {
    color: ${theme.colors.white};
    border: none;
    background: transparent;
    font-size: 3rem;
  }
`;

export const NavList = styled.ul`
  width: 100vw;
  position: absolute;
  left: 0;
  top: 9.8vh;
  color: ${theme.colors.black};
  list-style: none;
  background-color: ${theme.colors.darkGray};
`;

export const NavItem = styled.li`
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  border-bottom: 1px solid #fefefe;

  &:last-child {
    gap: 30px;
    font-size: 2rem;
    a {
      text-decoration: none;
      color: ${theme.colors.white};
    }
  }

  &:not(:last-child) {
    a {
      width: 100%;
      text-align: center;
      text-decoration: none;
      color: ${theme.colors.lightGray};
    }
  }
`;
