import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Divider,
  Grid,
  Avatar,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import BrushIcon from "@mui/icons-material/Brush";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import SelectAllIcon from "@mui/icons-material/SelectAll";
import ColorizeIcon from "@mui/icons-material/Colorize";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import LayersIcon from "@mui/icons-material/Layers";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import FlipIcon from "@mui/icons-material/Flip";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import toolsData from "../data/tools";

function getIconForTool(name) {
  const n = (name || "").toLowerCase();
  if (n.includes("brush")) return <BrushIcon />;
  if (n.includes("eraser") || n.includes("erase")) return <AutoFixHighIcon />;
  if (n.includes("color")) return <ColorizeIcon />;
  if (n.includes("transform") || n.includes("flip") || n.includes("rotate") || n.includes("scale")) return <FlipIcon />;
  if (n.includes("filter")) return <BlurOnIcon />;
  if (n.includes("text")) return <TextFieldsIcon />;
  if (n.includes("lasso") || n.includes("select")) return <SelectAllIcon />;
  if (n.includes("layer")) return <LayersIcon />;
  if (n.includes("magic") || n.includes("wand")) return <AutoFixHighIcon />;
  return null;
}

const categories = toolsData.map((c) => ({
  title: c.category,
  items: c.tools.map((t) => ({
    ...t,
    icon: getIconForTool(t.name),
  })),
}));

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const sectionVariants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2
    } 
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 12
    } 
  },
};

