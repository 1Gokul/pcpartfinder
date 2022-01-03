import { IoSunnySharp, IoMoonSharp } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { css, SerializedStyles } from "@emotion/react";
import { Flex } from "./LayoutComponents";

interface themeTogglerProps {
  styles: SerializedStyles;
}

const ThemeToggler: React.FC<themeTogglerProps> = ({ styles }) => {
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <Flex
      css={css`
        align-items: center;
        text-transform: capitalize;
        border-right: 1px solid var(--color-border-gray);
        ${styles}
      `}
      onClick={toggleTheme}
    >
      {theme === "light" ? <IoSunnySharp /> : <IoMoonSharp />}
    </Flex>
  );
};

export default ThemeToggler;
