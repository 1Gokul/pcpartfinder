import { Link } from "wouter";
import { useState } from "react";
import {
  desktopNavLinkStyle,
  desktopNavStyle,
  hamburgerIconStyle,
  hamburgerLineStyle,
  headerContainerStyle,
  headerLogoStyle,
  headerWrapperStyle,
  mobileMenuButtonStyle,
  mobileNavContainerStyle,
  mobileNavLinkStyle,
  mobileNavOpenStyle,
} from "./Header.css";
import logo from "../../assets/logo.svg";
import { navLinks } from "./constants";

export function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

  return (
    <div className={headerWrapperStyle}>
      <div className={headerContainerStyle}>
        <img src={logo} className={headerLogoStyle} />

        <div className={desktopNavStyle}>
          {navLinks.map(({ title, route }) => (
            <Link key={`navlink-${title}`} href={route} className={desktopNavLinkStyle}>
              {title}
            </Link>
          ))}
        </div>

        <button
          className={mobileMenuButtonStyle}
          onClick={toggleMobileNav}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileNavOpen}
        >
          <span className={hamburgerIconStyle}>
            <span className={hamburgerLineStyle} />
            <span className={hamburgerLineStyle} />
            <span className={hamburgerLineStyle} />
          </span>
        </button>
      </div>

      <nav className={`${mobileNavContainerStyle} ${isMobileNavOpen ? mobileNavOpenStyle : ""}`}>
        {navLinks.map(({ title, route }) => (
          <Link
            key={`mobile-navlink-${title}`}
            href={route}
            className={mobileNavLinkStyle}
            onClick={() => setIsMobileNavOpen(false)}
          >
            {title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
