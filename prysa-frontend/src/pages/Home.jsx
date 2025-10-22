import { Box, Typography, Container, Button, Divider, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BrushIcon from "@mui/icons-material/Brush";
import LayersIcon from "@mui/icons-material/Layers";
import PaletteIcon from "@mui/icons-material/Palette";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const featureVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  show: { 
    scale: 1, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 8
    }
  }
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div variants={featureVariants}>
      <Paper
        elevation={0}
        sx={{
          p: 3.5,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          borderRadius: 0, 
          transition: 'all 0.3s ease',
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(0,0,0,0.08)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mb: 3,
            width: 64,
            height: 64,
            borderRadius: 0, 
            background: "rgba(0,0,0,0.05)",
            color: '#000000',
          }}
        >
          {icon}
        </Box>
        <Typography 
          variant="h6" 
          gutterBottom 
          sx={{ 
            fontWeight: 500,
            letterSpacing: 1,
            fontSize: '1rem',
            textTransform: 'uppercase',
            mb: 1.5
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{
            color: '#555',
            fontFamily: 'serif',
            fontStyle: 'italic',
            lineHeight: 1.7,
            fontSize: '0.9rem'
          }}
        >
          {description}
        </Typography>
      </Paper>
    </motion.div>
  );
};

export default function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="show"
        sx={{
          background: '#FFFFFF',
          position: 'relative',
          py: { xs: 8, md: 12 },
          px: { xs: 2, md: 6 },
          mb: 12,
          borderBottom: '1px solid rgba(0,0,0,0.08)'
        }}
      >
        <Box sx={{ width: '95%', maxWidth: '1500px', mx: 'auto' }}>
          <motion.div variants={itemVariants}>
            <Typography
              variant="h1"
              textAlign="center"
              gutterBottom
              sx={{ 
                fontWeight: 700, 
                color: "#000000",
                fontSize: { xs: '2.5rem', md: '4rem' },
                textTransform: 'uppercase',
                letterSpacing: { xs: 2, md: 4 },
                mb: 4,
                textTransform: 'uppercase',
                letterSpacing: 3
              }}
            >
             Prysa IbisPaint E-Manual
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="h5"
              textAlign="center"
              gutterBottom
              sx={{ 
                color: "text.secondary", 
                mb: 4, 
                fontWeight: 400,
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              Improving Students' Digital Artistry
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Box 
              sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: 2, 
                mt: 5,
                mb: 3,
                flexWrap: 'wrap'
              }}
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                component={Link}
                to="/gallery"
                sx={{ 
                  px: 4, 
                  py: 1.5,
                  fontSize: '1.1rem'
                }}
              >
                Start Learning
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                component={Link}
                to="/tools"
                sx={{ 
                  px: 4, 
                  py: 1.5,
                  fontSize: '1.1rem'
                }}
              >
                Explore Tools
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ width: '95%', maxWidth: '2500px', mx: 'auto', px: { xs: 2, sm: 4 } }}>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <Typography 
              variant="body1" 
              paragraph 
              sx={{ 
                textAlign: "justify",
                fontSize: '1.05rem',
                lineHeight: 1.7
              }}
            >
              In the modern age of creativity, digital art has become an essential medium for expression, innovation, and learning. 
              This e-manual is designed to guide students—especially those under the Special Program in the Arts (SPA)—in mastering 
              IbisPaint X. This versatile digital illustration app combines artistic freedom with powerful creative tools.
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography 
              variant="body1" 
              paragraph 
              sx={{ 
                textAlign: "justify",
                fontSize: '1.05rem',
                lineHeight: 1.7
              }}
            >
              Developed as part of the research study 
              <strong> "Upskilling SPA Students' Artistic Expertise through IbisPaint: A Basis for a Comprehensive Manual"</strong>, 
              this resource aims to enhance students' digital artistry through structured lessons, interactive tutorials, and 
              practical exercises. Each module is created to help learners build their technical proficiency while nurturing 
              creativity, discipline, and artistic confidence.
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography 
              variant="body1" 
              paragraph 
              sx={{ 
                textAlign: "justify",
                fontSize: '1.05rem',
                lineHeight: 1.7,
                mb: 6
              }}
            >
              Here, you'll explore step-by-step tutorials on essential tools such as the Brush, Layer, Color, and Drawing Modes, 
              alongside creative tips and real-world applications. The e-manual encourages students to experiment, express cultural 
              identity, and develop professional digital art skills—bridging the gap between traditional art and modern technology.
            </Typography>
          </motion.div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <Typography 
              variant="h4" 
              textAlign="center" 
              gutterBottom 
              sx={{ 
                fontWeight: 600,
                mb: 4
              }}
            >
              Key Features
            </Typography>
          </motion.div>

          <Grid container spacing={3} sx={{ mb: 6 }}>
            <Grid item xs={12} md={4}>
              <FeatureCard 
                icon={<BrushIcon fontSize="small" />} 
                title="Drawing Tools" 
                description="Master digital brushes, pens, and other creative tools to express your artistic vision."
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureCard 
                icon={<LayersIcon fontSize="large" />} 
                title="Layer Techniques" 
                description="Learn to organize your artwork with layers for maximum flexibility and control."
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureCard 
                icon={<PaletteIcon fontSize="large" />} 
                title="Color Theory" 
                description="Understand color harmonies and palettes to create vibrant, impactful digital art."
              />
            </Grid>
          </Grid>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Box 
            sx={{ 
              textAlign: "center", 
              mt: 4, 
              py: 4,
              px: 3,
              borderRadius: 2,
              background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.light}15, ${theme.palette.secondary.light}15)`,
            }}
          >
            <motion.div variants={itemVariants}>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 3, 
                  fontStyle: "italic",
                  fontWeight: 500,
                  lineHeight: 1.8
                }}
              >
                Empower your creativity.<br />
                Enhance your skills.<br />
                Evolve as a digital artist.
              </Typography>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                component={Link}
                to="/gallery"
                sx={{ 
                  mt: 2,
                  px: 4, 
                  py: 1.5 
                }}
              >
                Get Started
              </Button>
            </motion.div>
          </Box>

          <Divider sx={{ my: 6 }} />

          <motion.div variants={itemVariants}>
            <Typography
              variant="subtitle1"
              textAlign="center"
              color="text.secondary"
              sx={{ 
                fontWeight: 500,
                fontStyle: "italic",
                opacity: 0.8
              }}
            >
              Welcome to a space where imagination meets innovation — the IbisPaint X E-Manual.
            </Typography>
          </motion.div>
        </motion.div>
      </Box>
    </Box>
  );
}