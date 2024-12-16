import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CustomAccordion from '@components/Accordion';
import CustomButton from '@components/Button/CustomButton';
import CustomSelect from '@components/Select';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import './styles.scss';

const data = {
  country: [
    { label: 'USA', value: 'USA' },
    { label: 'Canada', value: 'Canada' },
    { label: 'India', value: 'India' },
  ],
  year: [
    { label: '2022', value: '2022' },
    { label: '2023', value: '2023' },
    { label: '2024', value: '2024' },
  ],
  month: [
    { label: 'January', value: 'January' },
    { label: 'February', value: 'February' },
    { label: 'March', value: 'March' },
  ],
};

const GeneralSetup: React.FC = () => {
  const [businessUnitsCount, setBusinessUnitsCount] = useState(1);
  const [businessUnits, setBusinessUnits] = useState<string[]>([]);
  const [country, setCountry] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');

  const handleAddBusinessUnit = () => {
    setBusinessUnits(Array.from({ length: businessUnitsCount }, (_, i) => `Business Unit ${i + 1}`));
  };

  return (
    <Paper elevation={3} className="general-setup">
      <Box className="general-setup-box">
        <Typography variant="h4" className="box-title">
          General Setup
        </Typography>
        <CustomAccordion title="Setup Details" defaultExpanded={true}>
          <Grid container spacing={2}>
            <Grid size={6} sx={{ paddingRight: '4px' }}>
              <Typography variant="subtitle1" className="field-label">
                Choose Country
              </Typography>
              <CustomSelect
                label="Select Country"
                value={country}
                onChange={(e) => setCountry(e.target.value as string)}
                options={data.country}
                placeholder="Country"
                size="medium"
                fullWidth={true}
              />
            </Grid>
            <Grid size={6} sx={{ paddingLeft: '4px' }}>
              <Grid container>
                <Grid size={12}>
                  <Typography variant="subtitle1" className="field-label">
                    Select Year
                  </Typography>
                </Grid>
                <Grid size={6} sx={{ paddingRight: '8px' }}>
                  <CustomSelect
                    label="Year"
                    options={data.year}
                    placeholder="Year"
                    value={year}
                    onChange={(e) => setYear(e.target.value as string)}
                    size="medium"
                    fullWidth={true}
                  />
                </Grid>
                <Grid size={6} sx={{ paddingLeft: '8px' }}>
                  <CustomSelect
                    label="Month"
                    options={data.month}
                    placeholder="Month"
                    value={month}
                    onChange={(e) => setMonth(e.target.value as string)}
                    size="medium"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid size={6} sx={{ paddingRight: '4px' }}>
              <Typography variant="subtitle1" className="field-label">
                Setup Name
              </Typography>
              <TextField fullWidth label="Type Name" variant="outlined" size="medium" className="input-field" />
            </Grid>
            <Grid size={6} sx={{ paddingLeft: '4px' }} className="save-btn">
              <CustomButton label="Save" startIcon={<SaveOutlinedIcon />} backgroundColor="#002060" />
            </Grid>
          </Grid>
        </CustomAccordion>
        <CustomAccordion title="Business Unit" defaultExpanded={false}>
          <Box className="business-units-box">
            <Typography>Number of Hierarchy Levels</Typography>
            <Box className="general-setup__unit-counter">
              <IconButton onClick={() => setBusinessUnitsCount(Math.max(1, businessUnitsCount - 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography className="counts">{businessUnitsCount}</Typography>
              <IconButton onClick={() => setBusinessUnitsCount(businessUnitsCount + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            <div className="add-btn">
              <CustomButton
                label="Add"
                onClick={handleAddBusinessUnit}
                variant="contained"
                color="primary"
                size="small"
              />
            </div>
          </Box>
          <Grid container spacing={2}>
            <Grid size={12}>
              {businessUnits.length > 0 && (
                <TableContainer component={Paper} className="general-setup__table-container">
                  <Typography className="general-setup__table-label">
                    Enter the Business Unit for your Project
                  </Typography>
                  <Table
                    stickyHeader
                    aria-label="business units table"
                    className="general-setup__table"
                    sx={{
                      // maxWidth: businessUnits.length * 150,
                      tableLayout: 'fixed',
                      margin: '5px',
                      display: 'Block',
                      overflowX: 'auto',
                      '&::-webkit-scrollbar': {
                        width: '66px',
                        height: '6px',
                      },
                      '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#C4CEDC',
                        borderRadius: '5px',
                      },
                      '&::-webkit-scrollbar-track': {
                        backgroundColor: '#EAF0F9',
                      },
                    }}
                  >
                    <TableHead>
                      <TableRow>
                        {businessUnits.map((_, index) => (
                          <TableCell key={index} className="general-setup__table-cell--header">
                            {`Business Unit ${index + 1}`}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        {businessUnits.map((unit, index) => (
                          <TableCell key={index} className="general-setup__table-cell">
                            <TextField
                              variant="outlined"
                              autoComplete="off"
                              fullWidth
                              size="small"
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  height: '40px',
                                  border: '2px',
                                  padding: 0,
                                  '& fieldset': {
                                    border: 'none',
                                  },
                                },
                              }}
                            />
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </Grid>
          </Grid>
        </CustomAccordion>
      </Box>
    </Paper>
  );
};

export default GeneralSetup;
