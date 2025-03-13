"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  padding: 1.25rem;
  background-color: unset;
`;

const Header = () => {
  const [isProjectHover, setProjectHover] = useState<boolean>(false);

  return (
    <header className="container">
      <StyledNavbar
        className="navbar"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link href="/">
            <Image src="/logo.png" width={260} height={46} alt="Logo" />
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <Link href="/" className="navbar-item">
              Resume
            </Link>
            <div
              className={`navbar-item has-dropdown ${
                isProjectHover ? "is-active" : ""
              }`}
              onMouseEnter={() => setProjectHover(true)}
              onMouseLeave={() => setProjectHover(false)}
            >
              <Link href="/projects" className="navbar-link">
                Projects
              </Link>
              <div className="navbar-dropdown is-boxed">
                <Link href="/projects" className="navbar-item">
                  Projects
                </Link>
                <Link href="/projects/quotagram" className="navbar-item">
                  Quotagram
                </Link>
                <Link href="/projects/virtual-reality" className="navbar-item">
                  Virtual Reality
                </Link>
                <Link href="/projects/motion-planning" className="navbar-item">
                  Motion Planning
                </Link>
              </div>
            </div>
            <Link href="/contact-me" className="navbar-item">
              Contact Me
            </Link>
          </div>
        </div>
      </StyledNavbar>
    </header>
  );
};

export default Header;
