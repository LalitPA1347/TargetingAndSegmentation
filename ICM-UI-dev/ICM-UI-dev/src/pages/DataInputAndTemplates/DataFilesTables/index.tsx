import { CheckCircleOutline, Error, FilterList, GetApp, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import {
  Box,
  Chip,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import './styles.scss';
import { DataFilesTablesType } from './types';
import CustomButton from '@components/Button/CustomButton';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const filesTableHeaders = ['Template Name', 'File Name', 'Status', 'Date & Time', 'Action'];

const DataFilesTable: React.FC<DataFilesTablesType> = ({
  tableTitle = 'Section Title',
  dataFilesEntries = [],
  defaultTableShow = false,
  buttonVisibility = {
    searchVisibility: false,
    filterVisibility: false,
    expandCollapseVisibility: false,
  },
  uploadOption = {
    optionVisibility: false,
    onClickButtonEvent: () => {},
  },
  downloadOption = {
    optionVisibility: true,
    onClickButtonEvent: () => {},
  },
}) => {
  const [isRecentFileVisible, setIsRecentFileVisible] = useState<boolean>(defaultTableShow);
  const [searchedInputText, setSearchedInputText] = useState<string>('');

  //search functionality implementation
  const searchInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    //convert input text to lower case
    const lowerCase = event.target.value.toLowerCase();
    setSearchedInputText(lowerCase);
  };

  const filteredDataFilesEntries = dataFilesEntries.filter((dataFile) => {
    //if no input the return the original
    if (searchedInputText === '') {
      return dataFile;
    }
    //return the item which contains the user input
    else {
      return (
        dataFile.templateName.toLowerCase().includes(searchedInputText) ||
        dataFile.fileName.toLowerCase().includes(searchedInputText)
      );
    }
  });

  const { searchVisibility, filterVisibility, expandCollapseVisibility } = buttonVisibility;
  const handleShowHideRecentFiles = () => {
    setIsRecentFileVisible((isRecentFileVisible) => !isRecentFileVisible);
  };
  const showButtonBox = searchVisibility || filterVisibility || expandCollapseVisibility;
  return (
    <div className="data-files-table-parent-container">
      <Box className="data-files-table-header">
        <Typography variant="h6" className="files-page-title">
          {tableTitle}
        </Typography>
        {showButtonBox ? (
          <Box className="file-button-container">
            {searchVisibility && (
              <div className="files-search-container">
                <SearchOutlinedIcon className="files-search-icon" />
                <input type="text" placeholder="Search" onChange={searchInputHandler} className="files-search-input" />
              </div>
            )}
            {filterVisibility && (
              <CustomButton
                label="Filter"
                variant="outlined"
                startIcon={<FilterList />}
                size="small"
                className="file-filter-button"
              ></CustomButton>
            )}
            {expandCollapseVisibility && (
              <IconButton size="small" onClick={handleShowHideRecentFiles}>
                {isRecentFileVisible ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
              </IconButton>
            )}
          </Box>
        ) : undefined}
      </Box>
      {isRecentFileVisible && (
        <TableContainer>
          <Table className="files-table-header">
            <TableHead>
              <TableRow>
                {filesTableHeaders.map((title, index) => (
                  <TableCell key={index}>{title}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredDataFilesEntries.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.templateName}</TableCell>
                  <TableCell>{row.fileName}</TableCell>
                  <TableCell>
                    <Chip
                      icon={row.status === 'Download' ? <CheckCircleOutline /> : <Error />}
                      label={row.status}
                      color={row.status === 'Download' ? 'success' : 'error'}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>
                    {uploadOption.optionVisibility && downloadOption.optionVisibility ? (
                      <IconButton size="small" onClick={downloadOption.onClickButtonEvent}>
                        <MoreHorizIcon htmlColor="#333333" />
                      </IconButton>
                    ) : (
                      <IconButton size="small" onClick={downloadOption.onClickButtonEvent}>
                        <GetApp />
                      </IconButton>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default DataFilesTable;
