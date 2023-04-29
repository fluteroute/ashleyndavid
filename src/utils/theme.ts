export const baseTheme = {
  colors: {
    darkenPrimary: "#E0630F",
    primary: "#f0690f",
    lightenPrimary: "#fc802d",
    darkenSecondary: "#91403A",
    secondary: "#A64942",
    lightenSecondary: "#C35850",
    backgroundSecondary: "#53354A",
    disabled: "#999593",
  },
  typography: {
    h1: {
      fontFamily:
        "Kdam Thmor Pro, Franklin Gothic Medium, Arial Narrow, Arial,sans-serif",
      fontSize: "44px",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "normal",
      letterSpacing: 1,
    },
    h2: {
      fontFamily:
        "Kdam Thmor Pro, Franklin Gothic Medium, Arial Narrow, Arial,sans-serif",
      fontSize: "38px",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "normal",
      letterSpacing: "1px",
    },
    body1: {
      fontFamily: "Arial, sans-serif",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
      letterSpacing: "1px",
    },
    body2: {
      fontFamily: "Arial, sans-serif",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
      letterSpacing: "1px",
    },
    button: {
      fontFamily: "Source Code Pro, Arial",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "normal",
      letterSpacing: "1px",
    },
    label: {
      fontFamily: "Source Code Pro, Arial",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "200",
      lineHeight: "normal",
      letterSpacing: "1px",
    },
    link: {
      fontFamily: "Source Code Pro, Arial",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
      letterSpacing: "1px",
    },
    navLink: {
      fontFamily: "Source Code Pro, Arial",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "normal",
      letterSpacing: "1px",
    },
  },
};

