import React from "react";

import { Nunito_Sans } from "next/font/google";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { Header, Nav, NavItem, NavLink, NavList } from "./styles";
import Image from "next/image";
import logo from "../../assets/images/icon.png";
import Link from "next/link";
import { NextPage } from "next";

const nunito = Nunito_Sans({ weight: "300", subsets: ["latin"] });

const Navbar: NextPage = () => {
  return (
    <Header className={nunito.className}>
      <Nav>
        <Link href="#about" className="logo">
          <Image src={logo} alt="logo" />
        </Link>
        <NavList>
          <NavItem>
            <NavLink href="#about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#projects">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#skills">Skills</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact">Contact</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.facebook.com/Jrcunha123" target="_blank">
              <FaFacebookF />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="https://www.instagram.com/juniior.alencar/"
              target="_blank"
            >
              <FaInstagram />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="https://www.linkedin.com/in/junior-alencar-b961b1236/"
              target="_blank"
            >
              <GrLinkedinOption />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/Jott4c" target="_blank">
              <FaGithub />
            </NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </Header>
  );
};

export default Navbar;
