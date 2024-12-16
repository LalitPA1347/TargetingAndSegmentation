import React from 'react';
import { ButtonProps } from '@mui/material/Button';

export interface CustomButtonProps extends ButtonProps {
  label: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  loading?: boolean;
  backgroundColor?: string;
  textColor?: string;
  width?: string | number;
  height?: string | number;
}
