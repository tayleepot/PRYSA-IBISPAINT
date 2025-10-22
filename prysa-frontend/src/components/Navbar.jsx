import { useState } from "react";
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  Container,
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import ColorLensIcon from "@mui/icons-material/ColorLens";

const navItems = [
  { name: "Introduction", path: "/" },
  { name: "Gallery", path: "/gallery" },
  { name: "Tools", path: "/tools" },
  { name: "References", path: "/references" },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const NavButton = ({ name, path }) => {
    const isActive = location.pathname === path;
    return (
      <Button
        color="inherit"
        component={Link}
        to={path}
        sx={{
          mx: 2,
          position: 'relative',
          fontWeight: isActive ? 500 : 400,
          opacity: isActive ? 1 : 0.8,
          color: 'black',
          letterSpacing: 1,
          textTransform: 'uppercase',
          fontSize: '0.85rem',
          px: 0,
          py: 1.5,
          borderRadius: 4, 
          boxShadow: 'none',
          "&:hover": {
            backgroundColor: "transparent",
            opacity: 1,
            boxShadow: 'none',
            transform: 'none' 
          }
        }}
      >
        {name}
        {isActive && (
          <motion.div
            layoutId="navigation-underline"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 2,
              backgroundColor: "black"
            }}
          />
        )}
      </Button>
    );
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', py: 4 }}>
      <Typography 
        variant="h6" 
        sx={{ 
          fontWeight: 700, 
          letterSpacing: 1,
          textTransform: 'uppercase',
          mb: 3
        }}
      >
        Prysa IbisPaint Gallery
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <List sx={{ width: '100%' }}>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding sx={{ width: '100%' }}>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{ 
                textAlign: 'center',
                py: 2,
                justifyContent: 'center',
                borderRadius: 4, 
                backgroundColor: location.pathname === item.path ? 'rgba(0, 0, 0, 0.03)' : 'transparent',
              }}
            >
              <ListItemText 
                primary={item.name} 
                primaryTypographyProps={{
                  fontWeight: location.pathname === item.path ? 500 : 400,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  fontSize: '0.9rem'
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        background: '#FFFFFF',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        backdropFilter: 'blur(8px)',
        boxShadow: 'none',
        width: '100%',
      }}
    >
      <Box sx={{ width: '100%' }}>
        <Toolbar sx={{ px: { xs: 2, sm: 4, md: 5 }, py: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Typography
                variant="h5"
                component={Link}
                to="/"
                sx={{
                  color: 'black',
                  textDecoration: 'none',
                  fontWeight: 700,
                  letterSpacing: 1,
                  textTransform: 'uppercase',
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                }}
            >
              Prysa IbisPaint E-Manual
            </Typography>
            </motion.div>
          </Box>
          
          <Box sx={{ flexGrow: 1 }} />
          
          {isMobile ? (
            <IconButton
              color="inherit"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ 
                color: 'black',
                marginRight: 1,
                border: '1px solid rgba(0,0,0,0.1)',
                borderRadius: '50%', 
                p: 1,
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.03)',
                  transform: 'none' 
                }
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex'}}>
              {navItems.map((item) => (
                <NavButton key={item.name} name={item.name} path={item.path} />
              ))}
            </Box>
          )}
        </Toolbar>
      </Box>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': { 
            width: 280,
            boxSizing: 'border-box',
            boxShadow: '-4px 0 20px rgba(0,0,0,0.08)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}
