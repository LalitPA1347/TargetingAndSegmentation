import React from 'react';
import './styles.scss';
import { Box, Checkbox, FormControlLabel, Grid2, Paper, Typography } from '@mui/material';
import { DataCardsType } from './types';
import salesAndGoals from '../../assets/icons/sales-and-goals.svg';
import payCurveAndPayGrade from '../../assets/icons/paycurve-and-paygrade.svg';
import adjustments from '../../assets/icons/adjustments.svg';
import multipliers from '../../assets/icons/multipliers.svg';
import eligibility from '../../assets/icons/eligibility.svg';
import hierarchy from '../../assets/icons/hierarchy.svg';
import others from '../../assets/icons/others.svg';
import DataFilesTable from './DataFilesTables';
import { ButtonVisibility, DataFilesType } from './DataFilesTables/types';
import CustomDialog from '@components/CustomDialog';
import DataInputCard from './DataInputCard';
import SuccessUploadMessage from '@components/SuccessUploadMessage';

const filterOptions = ['All the BUs', 'Onc', 'CV', 'Neuro+GI', 'Rheum+Derm'];

const dataCards: DataCardsType[] = [
  { icon: hierarchy, title: 'Hierarchy', totalCount: 1, uploadedCount: 0 },
  { icon: salesAndGoals, title: 'Sales and Goals', totalCount: 3, uploadedCount: 2 },
  { icon: payCurveAndPayGrade, title: 'Paycurve and Paygrade', totalCount: 6, uploadedCount: 4 },
  { icon: multipliers, title: 'Multiplier', totalCount: 1, uploadedCount: 1 },
  { icon: eligibility, title: 'Eligibility', totalCount: 1, uploadedCount: 1 },
  { icon: adjustments, title: 'Adjustments', totalCount: 3, uploadedCount: 2 },
  { icon: others, title: 'Others', totalCount: 1, uploadedCount: 0 },
];

const recentDataFiles: DataFilesType[] = [
  {
    templateName: 'Aligned Sales File',
    fileName: 'Marketplace.xml',
    status: 'Download',
    date: '14 Apr 2024 - 1:45 PM',
  },
  {
    templateName: 'Aligned Goals File',
    fileName: 'Venus Dashboard Builder.xml',
    status: 'Error',
    date: '10 Apr 2024 - 10:30 AM',
  },
  {
    templateName: 'Baseline Product',
    fileName: 'General ideas to improve Edit.xml',
    status: 'Download',
    date: '15 Mar 2024 - 12:30 PM',
  },
  {
    templateName: 'Templates to display correctly',
    fileName: 'Venus Design System.xml',
    status: 'Download',
    date: '18 Apr 2024 - 2:30 PM',
  },
  {
    templateName: 'Aligned Sales File',
    fileName: 'Marketplace.xml',
    status: 'Download',
    date: '14 Apr 2024 - 1:45 PM',
  },
  {
    templateName: 'Aligned Goals File',
    fileName: 'Venus Dashboard Builder.xml',
    status: 'Error',
    date: '10 Apr 2024 - 10:30 AM',
  },
];

const DataInputAndTemplates: React.FC = () => {
  const [openCardDialog, setOpenCardDialog] = React.useState<boolean>(false);
  const [openDownloadSuccessDialog, setOpenDownloadSuccessDialog] = React.useState<boolean>(false);
  const [clickedCard, setClickedCard] = React.useState<DataCardsType>(undefined);

  const handleCardClick = (clickedCardData: DataCardsType) => {
    setClickedCard(clickedCardData);
    setOpenCardDialog(true);
  };

  const handleCardDialogClose = () => {
    setOpenCardDialog(false);
  };

  const handleDownloadButtonClick = () => {
    setOpenDownloadSuccessDialog(true);
  };

  const closeSuccessMessageDialog = () => {
    setOpenDownloadSuccessDialog(false);
  };

  const buttonVisibility: ButtonVisibility = {
    searchVisibility: true,
    filterVisibility: true,
    expandCollapseVisibility: true,
  };

  const dialogButtonVisibility: ButtonVisibility = {
    ...buttonVisibility,
    searchVisibility: false,
    expandCollapseVisibility: false,
  };

  return (
    <div className="data-input-template-parent-container">
      {clickedCard && (
        <CustomDialog
          open={openCardDialog}
          onCloseEvent={handleCardDialogClose}
          closeIcon={{
            buttonVisibility: true,
            onClickButtonEvent: handleCardDialogClose,
          }}
          width="1355px"
          height="695px"
        >
          <DataFilesTable
            buttonVisibility={dialogButtonVisibility}
            defaultTableShow={true}
            tableTitle={clickedCard.title}
            dataFilesEntries={recentDataFiles}
            uploadOption={{ optionVisibility: true }}
          />
        </CustomDialog>
      )}
      {openDownloadSuccessDialog && (
        <CustomDialog
          open={openDownloadSuccessDialog}
          onCloseEvent={closeSuccessMessageDialog}
          buttonPosition="center"
          okayButton={{
            buttonVisibility: true,
            buttonLabel: 'Okay',
            onClickButtonEvent: closeSuccessMessageDialog,
          }}
          width="650px"
          height="415px"
        >
          <SuccessUploadMessage></SuccessUploadMessage>
        </CustomDialog>
      )}
      <Paper className="paper-round-edges">
        <div>
          <Typography variant="h4" className="data-input-templates-title">
            Data Input & Templates
          </Typography>
          <Box className="data-input-checkbox-group">
            {filterOptions.map((option, index) => (
              <FormControlLabel
                className={
                  'data-input-checkbox-label data-input-checkbox-form-label' +
                  (filterOptions.length - 1 === index ? '' : ' data-input-checkbox-form-label-border')
                }
                key={option + '-' + index}
                control={
                  <Checkbox
                    sx={{
                      color: '#dbdde0',
                      '&.Mui-checked': {
                        color: '#004eea',
                      },
                    }}
                  />
                }
                label={
                  <Typography variant="h4" className="data-input-checkbox-label">
                    {option}
                  </Typography>
                }
              />
            ))}
          </Box>
        </div>
        <Grid2 container spacing={3}>
          {dataCards.map((card, index) => (
            <DataInputCard cardData={card} key={index} index={index} handleCardClick={handleCardClick}></DataInputCard>
          ))}
        </Grid2>
      </Paper>
      <Paper className="paper-round-edges ">
        <DataFilesTable
          buttonVisibility={buttonVisibility}
          tableTitle="Recent Data Files"
          dataFilesEntries={recentDataFiles}
          downloadOption={{ optionVisibility: true, onClickButtonEvent: handleDownloadButtonClick }}
        />
      </Paper>
    </div>
  );
};

export default DataInputAndTemplates;
