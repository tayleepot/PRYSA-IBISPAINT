import { Typography, Box, Container, Grid, Link, IconButton, Divider } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from "framer-motion";

export default function Footer() {
  const footerLinks = [
    { section: "Resources", links: [
      { name: "Documentation", url: "#" },
      { name: "Tutorials", url: "#" },
      { name: "Gallery", url: "/gallery" },
    ]},
    { section: "Community", links: [
      { name: "Forums", url: "#" },
      { name: "Support", url: "#" },
    ]},
    { section: "More", links: [
      { name: "About Us", url: "#" },
      { name: "Contact", url: "#" },
      { name: "Privacy Policy", url: "#" },
    ]}
  ];

  return (
    <Box 
      sx={{ 
        bgcolor: "#121212",
        color: "#FFFFFF",
        py: 6,
        mt: 'auto'
      }}
      component="footer"
    >
      <Box sx={{ width: '100%', px: { xs: 2, sm: 4, md: 5 } }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h6" color="white" gutterBottom sx={{ fontWeight: 700, letterSpacing: 1 }}>
                Prysa IbisPaint E-Manual
              </Typography>
              <Typography variant="body2" color="grey.400" sx={{ mb: 2, maxWidth: 280 }}>
                A comprehensive guide to mastering digital art through IbisPaint X, designed for students
                in the Special Program in the Arts.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                <IconButton 
                  size="small" 
                  sx={{ 
                    color: "#FFFFFF", 
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: 0, 
                    transition: "all 0.2s",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      transform: "translateY(-3px)"
                    }
                  }}
                >
                  <FacebookIcon fontSize="small" />
                </IconButton>
                <IconButton 
                  size="small" 
                  sx={{ 
                    color: "#FFFFFF", 
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: 0, 
                    transition: "all 0.2s",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      transform: "translateY(-3px)"
                    }
                  }}
                >
                  <TwitterIcon fontSize="small" />
                </IconButton>
                <IconButton 
                  size="small" 
                  sx={{ 
                    color: "#FFFFFF", 
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: 0, 
                    transition: "all 0.2s",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      transform: "translateY(-3px)"
                    }
                  }}
                >
                  <InstagramIcon fontSize="small" />
                </IconButton>
                <IconButton 
                  size="small" 
                  sx={{ 
                    color: "#FFFFFF", 
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: 0,
                    transition: "all 0.2s",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      transform: "translateY(-3px)"
                    }
                  }}
                >
                  <GitHubIcon fontSize="small" />
                </IconButton>
              </Box>
            </motion.div>
          </Grid>
          
          {footerLinks.map((section) => (
            <Grid item xs={12} sm={6} md={2.5} key={section.section}>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Typography 
                  variant="subtitle1" 
                  color="text.primary" 
                  gutterBottom
                  sx={{ fontWeight: 600 }}
                >
                  {section.section}
                </Typography>
                <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                  {section.links.map((link) => (
                    <Box component="li" key={link.name} sx={{ mb: 0.5 }}>
                      <Link
                        href={link.url}
                        variant="body2"
                        color="text.secondary"
                        sx={{ 
                          textDecoration: 'none',
                          '&:hover': { 
                            color: 'primary.main',
                            textDecoration: 'underline'
                          }
                        }}
                      >
                        {link.name}
                      </Link>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        
        <Divider sx={{ my: 4 }} />
        
        <Box 
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Prysa IbisPaint X E-Manual. All rights reserved.
          </Typography>
          <Box sx={{ mt: { xs: 2, sm: 0 } }}>
            <Typography variant="caption" color="text.secondary">
              Made for aspiring digital artists. MD TECHNOLOGIES.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
