import React from "react";
import { ThemeProvider as ThemeUIProvider, useThemeUI } from "theme-ui";
import { theme as ashleyndavidTheme } from "../../utils/theme";

export interface ThemeProviderProps {
  children?: React.ReactNode;
  theme?: typeof ashleyndavidTheme;
}

export function ThemeProvider(props: ThemeProviderProps) {
  const { children, theme = ashleyndavidTheme } = props;

  return <ThemeUIProvider theme={theme}>{children}</ThemeUIProvider>;
}

ThemeProvider.displayName = "ThemeProvider";

export default ThemeProvider;

export const useTheme = () =>
  useThemeUI() as unknown as { theme: typeof ashleyndavidTheme };
