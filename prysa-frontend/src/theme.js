import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { 
      main: "#000000", 
      light: "#333333",
      dark: "#000000",
    },
    secondary: { 
      main: "#BDA675", // Gold accent
      light: "#D4C28F",
      dark: "#8A7844", 
    },
    background: { 
      default: "#F8F8F8", // Light off-white for gallery feel
      paper: "#FFFFFF", 
    },
    text: {
      primary: "#121212",
      secondary: "#555555",
    },
    gallery: {
      accent1: "#E8E2D5", // Light warm beige
      accent2: "#BDA675", // Gold accent
      dark: "#121212",    // Almost black
      light: "#FAFAFA",   // Almost white
    }
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontWeight: 700,
      letterSpacing: 3,
      textTransform: "uppercase",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: 2,
      textTransform: "uppercase",
    },
    h3: {
      fontWeight: 600,
      letterSpacing: 2,
      textTransform: "uppercase",
    },
    h4: {
      fontWeight: 600,
      letterSpacing: 1.5,
      textTransform: "uppercase",
    },
    h5: {
      fontWeight: 500,
      letterSpacing: 1,
      textTransform: "uppercase",
    },
    h6: {
      fontWeight: 500,
      letterSpacing: 1,
    },
    body1: {
      lineHeight: 1.7,
    },
    body2: {
      lineHeight: 1.6,
      fontFamily: "serif",
    },
    button: {
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: 1,
    },
  },
  shape: {
    borderRadius: 0, // Square edges for museum aesthetic
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0, // Square buttons for gallery aesthetic
          boxShadow: "none",
          textTransform: "uppercase",
          padding: "10px 24px",
          fontWeight: 500,
          letterSpacing: "1px",
          transition: "all 0.25s ease-in-out",
          "&:hover": {
            backgroundColor: "#000",
            color: "#fff",
            transform: "translateY(-4px)",
            boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          },
        },
        contained: {
          boxShadow: "none",
          backgroundColor: "#000", // Black for primary buttons
          color: "#fff",
          "&:hover": {
            backgroundColor: "#222",
          }
        },
        outlined: {
          borderWidth: "1px",
          borderColor: "#000",
          color: "#000",
          "&:hover": {
            borderWidth: "1px",
            borderColor: "#000",
            backgroundColor: "#000",
            color: "#fff",
          }
        }
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0, // Square cards for formal gallery aesthetic
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          overflow: "hidden",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "24px",
          paddingRight: "24px",
          "@media (min-width: 600px)": {
            paddingLeft: "32px",
            paddingRight: "32px",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "rgba(0,0,0,0.08)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "0px",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: "0px",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
          }
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0, // Square edges for formal gallery aesthetic
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
          border: "1px solid rgba(0,0,0,0.08)",
          transition: "all 0.3s ease",
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          borderRadius: 0, // Square avatar for museum aesthetic
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "uppercase",
          fontWeight: 500,
          letterSpacing: 1,
          fontSize: "0.85rem",
          "&.Mui-selected": {
            color: "#000",
            fontWeight: 600,
          },
        },
      },
    },
  },
});

export default theme;
