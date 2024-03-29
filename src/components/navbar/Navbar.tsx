import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { Header, Nav, NavItem, NavList } from "./styles";
import Image from "next/image";
import logo from "../../assets/images/icon.png";
import Link from "next/link";
import { NextPage } from "next";
import Menu from "../menuMobile/MenuMobile";

const Navbar: NextPage = () => {
  return (
    <Header>
      <Nav>
        <Link href="#about" className="logo">
          <Image src={logo} alt="logo" />
        </Link>
        <Menu />
        <NavList>
          <NavItem>
            <Link href="#about">About</Link>
          </NavItem>
          <NavItem>
            <Link href="#projects">Projects</Link>
          </NavItem>
          <NavItem>
            <Link href="#skills">Skills</Link>
          </NavItem>
          <NavItem>
            <Link href="#contact">Contact</Link>
          </NavItem>
          <NavItem>
            <Link href="https://www.facebook.com/Jrcunha123" target="_blank">
              <FaFacebookF />
            </Link>
          </NavItem>
          <NavItem>
            <Link
              href="https://www.instagram.com/juniior.alencar/"
              target="_blank"
            >
              <FaInstagram />
            </Link>
          </NavItem>
          <NavItem>
            <Link
              href="https://www.linkedin.com/in/junior-alencar-b961b1236/"
              target="_blank"
            >
              <GrLinkedinOption />
            </Link>
          </NavItem>
          <NavItem>
            <Link href="https://github.com/Jott4c" target="_blank">
              <FaGithub />
            </Link>
          </NavItem>
        </NavList>
      </Nav>
    </Header>
  );
};

export default Navbar;
