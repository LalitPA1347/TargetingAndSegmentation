import React, { useEffect, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import CarouselProps from './Carousel.type';

const Carousel: React.FC<CarouselProps> = ({ images, interval = 3000, children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the slide every 'interval' milliseconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [interval, images.length]);

  // Handler to navigate to a specific slide
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Carousel Image */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={{ position: 'relative', top: '133px', width: '598px', height: '598px', objectFit: 'cover' }}
      />

      {/* Children overlay content */}
      <Box
        sx={{
          position: 'absolute',
          top: '71.5%', // Adjust as needed for vertical alignment
          left: '50%',
          transform: 'translate(-50%, -30%)',
          textAlign: 'center',
          color: 'white', // Overlay text color
          zIndex: 1,
          marginBottom: '60px',
        }}
      >
        {children}
      </Box>

      {/* Dots Navigation */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 140,
          display: 'flex',
          gap: 1,
        }}
      >
        {images.map((_, index) => (
          <IconButton
            key={index}
            size="small"
            onClick={() => handleDotClick(index)}
            sx={{
              borderRadius: '50%',
              backgroundColor: index === currentIndex ? '#FFFFFF' : '#387BE0',
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Carousel;
