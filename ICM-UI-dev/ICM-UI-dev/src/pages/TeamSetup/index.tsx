import React, { useState } from 'react';
import { Paper, Box, Typography, Radio, RadioGroup, FormControlLabel, IconButton } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import CustomButton from '@components/Button/CustomButton';
import { PageProps } from './types';

const TeamSetup: React.FC<PageProps> = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hierarchyLevel, setHierarchyLevel] = useState<number>(1);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const incrementLevel = () => setHierarchyLevel((prev) => prev + 1);
  const decrementLevel = () => setHierarchyLevel((prev) => Math.max(prev - 1, 1));

  return (
    <Paper
      sx={{
        boxSizing: 'border-box',
        width: '100%',
        height: '1020px',
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '20px',
        background: '#FFFFFF',
        border: '1px solid #E6E6E6',
        boxShadow: '0px 4px 10px rgba(112, 144, 176, 0.1)',
        borderRadius: '16px',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: '24px', sm: '28px', md: '32px' },
          fontWeight: 500,
          color: '#333333',
          marginBottom: '20px',
        }}
      >
        Team Setup
      </Typography>{' '}
      <Box
        sx={{
          width: '100%',
          background: '#F5F7FA',
          borderRadius: '10px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: '18px', sm: '20px', md: '23px' },
            lineHeight: '28px',
            color: '#000000',
            fontWeight: 400,
          }}
        >
          GS_NOV_2024
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: '14px', sm: '16px' },
            lineHeight: '24px',
            color: '#333333',
            fontWeight: 500,
            letterSpacing: '0.5px',
          }}
        >
          Is Hierarchy level consistent across Business Units?
        </Typography>

        <RadioGroup
          row
          value={selectedOption}
          onChange={handleOptionChange}
          sx={{
            display: 'flex',
            gap: '20px',
          }}
        >
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>

        {selectedOption && (
          <Box
            sx={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              mt: 2,
              flexWrap: 'wrap',
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '12px', sm: '14px' },
                fontWeight: 500,
                color: '#333333',
              }}
            >
              Number of Hierarchy Levels
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                borderRadius: '5px',
                gap: '8px',
                width: '105px',
                height: '44px',
                margin: '2px',
              }}
            >
              <IconButton onClick={decrementLevel}>
                <Remove />
              </IconButton>
              <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>{hierarchyLevel}</Typography>
              <IconButton onClick={incrementLevel}>
                <Add />
              </IconButton>
            </Box>
            <CustomButton label="Add" variant="contained" color="primary" backgroundColor="#002060" />
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default TeamSetup;
