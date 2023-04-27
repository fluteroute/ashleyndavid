import React from "react";
import { ThemeProvider as ThemeUIProvider, useThemeUI } from "theme-ui";
import { theme } from "../../utils/theme";

export interface ThemeProviderProps {
  children?: React.ReactNode;
  theme?: typeof theme;
}

export function ThemeProvider(props: ThemeProviderProps) {
  const { children, theme } = props;

  return <ThemeUIProvider theme={theme || {}}>{children}</ThemeUIProvider>;
}

ThemeProvider.displayName = "ThemeProvider";

export default ThemeProvider;

export const useTheme = () =>
  useThemeUI() as unknown as { theme: typeof theme };
