import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CustomSelectProps } from './types';

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  options,
  placeholder = 'Select an option',
  value,
  onChange,
  size = 'small',
  fullWidth = false,
  minWidth = 120,
  backgroundColor = '#ffffff',
}) => {
  return (
    <FormControl
      className="select-container"
      sx={{ m: 1, minWidth: minWidth, backgroundColor: backgroundColor }}
      size={size}
      fullWidth={fullWidth}
    >
      <InputLabel id={`${label}-select-label`}>{label}</InputLabel>
      <Select
        sx={{ borderRadius: '7px', height: '60px' }}
        labelId={`${label}-select-label`}
        id={`${label}-select`}
        value={value}
        label={label}
        onChange={onChange}
      >
        <MenuItem value="">
          <em>{placeholder}</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
