import { useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { Container, NavList, NavItem } from "./styles";
import { CgMenuGridO } from "react-icons/cg";
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";

const MenuMobile: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <button className="button-menu" onClick={handleMenu}>
        <CgMenuGridO />
      </button>

      {isOpen && (
        <NavList onClick={handleMenu}>
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
            <Link
              href="https://www.instagram.com/juniior.alencar/"
              target="_blank"
            >
              <FaInstagram />
            </Link>

            <Link
              href="https://www.linkedin.com/in/junior-alencar-b961b1236/"
              target="_blank"
            >
              <GrLinkedinOption />
            </Link>

            <Link href="https://github.com/Jott4c" target="_blank">
              <FaGithub />
            </Link>
          </NavItem>
        </NavList>
      )}
    </Container>
  );
};

export default MenuMobile;
