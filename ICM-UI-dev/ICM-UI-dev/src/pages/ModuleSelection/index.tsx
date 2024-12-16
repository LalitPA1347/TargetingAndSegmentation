import { Paper, Box, Typography, Button } from '@mui/material';
import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CustomCard from './CustomCard';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import PendingActionsSharpIcon from '@mui/icons-material/PendingActionsSharp';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import { useNavigate } from 'react-router-dom';
const ModuleSelection = () => {
  const navigate = useNavigate();

  const cardsColor = [
    {
      iconColor: '#1C5D36',
      cardBgColor: '#E7FCEF',
    },
    {
      iconColor: '#004EEA',
      cardBgColor: '#E1EBFF',
    },
    {
      iconColor: '#5D48C1',
      cardBgColor: '#EAE6FF',
    },
    {
      iconColor: '#626F8A',
      cardBgColor: '#F5F7FA',
    },
  ];
  const handleClick = () => {
    navigate('/login');
  };

  // NOTE: Temp code
  const handleAccessNowClick = (cardString: string) => {
    console.log(cardString);
    localStorage.setItem('token', 'abc');
    navigate('/');
  };

  return (
    <div className="module-selection-container">
      <Button onClick={handleClick} className="back-button">
        <ArrowBackIosNewIcon fontSize="medium" /> Back to login
      </Button>
      <Paper className="paper">
        <Box>
          <Typography variant="h3" className="box-heading">
            IC Operations
          </Typography>
          <Typography variant="subtitle1" className="box-sub-heading">
            IC Ops Helps In Day-to-day Administration Of Rewards Programs Ensuring Accuracy In Payouts, Compliance With
            Policies, And Alignment With Performance Metrics
          </Typography>
        </Box>
        <Box className="cards-box">
          <CustomCard
            Icon={SignalCellularAltIcon}
            heading="Sales Crediting"
            subHeading="Sales Crediting Module Helps In Setting."
            buttonLabel="Access Now"
            iconColor="#1C5D36"
            cardBgColor="#E7FCEF"
            handleBtnClick={() => handleAccessNowClick('Sales Crediting')}
          />
          <CustomCard
            Icon={HowToRegOutlinedIcon}
            heading="Eligibility"
            subHeading="Sales Crediting Module Helps In Setting."
            buttonLabel="Access Now"
            iconColor="#004EEA"
            cardBgColor="#E1EBFF"
            handleBtnClick={() => handleAccessNowClick('Eligibility')}
          />
          <CustomCard
            Icon={SettingsApplicationsOutlinedIcon}
            heading="IC Admin"
            subHeading="Sales Crediting Module Helps In Setting."
            buttonLabel="Access Now"
            iconColor="#5D48C1"
            cardBgColor="#EAE6FF"
            handleBtnClick={() => handleAccessNowClick('IC Admin')}
          />
          <CustomCard
            Icon={DvrOutlinedIcon}
            heading="IC Reporting"
            subHeading="Sales Crediting Module Helps In Setting."
            buttonLabel="Request Access"
            iconColor="#626F8A"
            cardBgColor="#F5F7FA;
"
            handleBtnClick={() => {
              console.log('IC Reporting');
            }}
          />
        </Box>
      </Paper>
      <Paper className="paper">
        <Box>
          <Typography variant="h3" className="box-heading">
            IC Analytics
          </Typography>
          <Typography variant="subtitle1" className="box-sub-heading">
            IC Analytics Leverages Data To Design & Optimize Reward Programs That Aligns With Organizational Goals And
            Employee Motivation
          </Typography>
        </Box>
        <Box className="cards-box">
          <CustomCard
            Icon={FactCheckOutlinedIcon}
            heading="IC Health Check"
            subHeading="Sales Crediting Module Helps In Setting."
            buttonLabel="Access Now"
            iconColor="#004EEA"
            cardBgColor="#E1EBFF"
            handleBtnClick={() => handleAccessNowClick('IC Health Check')}
          />
          <CustomCard
            Icon={MyLocationOutlinedIcon}
            heading="Goal Settings"
            subHeading="Sales Crediting Module Helps In Setting."
            buttonLabel="Access Now"
            iconColor="#5D48C1"
            cardBgColor="#EAE6FF"
            handleBtnClick={() => handleAccessNowClick('Goal Settings')}
          />
          <CustomCard
            Icon={PendingActionsSharpIcon}
            heading="IC Plan Design"
            subHeading="Sales Crediting Module Helps In Setting."
            buttonLabel="Access Now"
            iconColor="#1C5D36"
            cardBgColor="#E7FCEF"
            handleBtnClick={() => handleAccessNowClick('IC Plan Design')}
          />
        </Box>
      </Paper>
      <Paper className="paper">
        <Box>
          <Typography variant="h3" className="box-heading">
            Analytics Workbench
          </Typography>
          <Typography variant="subtitle1" className="box-sub-heading">
            IC Analytics Leverages Data To Design & Optimize Reward Programs That Aligns With Organizational Goals And
            Employee Motivation
          </Typography>
        </Box>
        <Box className="cards-box">
          <CustomCard
            Icon={AssessmentOutlinedIcon}
            heading="Analytics Workbench"
            subHeading="Sales Crediting Module Helps In Setting."
            buttonLabel="Request Access"
            iconColor="#626F8A"
            cardBgColor="#F5F7FA;
"
            handleBtnClick={() => {
              console.log('Analytics Workbench');
            }}
          />
        </Box>
      </Paper>
    </div>
  );
};
export default ModuleSelection;
