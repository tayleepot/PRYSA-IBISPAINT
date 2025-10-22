import {
  Box,
  Typography,
  Container,
  Divider,
  List,
  ListItem,
  Link,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Tabs,
  Tab,
  Chip,
  Paper,
  ButtonBase,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import { videoReferences, officialReferences, bookReferences } from "../data/references";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ArticleIcon from "@mui/icons-material/Article";

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

export default function References() {
  const [tabValue, setTabValue] = useState(0);
  
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const renderVideoReferences = () => {
    return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, width: '100%' }}>
      {videoReferences.map((ref, index) => (
        <Box 
          key={index} 
          component={motion.div} 
          variants={itemVariants}
          sx={{ 
            width: { xs: '100%', sm: 'calc(50% - 24px)', md: 'calc(33.333% - 24px)' },
            minWidth: '280px'
          }}
        >
          <Card 
            sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 0, 
              overflow: 'visible',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(0,0,0,0.08)',
              backgroundColor: '#FFFFFF',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
              }
            }}
          >
            <Box sx={{ position: 'relative' }}>
              <CardMedia
                component="img"
                height={180}
                image={ref.thumbnail || 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1000&auto=format&fit=crop'}
                alt={ref.title}
                sx={{
                  transition: 'transform 0.5s ease',
                  objectFit: 'cover',
                  backgroundColor: '#f5f5f5',
                  padding: '0',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />
              <Box 
                sx={{ 
                  position: 'absolute', 
                  top: 8, 
                  right: 8, 
                  bgcolor: 'rgba(0,0,0,0.5)',
                  borderRadius: 0, 
                  p: 0.5
                }}
              >
                <YouTubeIcon color="error" />
              </Box>
            </Box>
            <CardContent sx={{ 
              flexGrow: 1, 
              p: 3, 
              display: 'flex', 
              flexDirection: 'column',
              height: '12rem' 
            }}>
              <Box sx={{ mb: 1.5 }}>
                <Chip 
                  label={ref.category} 
                  size="small" 
                  sx={{ 
                    height: 24, 
                    fontSize: '0.7rem',
                    fontWeight: 500,
                    borderRadius: 0, 
                    backgroundColor: "rgba(0,0,0,0.05)",
                    color: "text.primary"
                  }}
                />
              </Box>
              <Typography 
                variant="body2" 
                sx={{ 
                  mb: 1.5, 
                  fontWeight: 500,
                  letterSpacing: 0.5,
                  fontSize: '0.85rem',
                  lineHeight: 1.4,
                  height: '4.2em',
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 3, 
                  flexGrow: 1
                }}
              >
                {ref.title}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 'auto' }}>
                <IconButton 
                  component="a" 
                  href={ref.url} 
                  target="_blank" 
                  size="small"
                  sx={{
                    color: 'black',
                    backgroundColor: 'rgba(0,0,0,0.05)',
                    borderRadius: 0,
                    '&:hover': {
                      backgroundColor: 'rgba(0,0,0,0.1)',
                    }
                  }}
                >
                  <OpenInNewIcon fontSize="small" />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
    );
  };
  
  const renderDocumentation = () => {
    return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, width: '100%' }}>
      {officialReferences.map((ref, index) => (
        <Box 
          key={index} 
          component={motion.div} 
          variants={itemVariants}
          sx={{ 
            flexBasis: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.3% - 16px)' },
            minWidth: '280px',
            flexGrow: 1
          }}
        >
          <Card 
            sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 0, 
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(0,0,0,0.08)',
              backgroundColor: '#FFFFFF',
              position: 'relative',
              zIndex: 2,
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
              }
            }}
          >
            <Box sx={{ position: 'relative' }}>
              <CardMedia
                component="img"
                height={180}
                image={ref.thumbnail || 'https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?q=80&w=1000&auto=format&fit=crop'}
                alt={ref.title}
                sx={{
                  transition: 'transform 0.5s ease',
                  objectFit: 'cover',
                  backgroundColor: '#f5f5f5',
                  padding: '0',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />
              <Box 
                sx={{ 
                  position: 'absolute', 
                  top: 8, 
                  right: 8, 
                  bgcolor: 'rgba(0,0,0,0.5)',
                  borderRadius: 0, 
                  p: 0.5,
                  zIndex: 3
                }}
              >
                <ArticleIcon color="primary" />
              </Box>
            </Box>
            <CardContent sx={{ 
              flexGrow: 1, 
              p: 3, 
              display: 'flex', 
              flexDirection: 'column',
              height: '12rem'
            }}>
              <Box sx={{ mb: 1.5 }}>
                <Chip 
                  label={ref.category} 
                  size="small" 
                  sx={{ 
                    height: 24, 
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    borderRadius: 0, 
                    backgroundColor: (theme) => theme.palette.secondary.main + '20',
                    color: 'secondary.dark'
                  }}
                />
              </Box>
              
              <Typography 
                variant="body2" 
                sx={{ 
                  mb: 1.5, 
                  fontWeight: 500,
                  letterSpacing: 0.5,
                  fontSize: '0.85rem',
                  lineHeight: 1.4,
                  height: '4.2em', 
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 3, 
                  flexGrow: 1
                }}
              >
                {ref.title}
              </Typography>
              
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 'auto' }}>
                <IconButton 
                  component="a" 
                  href={ref.url} 
                  target="_blank" 
                  size="small"
                  sx={{
                    color: 'black',
                    backgroundColor: 'rgba(0,0,0,0.05)',
                    borderRadius: 0, 
                    '&:hover': {
                      backgroundColor: 'rgba(0,0,0,0.1)',
                    }
                  }}
                >
                  <OpenInNewIcon fontSize="small" />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
    );
  };

  const renderBooks = () => {
    return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, width: '100%' }}>
      {bookReferences.map((ref, index) => (
        <Box 
          key={index} 
          component={motion.div} 
          variants={itemVariants}
          sx={{ 
            flexBasis: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.3% - 16px)' },
            minWidth: '280px',
            flexGrow: 1
          }}
        >
          <Card 
            sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 0, 
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(0,0,0,0.08)',
              backgroundColor: '#FFFFFF',
              position: 'relative',
              zIndex: 2,
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
              }
            }}
          >
            <Box sx={{ position: 'relative' }}>
              <CardMedia
                component="img"
                height={180}
                image={ref.thumbnail || 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000&auto=format&fit=crop'}
                alt={ref.title}
                sx={{
                  transition: 'transform 0.5s ease',
                  objectFit: 'cover',
                  backgroundColor: '#f5f5f5',
                  padding: '0',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />
              <Box 
                sx={{ 
                  position: 'absolute', 
                  top: 8, 
                  right: 8, 
                  bgcolor: 'rgba(0,0,0,0.5)',
                  borderRadius: 0, 
                  p: 0.5,
                  zIndex: 3
                }}
              >
                <MenuBookIcon color="secondary" />
              </Box>
            </Box>
            <CardContent sx={{ 
              flexGrow: 1, 
              p: 3, 
              display: 'flex', 
              flexDirection: 'column',
              height: '12rem' 
            }}>
              <Box sx={{ mb: 1.5 }}>
                <Chip 
                  label={ref.category} 
                  size="small" 
                  sx={{ 
                    height: 24, 
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    borderRadius: 0, 
                    backgroundColor: (theme) => theme.palette.primary.main + '20',
                    color: 'primary.main'
                  }}
                />
              </Box>
              <Typography 
                variant="body2" 
                sx={{ 
                  mb: 1.5, 
                  fontWeight: 500,
                  letterSpacing: 0.5,
                  fontSize: '0.85rem',
                  lineHeight: 1.4,
                  height: '4.2em', 
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 3,
                  flexGrow: 1
                }}
              >
                {ref.title}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 'auto' }}>
                {ref.url && (
                  <IconButton 
                    component="a" 
                    href={ref.url} 
                    target="_blank" 
                    size="small"
                    sx={{
                      color: 'black',
                      backgroundColor: 'rgba(0,0,0,0.05)',
                      borderRadius: 0, 
                      '&:hover': {
                        backgroundColor: 'rgba(0,0,0,0.1)',
                      }
                    }}
                  >
                    <OpenInNewIcon fontSize="small" />
                  </IconButton>
                )}
              </Box>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
    );
  };

  return (
    <Box sx={{ 
      width: '100%', 
      py: 4, 
      overflow: 'visible', 
      backgroundColor: '#fff', 
      minHeight: '100vh',
      display: 'block'
    }}>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ width: '100%', position: 'relative' }}
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
            Curated Resources
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
            A scholarly collection of materials that contextualize and illuminate the artistic 
            techniques and philosophical approaches to digital expression through the IbisPaint medium.
          </Typography>
        </motion.div>

        <Box sx={{ mb: 6, position: 'relative', zIndex: 10 }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange} 
            centered
            textColor="inherit"
            indicatorColor="primary"
            sx={{
              '& .MuiTabs-indicator': {
                height: 3,
                borderRadius: '3px'
              },
              '& .MuiTab-root': {
                opacity: 1,
                color: 'rgba(0,0,0,0.7)',
                '&.Mui-selected': {
                  color: 'primary.main',
                  fontWeight: 700
                }
              }
            }}
          >
            <Tab 
              label="Video Tutorials" 
              icon={<YouTubeIcon />}
              iconPosition="start"
              sx={{ 
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '1rem'
              }}
            />
            <Tab 
              label="Official Documentation" 
              icon={<ArticleIcon />}
              iconPosition="start"
              sx={{ 
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '1rem'
              }}
            />
            <Tab 
              label="Book References" 
              icon={<MenuBookIcon />}
              iconPosition="start"
              sx={{ 
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '1rem'
              }}
            />
          </Tabs>
        </Box>

        <Box sx={{ py: 2, width: '100%', position: 'relative', zIndex: 1 }}>
          <Container maxWidth="lg" sx={{ display: 'block' }}>
                <Box sx={{ width: '100%', display: 'block', position: 'relative' }}>
              {tabValue === 0 && (
                <Box sx={{ width: '100%', display: 'block' }}>
                  {renderVideoReferences()}
                </Box>
              )}
              {tabValue === 1 && (
                <Box sx={{ width: '100%', display: 'block' }}>
                  {renderDocumentation()}
                </Box>
              )}
              {tabValue === 2 && (
                <Box sx={{ width: '100%', display: 'block' }}>
                  {renderBooks()}
                </Box>
              )}
            </Box>
          </Container>
        </Box>

        <Divider sx={{ my: 6 }} />
        
      </motion.div>
    </Box>
  );
}