import React from 'react';
import { Card, Box, CardContent, CardActions, Typography, Button } from '@mui/material';
import { CustomCardProps } from './CustomCard.types';
import './styles.scss';
const CustomCard: React.FC<CustomCardProps> = ({
  Icon,
  heading,
  subHeading,
  cardBgColor,
  buttonLabel,
  handleBtnClick,
  iconColor,
}) => {
  return (
    <Card className="card-container">
      <Box
        sx={{
          backgroundColor: cardBgColor,
          '&:hover': {
            backgroundColor: iconColor,
            color: '#ffffff',
            '& .card-content, & .card-icon, & .card-header,  & .card-button': {
              color: '#ffffff',
            },
            '& .card-sub-header': {
              color: '#E1E1E1',
            },
          },
        }}
        className="card-box"
      >
        <CardContent className="card-content">
          <Icon sx={{ color: iconColor }} className="card-icon" />
          <Typography variant="h6" className="card-header">
            {heading}
          </Typography>
          <Typography variant="body2" className="card-sub-header">
            {subHeading}
          </Typography>
        </CardContent>

        <CardActions>
          <Button sx={{ color: iconColor }} onClick={handleBtnClick} className="card-button">
            {buttonLabel}
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};

export default CustomCard;
