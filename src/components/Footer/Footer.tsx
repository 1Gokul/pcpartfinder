import { footerContainerStyle, footerLinkStyle } from "./Footer.css";
import { footerLinks } from "./constants";

export function Footer() {
  return (
    <footer className={footerContainerStyle}>
      {footerLinks.map(({ title, href }) => (
        <a key={`footer-link-${title}`} href={href} className={footerLinkStyle}>
          {title}
        </a>
      ))}
    </footer>
  );
}