export default function Tools() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);

  function handleOpen(tool) {
    setSelectedTool(tool);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
    setSelectedTool(null);
  }

  return (
    <Box 
      component={motion.div}
      initial="hidden"
      animate="show"
      variants={sectionVariants}
      sx={{ 
        py: 8, 
        background: "#FFFFFF",
      }}
    >
      <Box sx={{ width: '100%', px: { xs: 2, sm: 4, md: 5 } }}>
        <motion.div variants={titleVariants}>
          <Typography 
            variant="h3" 
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
            Exhibition Tools
          </Typography>
          
          <Typography 
            variant="body1"
            color="text.secondary"
            sx={{ 
              textAlign: "center",
              maxWidth: 700,
              mx: "auto",
              mb: 8,
              fontFamily: "serif",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              fontStyle: "italic"
            }}
          >
            Explore our curated collection of digital artistry implements. Each tool represents 
            a distinct approach to visual expression within the IbisPaint medium.
          </Typography>
        </motion.div>

        {categories.map((cat, ci) => (
          <Box key={ci} sx={{ mb: 6 }}>
            <motion.div variants={titleVariants}>
              <Box sx={{ 
                borderBottom: '1px solid rgba(0,0,0,0.1)', 
                pb: 1, 
                mb: 4,
                display: 'inline-block'
              }}>
                <Typography 
                  variant="h4" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 500, 
                    letterSpacing: 2,
                    textTransform: 'uppercase',
                    color: '#000000',
                    mb: 0
                  }}
                >
                  {cat.title}
                </Typography>
              </Box>
            </motion.div>

            <motion.div variants={containerVariants} initial="hidden" animate="show">
              <Grid container spacing={3} justifyContent="left">
                {cat.items.map((tool, i) => (
                  <Grid item key={i}>
                    <motion.div variants={cardVariants} whileHover={{ scale: 1.03 }}>
                      <Box
                        onClick={() => handleOpen(tool)}
                        sx={{
                          height: 140,
                          width: 490,
                          p: 3,
                          background: "#FFFFFF",
                          color: "#000000",
                          border: "1px solid rgba(0,0,0,0.08)",
                          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                          },
                        }}
                      >
                        <Box sx={{ display: "flex", gap: 3, height: '100%' }}>
                          <Avatar
                            sx={{
                              bgcolor: "rgba(0,0,0,0.05)",
                              color: "#000000",
                              width: 56,
                              height: 56,
                              borderRadius: 0,
                              fontWeight: 700,
                              flexShrink: 0
                            }}
                          >
                            {tool.icon ? (
                              tool.icon
                            ) : (
                              tool.name
                                .split(" ")
                                .map((s) => s[0])
                                .slice(0, 2)
                                .join("")
                                .toUpperCase()
                            )}
                          </Avatar>

                          <Box sx={{ overflow: 'hidden' }}>
                            <Typography variant="h6" sx={{ 
                              fontWeight: 500,
                              letterSpacing: 1,
                              fontSize: '1rem',
                              textTransform: 'uppercase'
                            }}>
                              {tool.name}
                            </Typography>
                            <Typography variant="body2" sx={{ 
                              color: '#555',
                              mt: 0.5,
                              fontFamily: 'serif',
                              fontStyle: 'italic',
                              display: '-webkit-box',
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis'
                            }}>
                              {tool.desc}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
            
            {ci < categories.length - 1 && (
              <Divider sx={{ my: 6, opacity: 0.3 }} />
            )}
          </Box>
        ))}

        <Box 
          component={motion.div}
          variants={titleVariants}
          sx={{ 
            textAlign: "center", 
            mt: 12,
            mb: 4,
            background: "#FFFFFF",
            p: 5,
            borderTop: "1px solid rgba(0,0,0,0.1)",
            borderBottom: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          <Typography 
            variant="h5" 
            gutterBottom 
            sx={{ 
              fontWeight: 500, 
              letterSpacing: 3,
              textTransform: 'uppercase',
              mb: 3
            }}
          >
            Artistic Development
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              maxWidth: 700,
              mx: 'auto',
              color: '#333',
              fontFamily: 'serif',
              lineHeight: 1.8,
              fontSize: '1.05rem'
            }}
          >
            The collection presented chronicles the evolution of digital artistic expression. 
            Each implement represents a distinct approach to visual communication, allowing for 
            the exploration of form, texture, and composition within the digital medium.
          </Typography>
        </Box>
      </Box>
      <Dialog 
        open={open} 
        onClose={handleClose} 
        maxWidth="sm" 
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 0,
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          }
        }}
      >
        <DialogTitle sx={{ 
          p: 3, 
          pb: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          borderBottom: '1px solid rgba(0,0,0,0.1)'
        }}>
          <Avatar
            sx={{
              bgcolor: "rgba(0,0,0,0.05)",
              color: "#000000",
              width: 40,
              height: 40,
              borderRadius: 0,
              fontWeight: 700,
            }}
          >
            {selectedTool?.icon ? (
              selectedTool.icon
            ) : (
              selectedTool?.name
                .split(" ")
                .map((s) => s[0])
                .slice(0, 2)
                .join("")
                .toUpperCase()
            )}
          </Avatar>
          <Typography sx={{ 
            fontWeight: 500,
            letterSpacing: 1,
            fontSize: '1.2rem',
            textTransform: 'uppercase'
          }}>
            {selectedTool?.name}
          </Typography>
        </DialogTitle>

        <DialogContent sx={{ p: 3 }}>
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 3,
              color: '#333',
              fontFamily: 'serif',
              fontStyle: 'italic',
              fontSize: '1.1rem',
              lineHeight: 1.7
            }}
          >
            {selectedTool?.desc}
          </Typography>

          {selectedTool?.steps && (
            <Box sx={{ mb: 4 }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 2,
                  fontWeight: 500,
                  letterSpacing: 1,
                  fontSize: '1rem',
                  textTransform: 'uppercase'
                }}
              >
                Steps
              </Typography>
              <List sx={{ pl: 2 }}>
                {selectedTool.steps.map((s, i) => (
                  <ListItem key={i} sx={{ px: 0, py: 0.5 }}>
                    <ListItemText 
                      primary={`${i + 1}. ${s}`}
                      primaryTypographyProps={{
                        sx: {
                          fontFamily: 'serif',
                          fontSize: '1rem',
                          lineHeight: 1.7
                        }
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          )}

          {selectedTool?.tips && (
            <Box sx={{ mb: 4 }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 2,
                  fontWeight: 500,
                  letterSpacing: 1,
                  fontSize: '1rem',
                  textTransform: 'uppercase'
                }}
              >
                Tips
              </Typography>
              <List sx={{ pl: 2 }}>
                {selectedTool.tips.map((t, i) => (
                  <ListItem key={i} sx={{ px: 0, py: 0.5 }}>
                    <ListItemText 
                      primary={t}
                      primaryTypographyProps={{
                        sx: {
                          fontFamily: 'serif',
                          fontSize: '1rem',
                          lineHeight: 1.7
                        }
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          )}

          {selectedTool?.references && (
            <Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 2,
                  fontWeight: 500,
                  letterSpacing: 1,
                  fontSize: '1rem',
                  textTransform: 'uppercase'
                }}
              >
                References
              </Typography>
              <List sx={{ pl: 2 }}>
                {selectedTool.references.map((r, i) => (
                  <ListItem key={i} sx={{ px: 0, py: 0.5 }}>
                    <ListItemText 
                      primary={r}
                      primaryTypographyProps={{
                        sx: {
                          fontFamily: 'serif',
                          fontSize: '1rem',
                          lineHeight: 1.7
                        }
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          )}
        </DialogContent>

        <DialogActions sx={{ 
          p: 3, 
          pt: 2,
          borderTop: '1px solid rgba(0,0,0,0.1)'
        }}>
          <Button 
            onClick={handleClose}
            disableRipple
            sx={{
              color: '#000',
              textTransform: 'uppercase',
              letterSpacing: 1,
              fontSize: '0.85rem',
              fontWeight: 500,
              bgcolor: 'transparent',
              '&:hover': {
                bgcolor: 'black',
              }
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
