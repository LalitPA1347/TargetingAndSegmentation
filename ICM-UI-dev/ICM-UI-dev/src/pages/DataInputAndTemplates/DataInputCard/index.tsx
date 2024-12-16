import { CheckCircle } from '@mui/icons-material';
import { Box, Card, CardContent, Chip, Grid2, Typography } from '@mui/material';
import React from 'react';
import { DataInputCardTypes } from './type';
import './styles.scss';

const DataInputCard: React.FC<DataInputCardTypes> = ({ cardData, index, handleCardClick }) => {
  return (
    <Grid2
      size={{ xs: 12, sm: 6, md: 3 }}
      key={index}
      className="data-files-card"
      onClick={() => handleCardClick(cardData)}
    >
      <Card className="card-container">
        <CardContent className="card-parent">
          <Typography variant="body1" component="div" className="card-title">
            {cardData.title}
          </Typography>
          <Box className="card-bottom-box">
            {React.cloneElement(<img></img>, { src: cardData.icon })}
            <Typography variant="h6" component="div" className="card-value">
              {cardData.totalCount}
            </Typography>
            <Chip
              className="card-chip"
              label={cardData.uploadedCount + ' uploaded'}
              color="default"
              size="small"
              icon={<CheckCircle />}
            />
          </Box>
        </CardContent>
      </Card>
    </Grid2>
  );
};

export default DataInputCard;
