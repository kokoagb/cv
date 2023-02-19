import { createContext, ReactNode, useState } from "react";
import { createGlobalStyle, css } from "styled-components";

export enum ColorMode {
  light = "light",
  dark = "dark",
}

type ThemeContextProps = {
  colorMode: ColorMode;
  switchColorMode: () => void;
};

export const ThemeContext = createContext<ThemeContextProps>({
  colorMode: ColorMode.light,
  switchColorMode: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [colorMode, setColorMode] = useState<ColorMode>(getInitialColorMode());

  const switchColorMode = () => {
    const newColorMode =
      colorMode === ColorMode.light ? ColorMode.dark : ColorMode.light;
    setColorMode(newColorMode);
    window.localStorage.setItem("color-mode", newColorMode);
  };

  return (
    <ThemeContext.Provider value={{ colorMode, switchColorMode }}>
      <GlobalStyle colorMode={colorMode} />
      {children}
    </ThemeContext.Provider>
  );
};

const getInitialColorMode = () => {
  const persistedColorMode = window.localStorage.getItem("color-mode");

  if (persistedColorMode) {
    return persistedColorMode as ColorMode;
  }

  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  return prefersDarkMode ? ColorMode.dark : ColorMode.light;
};

const lightColors = css`
  --background-color: #ffffff;
  --text-color: #343434;
  --primary-color: #173c6f;
  --secondary-color: #e0e0e0ff;
`;

const darkColors = css`
  --background-color: #343434;
  --text-color: #e0e0e0ff;
  --primary-color: #5584c6;
  --secondary-color: #e0e0e0ff;
`;

const GlobalStyle = createGlobalStyle<{ colorMode: ColorMode }>`
  @media screen {
    :root {
      ${(props) =>
        props.colorMode === ColorMode.light ? lightColors : darkColors}
    }
  }

  @media print {
    :root {
      ${lightColors}
    }
  }

  body {
    color: var(--text-color);
    background-color: var(--background-color);
    transition: background-color 0.2s, color 0.2s;
  }
`;
