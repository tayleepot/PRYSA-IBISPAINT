import { 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  Box, 
  IconButton,
  Chip,
  Modal,
  Backdrop,
  Fade
} from "@mui/material";
import { motion } from "framer-motion";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function ArtworkCard({ art }) {
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card
      component={motion.div}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      sx={{
        borderRadius: 0, 
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
        transition: "all 0.3s ease",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        backgroundColor: "#FFFFFF",
        border: "1px solid rgba(0,0,0,0.08)",
        width: '100%',
        '& > .MuiCardContent-root': {
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        },
        "&:hover": {
          boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box sx={{ position: "relative", overflow: "hidden", flexShrink: 0 }}>
        <CardMedia 
          component="img" 
          height={240} 
          image={art.image} 
          alt={art.title}
          sx={{
            width: '100%',
            height: 240,
            objectFit: 'cover',
            transition: "transform 0.5s ease",
            display: 'block',
            ...(isHovered && { transform: "scale(1.05)" }),
          }}
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%)",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <Box 
            sx={{ 
              display: "flex", 
              gap: 1, 
              width: "100%", 
              justifyContent: "center",
              mb: 1
            }}
          >
            <IconButton 
              size="small" 
              onClick={handleOpen}
              sx={{ 
                color: "white", 
                backgroundColor: "rgba(255,255,255,0.2)",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.3)",
                }
              }}
            >
              <ZoomInIcon />
            </IconButton>
            <IconButton 
              size="small" 
              sx={{ 
                color: "white", 
                backgroundColor: "rgba(255,255,255,0.2)",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.3)",
                }
              }}
            >
              <FavoriteIcon />
            </IconButton>
            <IconButton 
              size="small" 
              sx={{ 
                color: "white", 
                backgroundColor: "rgba(255,255,255,0.2)",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.3)",
                }
              }}
            >
              <ShareIcon />
            </IconButton>
          </Box>
        </motion.div>
      </Box>
      
      <CardContent sx={{ flexGrow: 1, p: 3, pb: 3.5 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1.5, gap: 1 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 500,
              lineHeight: 1.2,
              letterSpacing: 1,
              fontSize: '1rem',
              textTransform: 'uppercase'
            }}
          >
            {art.title}
          </Typography>
          
          <Chip 
            label={art.artist || "Artist"} 
            size="small" 
            sx={{ 
              height: 24, 
              fontSize: "0.7rem", 
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
            lineHeight: 1.7,
            color: '#555',
            fontFamily: 'serif',
            fontStyle: 'italic',
            fontSize: '0.9rem'
          }}
        >
          {art.description}
        </Typography>
      </CardContent>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '90vw',
            maxHeight: '90vh',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 0,
            outline: 'none'
          }}>
            <IconButton
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: 'white',
                backgroundColor: 'rgba(0,0,0,0.4)',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.6)',
                }
              }}
            >
              <CloseIcon />
            </IconButton>
            <img
              src={art.image}
              alt={art.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block'
              }}
            />
          </Box>
        </Fade>
      </Modal>
    </Card>
  );
}