export const theme = {
  colors: {
    backgroundPrimary: "#1B1F3A",
    textPrimary: "#F5F5F5",
    lightenTextPrimary: "#FFFFFF",
    textSecondary: "#E5E4E4",
    ...baseTheme.colors,
  },
  text: baseTheme.typography,
  buttons: {
    disabled: {
      ...baseTheme.typography.button,
      borderRadius: 20,
      borderStyle: "solid",
      borderWidth: "0px",
      padding: "12px",
      color: "#F5F5F5",
      backgroundColor: "disabled",
      "&:hover": {
        backgroundColor: "disabled",
      },
      ":focus, :focus-visible": {
        outline: "none",
      },
    },
    disabledOutline: {
      ...baseTheme.typography.button,
      borderRadius: 20,
      borderStyle: "solid",
      backgroundColor: "transparent",
      borderWidth: "2px",
      padding: "10px",
      "&:hover": {
        borderColor: "disabled",
        color: "disabled",
      },
      "&:focus, :focus-visible": {
        borderColor: "disabled",
        color: "disabled",
        outline: "none",
      },
      borderColor: "disabled",
      color: "disabled",
    },
    primary: {
      ...baseTheme.typography.button,
      borderRadius: 20,
      borderStyle: "solid",
      borderWidth: "0px",
      padding: "12px",
      color: "#F5F5F5",
      backgroundColor: "primary",
      "&:hover": {
        backgroundImage: `linear-gradient(to left, ${
          baseTheme.colors.lightenPrimary
        }, ${"primary"})`,
        backgroundColor: baseTheme.colors.lightenPrimary,
        color: "#FFFFFF",
      },
      "&:focus, :focus-visible": {
        outline: "primary",
      },
    },
    primaryOutline: {
      ...baseTheme.typography.button,
      borderRadius: 20,
      borderStyle: "solid",
      backgroundColor: "transparent",
      borderWidth: "2px",
      padding: "10px",
      color: "#F5F5F5",
      "&:hover": {
        borderColor: baseTheme.colors.lightenPrimary,
        color: "#FFFFFF",
      },
      "&:focus, :focus-visible": {
        borderColor: baseTheme.colors.lightenPrimary,
        outline: "primary",
      },
      borderColor: "primary",
    },
    secondary: {
      ...baseTheme.typography.button,
      borderRadius: 20,
      borderStyle: "solid",
      borderWidth: "0px",
      padding: "12px",
      color: "#F5F5F5",
      backgroundColor: "secondary",
      "&:hover": {
        backgroundImage: `linear-gradient(to left, ${baseTheme.colors.lightenSecondary}, ${baseTheme.colors.secondary})`,
        backgroundColor: "lightenSecondary",
        color: "#FFFFFF",
      },
      "&:focus, :focus-visible": {
        outline: "secondary",
      },
    },
    secondaryOutline: {
      ...baseTheme.typography.button,
      borderRadius: 20,
      borderStyle: "solid",
      backgroundColor: "transparent",
      borderWidth: "2px",
      padding: "10px",
      color: "#F5F5F5",
      "&:hover": {
        borderColor: "lightenSecondary",
        color: "#FFFFFF",
      },
      "&:focus, :focus-visible": {
        borderColor: "lightenSecondary",
        outline: "secondary",
      },
      borderColor: "secondary",
    },
  },
  cards: {
    primary: {
      ...baseTheme.typography.body1,
      color: "#F5F5F5",
      backgroundColor: "backgroundSecondary",
      paddingTop: 46,
      paddingBottom: [80, 80, 80, 46],
      paddingRight: [18, 18, 18, 46],
      paddingLeft: [18, 18, 18, 46],
      borderRadius: 80,
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    compact: {
      ...baseTheme.typography.body1,
      color: "#F5F5F5",
      backgroundColor: "backgroundSecondary",
      padding: 1,
      borderRadius: 2,
      border: "1px solid",
      borderColor: "#F5F5F5",
    },
  },
  forms: {
    input: {
      ...baseTheme.typography.body1,
      background:
        "linear-gradient(#F5F5F5, #F5F5F5) bottom/ calc(100% - 2*3px) 3px no-repeat",
      backgroundColor: "transparent",
      borderColor: "transparent",
      borderStyle: "solid",
      borderWidth: "0px",
      color: "textPrimary",
      padding: "5px",
      margin: "5px",
      width: "100%",
      "&:focus, :focus-visible": {
        outline: "none",
        boxShadow: `0 7px 2px -2px ${baseTheme.colors.secondary}`,
      },
      "&[data-disabled]": {
        backgroundColor: "disabled",
        opacity: 0.5,
      },
    },
    textarea: {
      ...baseTheme.typography.body1,
      backgroundColor: "transparent",
      borderColor: "textPrimary",
      borderStyle: "solid",
      borderRadius: 8,
      borderWidth: "2px",
      color: "textPrimary",
      padding: "5px",
      margin: "5px",
      width: "100%",
      "&:focus, :focus-visible": {
        outline: "none",
        boxShadow: `0px 0px 2px 4px ${baseTheme.colors.secondary}`,
      },
      "&[data-disabled]": {
        backgroundColor: "disabled",
        opacity: 0.5,
      },
    },
    label: {
      ...baseTheme.typography.label,
      color: "textPrimary",
    },
    switch: {
      color: "primary",
    },
  },
  images: {
    default: {
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999,
    },
  },
  links: {
    nav: {
      ...baseTheme.typography.navLink,
      py: "6px",
      color: "textPrimary",
      textDecoration: "underline",
      "&:hover": {
        color: "#FFFFFF",
      },
      "&:focus, :focus-visible": {
        color: baseTheme.colors.lightenSecondary,
        outline: "none",
      },
    },
  },
  styles: {
    a: {
      ...baseTheme.typography.link,
      color: baseTheme.colors.primary,
      textDecoration: "underline",
      "&:hover": {
        color: baseTheme.colors.lightenPrimary,
      },
      "&:focus, :focus-visible": {
        color: baseTheme.colors.secondary,
        outline: "none",
      },
    },
    hr: {
      color: "textPrimary",
    },
  },
};
