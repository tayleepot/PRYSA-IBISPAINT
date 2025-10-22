import { Grid, Typography, Box, Container, Tabs, Tab, Chip, useTheme } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import ArtworkCard from "../components/ArtworkCard";
import artworks from "../data/artworks";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

export default function Gallery() {
  const [activeTab, setActiveTab] = useState(0);
  const theme = useTheme();

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const allArtworks = [...artworks.tiffani, ...artworks.wincel];
  
  return (
    <Box sx={{ width: '100%', py: 4 }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Typography 
            variant="h3" 
            component="h1"
            gutterBottom
            sx={{ 
              fontWeight: 700,
              textAlign: "center",
              mb: 2,
              textTransform: "uppercase",
              letterSpacing: 2,
              color: "#000000"
            }}
          >
            Exhibition Hall
          </Typography>

          <Typography 
            variant="body1"
            sx={{ 
              textAlign: "center", 
              mb: 8,
              maxWidth: 700,
              mx: "auto",
              fontFamily: "serif",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              fontStyle: "italic",
              color: "#333333"
            }}
          >
            A curated selection of contemporary digital works featuring innovative techniques 
            and distinctive perspectives within the IbisPaint medium, showcasing emerging talent.
          </Typography>
        </motion.div>

        <Box 
          sx={{ 
            width: '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            mb: 4 
          }}
        >
          <Tabs 
            value={activeTab} 
            onChange={handleTabChange}
            textColor="inherit"
            indicatorColor="secondary"
            sx={{
              '& .MuiTabs-indicator': {
                height: 2,
                borderRadius: 0,
                backgroundColor: '#000'
              },
            }}
          >
            <Tab 
              label="All Artworks" 
              sx={{ 
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '1rem'
              }} 
            />
            <Tab 
              label="By Tiffani" 
              sx={{ 
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '1rem'
              }} 
            />
            <Tab 
              label="By Wincel" 
              sx={{ 
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '1rem'
              }} 
            />
          </Tabs>
        </Box>

        <Box 
          sx={{ 
            mb: 4, 
            display: 'flex', 
            gap: 1, 
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          <Chip 
            label="Digital Painting" 
            sx={{ 
              borderRadius: 0,
              fontWeight: 500,
              background: `linear-gradient(90deg, ${theme.palette.primary.light}20, ${theme.palette.primary.main}20)`,
            }} 
          />
          <Chip 
            label="Character Design" 
            sx={{ 
              borderRadius: 0, 
              fontWeight: 500,
              background: `linear-gradient(90deg, ${theme.palette.secondary.light}20, ${theme.palette.secondary.main}20)`,
            }} 
          />
          <Chip 
            label="Illustrations" 
            sx={{ 
              borderRadius: 0, 
              fontWeight: 500,
              background: `linear-gradient(90deg, ${theme.palette.primary.light}20, ${theme.palette.secondary.light}20)`,
            }} 
          />
        </Box>

        <Box mt={4} component={motion.div} variants={containerVariants}>
          {activeTab === 0 && (
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: 'repeat(1, 1fr)',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(5, 1fr)'
                },
                gap: 4
              }}
            >
              {[...artworks.tiffani, ...artworks.wincel].map((art, index) => (
                <Box
                  key={index}
                  component={motion.div}
                  variants={itemVariants}
                  sx={{ display: 'flex' }}
                >
                  <ArtworkCard art={art} />
                </Box>
              ))}
            </Box>
          )}

          {activeTab === 1 && (
            <>
              <motion.div variants={itemVariants}>
                <Typography 
                  variant="h5" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 600,
                    mb: 3,
                    background: `linear-gradient(90deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block"
                  }}
                >
                  Artworks by Tiffani
                </Typography>
              </motion.div>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(5, 1fr)'
                  },
                  gap: 4
                }}
              >
                {artworks.tiffani.map((art, index) => (
                  <Box
                    key={index}
                    component={motion.div}
                    variants={itemVariants}
                    sx={{ display: 'flex' }}
                  >
                    <ArtworkCard art={art} />
                  </Box>
                ))}
              </Box>
            </>
          )}

          {activeTab === 2 && (
            <>
              <motion.div variants={itemVariants}>
                <Typography 
                  variant="h5" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 600,
                    mb: 3,
                    background: `linear-gradient(90deg, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block"
                  }}
                >
                  Artworks by Wincel
                </Typography>
              </motion.div>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(5, 1fr)'
                  },
                  gap: 4
                }}
              >
                {artworks.wincel.map((art, index) => (
                  <Box
                    key={index}
                    component={motion.div}
                    variants={itemVariants}
                    sx={{ display: 'flex' }}
                  >
                    <ArtworkCard art={art} />
                  </Box>
                ))}
              </Box>
            </>
          )}
        </Box>
      </motion.div>
    </Box>
  );
}
