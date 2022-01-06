import React, { useEffect, useState } from "react";
import { IoSunnySharp, IoMoonSharp } from "react-icons/io5";
import { css, SerializedStyles } from "@emotion/react";

import { Flex, Icon } from "./StyledComponents";

type themeTogglerProps = {
  styles: SerializedStyles;
};

const ThemeToggler = ({ styles }: themeTogglerProps) => {
  const [theme, setTheme] = useState<string | undefined>(
    document.body.dataset.theme
  );

  useEffect(() => {
    document.body.dataset.theme = theme;
    // Set the theme in local storage.
    window.localStorage.setItem("theme", theme ?? "dark");
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <Flex
      css={css`
        align-items: center;
        text-transform: capitalize;
        ${styles}
      `}
      onClick={toggleTheme}
    >
      {theme}
      <Icon margin="0 10px">
        {theme === "light" ? <IoSunnySharp /> : <IoMoonSharp />}
      </Icon>
    </Flex>
  );
};

export default ThemeToggler;
