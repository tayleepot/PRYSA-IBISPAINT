import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 100,
      damping: 15,
      mass: 1
    }
  },
  exit: { 
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 }
  }
};

export default function Layout() {
  return (
    <Box 
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        background: '#FAFAFA', 
        width: '100vw',
        overflowX: 'hidden'
      }}
    >
      <Navbar />
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1,
          width: '100%'
        }}
      >
        <Box 
          component={motion.div}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          sx={{ 
            width: '100%',
            px: { xs: 2, sm: 4, md: 5 }, 
            mt: { xs: 3, md: 5 }, 
            mb: { xs: 3, md: 5 }
          }}
        >
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
