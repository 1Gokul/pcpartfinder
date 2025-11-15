import {
  desktopNavLinkStyle,
  desktopNavStyle,
  headerContainerStyle,
  headerLogoStyle,
} from "./Header.css";
import logo from "../../assets/logo.svg";
import { navLinks } from "./constants";

export function Header() {
  return (
    <div className={headerContainerStyle}>
      <img src={logo} className={headerLogoStyle} />

      {/* Desktop nav menu */}

      <div className={desktopNavStyle}>
        {navLinks.map(({ title }) => (
          <button className={desktopNavLinkStyle}>{title}</button>
        ))}
      </div>
    </div>
  );
}
