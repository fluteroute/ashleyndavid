import React from 'react';
import { ThemeProvider as ThemeUIProvider, useThemeUI } from 'theme-ui';
import { theme as ashleyNDavidTheme } from '../../../utils/theme';

export interface ThemeProviderProps {
  children?: React.ReactNode;
  theme?: typeof ashleyNDavidTheme;
}

export function ThemeProvider(props: ThemeProviderProps) {
  const { children, theme = ashleyNDavidTheme } = props;

  return <ThemeUIProvider theme={theme}>{children}</ThemeUIProvider>;
}

ThemeProvider.displayName = 'ThemeProvider';

export default ThemeProvider;

export const useTheme = () => useThemeUI() as unknown as { theme: typeof ashleyNDavidTheme };
