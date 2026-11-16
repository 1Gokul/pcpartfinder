import { Link, useLocation, useSearchParams } from "wouter";
import { useState } from "react";
import {
  desktopNavLinkStyle,
  desktopNavStyle,
  headerContainerStyle,
  headerLogoStyle,
  headerWrapperStyle,
  mobileMenuButtonStyle,
  mobileNavContainerStyle,
  mobileNavLinkStyle,
} from "./Header.css";
import logo from "../../assets/logo.svg";
import { navLinks } from "./constants";
import { MenuIcon, XIcon } from "lucide-react";

export function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [location] = useLocation();
  const [searchParams] = useSearchParams();

  /**
   * The header becomes compact (logo removed, nav centered) on the /search page
   * if the user has not searched for anything yet
   */
  const isCompact = location === "/search" && !searchParams.get("query");

  const toggleMobileNav = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

  return (
    <header className={headerWrapperStyle}>
      <div className={headerContainerStyle[isCompact ? "compact" : "default"]}>
        {!isCompact && <img src={logo} className={headerLogoStyle} />}

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
          {isMobileNavOpen ? <XIcon width="2rem" /> : <MenuIcon width="2rem" />}
        </button>
      </div>

      <nav className={mobileNavContainerStyle[isMobileNavOpen ? "open" : "default"]}>
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
    </header>
  );
}
