import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './styles.scss';
import { CustomSearchTypes } from './types';

const CustomSearch: React.FC<CustomSearchTypes> = ({ 
    margin = "0px 0px 0px 0px",
    backgroundColor = "#f4f7fe",
    borderRadius = "20px",
    border = "none",
    ...props 
}) => {
  return (
    <div
      className="search-container"
      style={{
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        margin: margin,
        border: border
      }}
    >
      <SearchOutlinedIcon className="search-icon" />
      <input
        type="text"
        placeholder="Search"
        className="search-input"
        {...props}
        style={{
          backgroundColor: backgroundColor
        }}
      />
    </div>
  );
};

export default CustomSearch;
